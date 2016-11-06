let bluebird, redis;

try {
	bluebird = require("bluebird");
	redis = require("redis");
} catch(error) {
	throw new Error("p-redis: Please install bluebird and redis.");
}

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

module.exports = redis;
