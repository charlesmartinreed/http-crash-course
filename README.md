What is HTTP?

Hyper Text Transfer Protocol

Make request, get response (contains headers, body)

HTTP is Stateless, which means:

- Each request is completely independent
- Local storage, sessions, cookies, etc are tools for persistent state for better UI/UX

What is HTTPS?
Hyper Text Transfer Protocol Secure

HTTP where data is encrypted with SSL/TLS. Requires installation of a SSL certificate on a web host.

HTTP Methods

- GET: Retrieve data from server
- POST: Submit data to the server
- PUT: Update date already on the server
- DELETE: Deletes data from server

HTTP STATUS CODES
1xx: Informational
Request received/processing

2xx: Success
200 (OK), 201 (OK, resource created)

3xx: Redirect
301 (moved to new URL), 304 (not modified, seen when cached page has not changed)

4xx: Client Error
400 (bad request), 401 (Unauthorized), 404 (Not Found)

5xx: Server Error
500 (Internal server error)
