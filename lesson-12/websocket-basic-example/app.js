const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient)=> {
    clients.push(newClient);
    setTimeout(() => {
        newClient.send(`Welcome to websocket server! You are ${clients.length} member`)
    }, 5000);
    clients.forEach(client => {
        if(client !== newClient){
            client.send("New member");
        }
    })
    // console.log("New frontend connect")
})
