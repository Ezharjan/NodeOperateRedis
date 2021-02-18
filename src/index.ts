import redis from 'redis';

let client = redis.createClient(6379, '127.0.0.1');
//client.auth("123456");  // 如果没有设置密码 是不需要这一步的
client.on('connect', () => {
    // set 语法
    client.set('name', 'test', (err, data) => {
        console.log("set: %s", data);
    });
    // get 语法
    client.get('name', (err, data) => {
        console.log("get: %s", data);
    });

    client.del('name', (err, data) => {
        console.log("deleted: %s", data);
    });

    client.lpush('class', "1", (err, data) => {
        console.log("lpush: %s", data);
    });

    client.lrange('class', 0, -1, function (err, data) {
        console.log("lrange: %s", data);
    });
});
