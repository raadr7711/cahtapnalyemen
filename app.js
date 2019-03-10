var express = require('express')
var  app = express()
var server = require('http').createServer(app);
 var port = process.env.PORT || 5000;



 console.log(`Listening on ${ port }`)






 
//set the template engine ejs
app.set('view engine', 'ejs')

//middlewares
app.use(express.static('public'))


//routes
app.get('/', (req, res) => {
	res.render('index')
})
npm
//Listen on port 3000
server = app.listen(port)




//socket.io instantiation


var io = require("socket.io")(server)

//listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected')

	//default username
	

    //listen on change_username
    //socket.on('change_username', (ddata) => { })

    //listen on new_message
    socket.on('msg', (ddata) => {
        //broadcast the new message
        io.sockets.emit('msg', {cmd : ddata.cmd, data: ddata.data});
    })

    //listen on typing
    socket.on('re', (ddata) => {
    	io.sockets.emit('re', {token : ddata.token})
    })
	
	
	socket.on('msg', (ddata) => {
    	io.sockets.emit('msg', {e: ddata.e})
    })
	
})
