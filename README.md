Basic concept
=============

You think socket.io is very cool, but do not want to write your server-side webapplication in .. javascript. Using this very simple snippet, you can push your data into redis from any programming language and socket.io will then push it to the client.

Installation
============

You will need node.js to run the socket.io server, you can grab it at http://nodejs.org/#download - this should install the node package manager as well "npm".

```bash
npm install redis@0.7.2
npm install socket.io@0.9.6
```


Usage
=====

```bash
node app.js
```

(remember to have a running redis server, or it will crash)

Contribute
==========

Bugfixes can be sent as pullrequests or be posted as an issue.

If you know how to send a message to redis pubsub in *any language* feel free to make me a pull request with it included.


Le snipppets
============

Python
------

```bash
pip install redis hiredis
```

```python
import redis

pool = redis.ConnectionPool(host=url.hostname, port=url.port, db=0, password=url.password)
redis_subscribe = redis.StrictRedis(connection_pool=pool)
redis_subscribe.publish("your channel/pattern here", "this message is sent to socket.io")
``` 