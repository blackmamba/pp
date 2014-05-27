PP
=========

This is an express based web app. It runs on NodeJS. It also contains two modules namely:

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


Installation
--------------

```sh
How to run this app:
git clone https://github.com/blackmamba/pp.git
cd pp
npm install
node app.js
open http://localhost:3000
```

Credits
--------------
http://josscrowcroft.github.io/money.js/
