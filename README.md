# FullCycle

Docker user **felipeapompeu**

[Desafio Golang](https://hub.docker.com/repository/docker/felipeapompeu/fullcycle)

For the node challenge follow this steps:

1. On your terminal run `docker-compose up -d --build`

2. After you need to run `$ docker-compose exec app sh` to enter on the app shell.

3. Run `npm install` then `npx sequelize-cli db:migrate` and this complete the setup.

4. After that just run `node index.js` and in your browser access `http://localhost:8080`
