# AFLab04

Test repository for Application Framework.

## Getting Started

### Prerequisites

- Node.js 18 or later

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The server starts on port 3000 by default. Set the `PORT` environment variable to use a different port.

### API Endpoints

| Method | Path     | Description              |
|--------|----------|--------------------------|
| GET    | `/`      | Returns application info |
| GET    | `/health`| Returns health status    |
| POST   | `/echo`  | Echoes the request body  |

### Running Tests

```bash
npm test
```
