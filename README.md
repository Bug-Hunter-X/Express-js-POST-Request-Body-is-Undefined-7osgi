# Express.js POST Request Body Undefined Bug

This repository demonstrates a common bug in Express.js applications where the request body of a POST request is undefined or empty. The issue arises when the middleware to parse the request body is missing or misconfigured.

## Bug Description

A simple Express.js server is set up to handle POST requests to the `/user` endpoint.  The server starts without errors, but when a POST request is sent with a JSON payload, `req.body` remains undefined in the request handler, preventing access to the request data.

## Solution

The solution involves ensuring that the `express.json()` middleware is used before the route handler.  This middleware parses the incoming JSON payload and populates the `req.body` object.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js` to start the server.
4. Send a POST request to `http://localhost:3000/user` with a JSON payload using a tool like Postman or curl.  Observe that the server logs an empty object for `req.body`.
5. Run `node bugSolution.js` to start the server with the fix.  Repeat step 4 and observe that the server logs the JSON payload correctly.
