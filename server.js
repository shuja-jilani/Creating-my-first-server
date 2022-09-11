const http = require('http'); //importing http package to use it in future like http.createserver

const port = 8081; //4 digit no , local port no(only availabe on your laptop) , used for displaying our server on the browser, we can use any 4 digit no provided it is available 
//to create the server
//request se pta chlega user ne kya kya mnga h server se
http.createServer((request, response) => { //a callback function to handle requests and respond , these arguments, inhe bdl bhi skte h like req and res 
    response.writeHead(200, { 'Content-Type': 'text/html' }); //200 code means ok h text bhejo
    response.write("<h1>Hello, this is from  server</h1>"); //ye text
    response.end();
    //listen is used for users to access the server, log use kis port pr acces krenge etc, listening for requests ,
}).listen(port, () => { //a callback function when the port is successfully created , we call this function and console log in the terminal 
    console.log(`Nodejs server started on port ${port}`); // `` use kre to show port 
});

//http://localhost:8081

//npm is node package manager
//nodemon will automatically restart the server when you make any changes to the file and save it

//in package json , dev is when we are still developing it but start is for deploying cuz others wont be making changes on it

