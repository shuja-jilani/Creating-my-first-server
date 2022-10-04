const express = require('express');
//initialisation
const app = express();

//application willl now use json format for data 
app.use(express.json()); //use , for using express , express function app me dal dia h 


const port = 8081; //4 digit no , local port no(only availabe on your laptop) , used for displaying our server on the browser, we can use any 4 digit no provided it is available 

const toDoList = ["Complete Node Byte", "Play Cricket"];

//http://localhost:8081/todos
app.get("/todos", (req, res) => { //jab bhi todos me koi get request bheje to ye hoga 
    //callback
    res.status(200).send(toDoList); //humne todolist bhejdi h 200 ke status se that is OK , aur todolist pehle hi json format me h humara array h wo, wese hi dikhega 

});

//now the post request 
app.post("/todos", (req, res) => {
    //isme wo chunk wala part nhi likhna pdta , that is done automatically by express , on its own app.use(express()) , wali line se, usse hi sb json me convert ho rha
    let newToDoItem = req.body.item; //jo bhi naya item dalna h hume 
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Task added successfully", //qki ye ek object h isliye ye easily json me convert ho jata h
    });
});

app.delete("/todos", (req, res) => {
    //callback
    const itemToDelete = req.body.item; //item to be deleted utha lia body se 
    toDoList.find((element, index) => { //when we use , find , we loop over it , and that particular index is found automatically and stored in the index variable 
        if (element === itemToDelete) {
            toDoList.splice(index, 1);
        }
    });
    res.status(202).send({
        message: `Deleted item - ${req.body.item}`,
    });
});

//if there is some other method request, besides get post and delete in the todos route , then it will show this one for all of them 
//invalid requests like, put, patch etc
app.all("/todos", (req, res) => {
    res.status(501).send();
});

app.all('*', (req, res) => { //* means all other routes except the ones that we have made, 
    res.status(404).send();
})

//for other routes, inside the todos route, we can do 
// app.get("/todos/create",)  //etc, but it is not logical because baki sare routes ke liye upr hi likh diya humne , isliye inko upr likho * aur all wali lines se

app.listen(port, () => {
    //callback
    console.log(`Nodejs server started on port ${port}`);
});
