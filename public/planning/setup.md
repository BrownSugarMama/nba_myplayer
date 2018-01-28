SETUP + CREATION OF APP  (STEPS + PROCESS)

1. Created directory and file setup. Files will be as follows:
    - controllers
        - myplayers.js (candidates.js)
    - db 
        - connection.js
        - myplayer.js (schema.js) 
        - seed.js
        - seeds.json
    - views 
        - welcome.hbs (app-welcome)
        - myplayer-list.hbs (candidate-index)
        - myplayer-catalog.hbs (candidate-show)
        - layout-main.hbs
    - public
        - css
            - style.css
        - js
            - app.js
    - planning
     - ERD
     - setup.md 
    - index.js
    - readme.md
    - Procfile

2.  Add a git local repo
    $ git init
    - connect to remote repo 
        ($ git remote add origin -- 'link to remote repo')
        ($ git push origin 'master' -- 'whatever branch you'd like')

3. Install Node
    $ npm install

4. Install Express
    $ npm i express

5. Install Mongoose
    $ npm i mongoose

6. Install Express Handlebars
    $ npm i express-handlebars

7. Install body parser
    $ npm i body-parser

8. Install method override (CRUD functionality setup)
    $ npm i method-override

9. Start mongod server
    $ mongod 

10. Run nodemon in order to run the local host link
    $ nodemon

11. Setup MongoDB Connection
    $ npm install OR (npm i) --save mongoose
    - require 'mongoose' in connection.js file
    - connect mongoose to the db

12. Seed the db
    - connect schema + seed.json in seeds.js
    $ node db/seed.js
