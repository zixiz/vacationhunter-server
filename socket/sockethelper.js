var mySocketHelper = {
    io: null,
    startSockets: (ioFromApp) => {

        this.io = ioFromApp;

        ioFromApp.on('connection', function (socket) {

            console.log('connected');

        });

    },
    sendMessgae: (msg) => {
         this.io.emit('vacationsChange', msg);
    }
}

module.exports = mySocketHelper;