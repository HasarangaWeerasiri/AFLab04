const { test } = require('node:test');
const assert = require('node:assert');
const http = require('node:http');
const app = require('../src/app');

let server;
let baseUrl;

test('setup server', async (t) => {
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      baseUrl = `http://localhost:${server.address().port}`;
      resolve();
    });
  });
});

test('GET / returns application info', async (t) => {
  const response = await fetch(`${baseUrl}/`);
  const body = await response.json();

  assert.strictEqual(response.status, 200);
  assert.strictEqual(body.message, 'Application Framework Lab 04');
  assert.strictEqual(body.status, 'running');
});

test('GET /health returns healthy status', async (t) => {
  const response = await fetch(`${baseUrl}/health`);
  const body = await response.json();

  assert.strictEqual(response.status, 200);
  assert.strictEqual(body.status, 'healthy');
});

test('POST /echo returns request body', async (t) => {
  const payload = { name: 'test', value: 42 };
  const response = await fetch(`${baseUrl}/echo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const body = await response.json();

  assert.strictEqual(response.status, 200);
  assert.deepStrictEqual(body.echo, payload);
});

test('teardown server', async (t) => {
  await new Promise((resolve, reject) => {
    server.close((err) => (err ? reject(err) : resolve()));
  });
});
