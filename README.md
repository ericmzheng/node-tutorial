# node-tutorial

### Install nvm (https://github.com/creationix/nvm)

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
    nvm install 10.12.0
    nvm use 10.12.0

### Install express

    npm install express-generator -g

### Create app

    express --view=hbs node-tutorial
    cd node-tutorial

### Build

    npm install

### Install axios

    npm install axios --save

### Add routes

* Add files to routes/
* Add references to app.js

### Add templates

* Add files to views/
* Add res.render to routes/

    res.render(templateFilename, jsonData);

### Run

    npm start

