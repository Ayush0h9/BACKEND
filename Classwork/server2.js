
const http=require("http");
const server=http.createServer((req,res)=>{
   const method=req.method;
    const url=req.url;
    console.log(method,url)
    if(method=="GET" && url=="/"){
        res.end("Welcome world")
    }
    if(method=="GET" && url=="/user"){
        const user={
            name:"Ayush",
            age:20,
        }
        res.end()
    }
})

server.listen(3000,()=>{
    console.log(" basic server ")
})



