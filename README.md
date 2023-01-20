# StepByStep

Recipe sharing and cooking application.

## To run the project

### Prerequisites

- [docker](https://www.docker.com/products/docker-desktop/)
- [local environment variables](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa) (add the `.env` file to the root of the project following the example set in `.env.example`)

### Run the command

Position yourselft in the root in the root of the project and run the command

```cmd
$ docker compose up
```

While the docker containers are running open a new terminal window, position yourself in the root of the `/server` folder and run the commands

```cmd
$ npm run db:migration:up
$ npm run db:seed
```

You are ready to view the project. Open your browser on http://localhost:3000 and set your browser window to a mobile size for the designed experience.

</br></br></br>

## To start the project in developer mode

### Prerequisites

- [node](https://nodejs.org/en/download/) ~v18
- [docker](https://www.docker.com/products/docker-desktop/)
- [local environment variables](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa) (add the `.env` file to the root of the project following the example set in `.env.example`)

### Run the commands

```cmd
$ npm install && (cd server && npm install) && (cd client && npm install)
$ docker compose up
```

### To install/uninstall a package

**Stop local server!**

```cmd
$ cd server    // or client
$ npm install package-name
$ npm uninstall package-name
```

### Run migrations and seeders

Server needs to be running (or local postgres)

```cmd
cd server
npm run db:migration:up
npm run db:seed
```

### Working with migrations and seeders

```cmd
cd server

npm run db:migrations:create <name>   // creates a new file in src/shared/database/migrations(look at current migrations for reference)
npm run db:seed:create <name>         // creates a new file in src/shared/database/seeders (look at current seeders for reference)

npm run db:migration:undo             // reverts the last migration run
npm run db:migration:down             // reverts all the migrations
npm run db:seed:undo                  // reverts the last seeder run
npm run db:seed:undo:all              // reverts all the seeders
```

### Debugging

Add the following config to `.vscode/launch.json`

```json
{
  "configurations": [
    {
      "name": "Attach to Node in Docker",
      "type": "node",
      "address": "localhost",
      "port": 9229,
      "request": "attach",
      "restart": true
    }
  ]
}
```

## Extensions, settings...

### Extensions

- Prettier ([link](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode))
- Editor config ([link](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig))
- Svelte for VSCode ([link](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode))

### Settings

- format on save (watch out not to save files you haven't changed as to not change the formatting)

### Important note

Running the project without docker will not be possible because the project doesn't use `dotenv` or other such packages. It can be added in the future.
