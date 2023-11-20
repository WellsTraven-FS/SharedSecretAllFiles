require("dotenv").config("./.env");

console.log(process.env.HOST);
console.log(process.env.TEST_ENV);
console.log(process.env.USER_ENV);
console.log(process.env.PASS_ENV);

const http = require("http");
const hostname = "127.0.0.1";

const fs = require("fs");
let directory_name = "./";
let filenames = fs.readdirSync(directory_name);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Context-Type", "text/plain");

    f = "";
    filenames.forEach((file) => {
        f = f + file + "\n";
    });
    res.end(f);
});

server.listen(
    process.env.PORT,
    console.log(`Listening on PORT: ${process.env.PORT}`),
    hostname,
    () => {}
);
