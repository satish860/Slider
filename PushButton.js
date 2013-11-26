var johnnyfive = require('johnny-five');
var board = new johnnyfive.Board();

board.on('ready', function () {
    var button = johnnyfive.Button(7);
    var led = johnnyfive.Led(13);
    button.on('hold', function () {
        console.log('button kept in hold');
    });

    button.on('up', function () {
        led.off();
    });
});