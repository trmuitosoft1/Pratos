# Pratos

A small web application to manage and reserve dishes of the day. The project includes simple HTML pages, JavaScript helpers and a PHP proxy used to forward requests to a Google Apps Script. All reservation requests are sent through `proxy.php` so that the response from the Google service can be read normally without relying on `no-cors` mode.


## Prerequisites

- **Node.js** and **npm** – required for installing dependencies and running tests.
- **PHP** – required when using `proxy.php` to forward requests.

## Installation

Install the Node.js dependencies with:

```bash
npm install
```

## Testing

Run the following commands to install the dependencies and execute the test suite:

```bash
npm install

npm test
```

The tests use [Jest](https://jestjs.io/).

## Running the HTML pages

Open `index.html` in a browser to load the initial page. It redirects to `segunda.html`, which contains the main interface for selecting and reserving dishes. You can serve the project with any static file server or open the files directly if your browser allows loading local JavaScript.

> **Note**
> `index.html` seeds `localStorage` with example dishes. Open it before `segunda.html` so the list of dishes is available.
## Running locally

You can use PHP's built‑in server to host the files while developing. From the
project root run:

```bash
php -S localhost:8000
```

Then open <http://localhost:8000/index.html> in your browser. By sending
requests through `proxy.php` you avoid CORS errors when communicating with the
Google Apps Script.

## Google Apps Script Endpoint
