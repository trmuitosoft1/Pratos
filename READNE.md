# Pratos

A small web application to manage and reserve dishes of the day. The project includes simple HTML pages, JavaScript helpers and a PHP proxy used to forward requests to a Google Apps Script.

## Prerequisites

- **Node.js** and **npm** – required for installing dependencies and running tests.
- **PHP** – required when using `proxy.php` to forward requests.

## Installation

Install the Node.js dependencies with:

```bash
npm install
```

## Testing

Before running the tests, make sure the dependencies are installed with:

```bash
npm install
```

Then run the test suite with:

```bash
npm test
```

The tests use [Jest](https://jestjs.io/).

## Running the HTML pages

Open `index.html` in a browser to load the initial page. It redirects to `segunda.html`, which contains the main interface for selecting and reserving dishes. You can serve the project with any static file server or open the files directly if your browser allows loading local JavaScript.
