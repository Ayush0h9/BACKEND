const http=require("http");
const server=http.createServer((req,res)=>{
    const method=req.method;
    const url=req.url;
    console.log(method,url)
    if(method=="GET" && url=="/"){
        res.end("Welcome to the hell world")
    }
})

server.listen(3000,()=>{
    console.log(" listening")
})