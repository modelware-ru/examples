import http, {IncomingMessage, ServerResponse} from "http";

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    console.log(req.url);
    res.writeHead(200);
    res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);