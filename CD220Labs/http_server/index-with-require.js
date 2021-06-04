const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  var dateval= today.getDate();
  var greet= "It is still dark"
  if(dateval.getHours()>6 && dateval.getHours()<12)
  {
      greet = "Good Morning Digvijay!"
  }else if(dateval.getHours()==12){
      greet = "Good Noon Digvijay!"
  }else if(dateval.getHours()>12 && dateval.getHours()<18){
      greet = "Good Afternoon Digvijay!"
  }else if(dateval.getHours()>=18 && dateval.getHours()<21){
      greet = "Good Evening Digvijay!"
  }else if(dateval.getHours()>=21 && dateval.getHours()<24)
  {
      greet = "Good NigHt Digvijay!"
  }
  res.end(`Hello, ${greet}`)
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);