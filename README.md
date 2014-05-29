PP
=========

This is an express based web app which demonstrates currency conversion. It runs on NodeJS. It also contains two custom written modules under node_modules namely:

    - ex: 
        - exchanger for currency conversion. This module is based on money.js. However its modified to pull live data from 'openexchangerates.org'
    - myutil: 
        - This modules provides utility for making asynchronous http call. Which is used to pull data from 'openexchangerates.org'


Following modules are used for developing and testing this app:
   - "express": "3.4.8",
   - "stylus": "*",
   - "ejs": "~0.8.5",
   - "async":"0.9.0",
   - "mocha": "*",
   - "chai": "*"


How to run this app
--------------

```sh
git clone https://github.com/blackmamba/pp.git
cd pp
npm install
node app.js
open http://localhost:3000
```

Hosting
--------------
This application is hosted on Heroku at: 
[http://floating-refuge-8806.herokuapp.com/](http://floating-refuge-8806.herokuapp.com/ "exchanger app")

Credits
--------------
- http://josscrowcroft.github.io/money.js/
- http://openexchangerates.org
