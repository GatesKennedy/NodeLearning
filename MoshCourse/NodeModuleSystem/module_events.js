
//  An event is a signal that indicates that something has happend

// Class: Event Emitter
    //  Classes are named with PascalCasing (XxxxXxxx)
    //  Class = container for related methods and properties

//  Import Class Module
const EventEmitter = require('events');
//  Instantiate EventEmitter class
const emitter = new EventEmitter();

//  Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener Called');
});

//  Raise an event
    // emit('eventName') Arg: <Name of event>
emitter.emit('messageLogged');