var http = require('http'); //imported http module
var fs = require('fs'); //imported filesystem module
var url =require('url');    //url module

http.createServer(function(req,res){    //creating the server
        var qry=url.parse(req.url,true);    
        var filename="."+qry.pathname; //filename endpoints 
        if(filename=='./'){            //root point
            fs.readFile('index.html',function(err,data){    //checking for each endpoint and returning file
                res.writeHead(200,{'Content-type':'text/html'});
                res.write(data);
                res.end();
            });
        }else if(filename=='./about'){
            fs.readFile('about.html',function(err,data){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            });
        }else if(filename=='./contact'){
            fs.readFile('contact-me.html',function(err,data){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            });
        }else {
            fs.readFile('404.html',function(err,data){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            });
        }

}).listen(3000,console.log("server running on port 3000 localhost"));  //server listening on port