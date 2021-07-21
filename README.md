# lap2_assignment

To run,
- In the server folder, run `docker-compose up`
- In the client folder, run `npm install`. Subsequently, run `npm run dev`.

To stop client,
- `CTRL+C` in client.

To stop server, 
- `docker-compose down` in server.

To empty database,
- `docker-compose down --remove-orphans --volumes` followed by `docker volume prune --force` in server.
