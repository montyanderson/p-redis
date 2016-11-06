# p-redis

Wrap [node_redis](https://github.com/NodeRedis/node_redis) with [bluebird](https://github.com/petkaantonov/bluebird)'s promisifyAll().

## Usage

* Install **p-redis** along with **redis** and **bluebird**.

```
$ npm install --save p-redis redis bluebird
```

* Call from within Node!

``` javascript
const redis = require("p-redis");

db.setAsync("name", "Monty").then(() => {
	console.log("Done!");
});
```

## How does it work?

* **p-redis** just a *promisified* version of the redis object.

``` javascript
require("p-redis") == require("redis"); // true
```

* So, you could call `require("p-redis")` once, and then use `require("redis")` and still use the promisified functions.
