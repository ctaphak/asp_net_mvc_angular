import * as http from "http";

let httpProxy: any = require("http-proxy");


let proxy: any = httpProxy.createProxyServer();

http.createServer((req, res) => {
    proxy.web(req, res, {
        target: "http://localhost:6002"
    });
}).listen(6001);

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(`request successfully proxied to: ${req.url}\n${JSON.stringify(req.headers)}`);
    res.end();
}).listen(6002);
