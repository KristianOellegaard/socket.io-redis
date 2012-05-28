var io = require('socket.io').listen(8001);
var sub = require('redis').createClient();

sub.psubscribe("socketio_*") // Could be any pattern

io.sockets.on('connection', function (socket) {
    sub.on("pmessage", function(pattern, channel, key){
        socket.emit(channel, key);
    })
});
