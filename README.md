# Simple rectangle application

## ReactJS, Redux, KoaJS, MongoDB, Webpack, Sass, BEM.


## How to run ?

### Remember to run commands from root of source code directory!

  # On macos & linux from shell

      npm i
      npm start
***

  # On Windows from shell

      npm install

  # Open two command line

      In first cmd type npm run start:server
      In second cmd type npm run start:client

### Open browser at localhost:3000

## How to see test ?

    From shell type npm test

# Note

  It is important that server must work.

  Server is listening by default on 1337. You can change it in

    server/config/development.json
    server/config/test.json
    server/config/production.json

  depending on env that you are running.

  change in this file must be reflected on src/config/config.json
