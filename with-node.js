const http = require('http'); //importing http package to use it in future like http.createserver

const port = 8081; //4 digit no , local port no(only availabe on your laptop) , used for displaying our server on the browser, we can use any 4 digit no provided it is available 

const toDoList = ["Complete Node Byte", "Play Cricket"];


//to create the server
//request se pta chlega user ne kya kya mnga h server se
// http.createServer((request, response) => { //a callback function to handle requests and respond , these arguments, inhe bdl bhi skte h like req and res 
//     response.writeHead(200, { 'Content-Type': 'text/html' }); //200 code means ok h text bhejo
//     response.write("<h1>Hello, this is from  server</h1>"); //ye text
//     response.end();
//     //listen is used for users to access the server, log use kis port pr acces krenge etc, listening for requests ,
// }).listen(port, () => { //a callback function when the port is successfully created , we call this function and console log in the terminal 
//     console.log(`Nodejs server started on port ${port}`); // `` use kre to show port 
// });

//http://localhost:8081

//npm is node package manager
//nodemon will automatically restart the server when you make any changes to the file and save it

//in package json , dev is when we are still developing it but start is for deploying cuz others wont be making changes on it

http
    .createServer((req, res) => {
        const { method, url } = req;

        if (url === "/todos") {
            if (method === "GET") {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(toDoList.toString());
            } else if (method === "POST") { //post request me sb json format me jata h data
                let body = "";
                req.on('error', (err) => {
                    console.error(err);
                }).on('data', (chunk) => {
                    body += chunk; //chunk is a variable representing the chunks that the body is composed of 
                }).on('end', () => {
                    body = JSON.parse(body);
                    let newToDo = toDoList;
                    newToDo.push(body.item);
                    console.log(newToDo);
                    res.writeHead(201);
                });
            } else if (method === "DELETE") {
                let body = '';
                req.on('error', () => {
                    console.error(err);
                })
                    .on('data', (chunk) => {
                        body += chunk;
                    }).on('end', () => {
                        body = JSON.parse(body); //storing the json format of the body in the same variable body 
                        let deleteThis = body.item;

                        // for (let i = 0; i < toDoList.length; i++) {
                        //     if (toDoList[i] === deleteThis) {
                        //         toDoList.splice(i, 1);
                        //         break;
                        //     }
                        // }
                        //another way to do the same thing 
                        toDoList.find((element, index) => {
                            if (element === deleteThis) {
                                toDoList.splice(index, 1);
                            }
                        });
                        res.writeHead(204);
                    });
            }
            else {
                res.writeHead(404); //else an error
            }
        }
        else {
            res.writeHead(404);
        }
        res.end();
    })
    .listen(port, () => {
        console.log(`Nodejs server started on port ${port}`);
    });

//get means getting data from server, post means sending data to server., delete, patch means updation , put means overwriting , these are all http methods

//ye file humne bnayi thi express dalne se pehle and ab server.js hi main file h with express