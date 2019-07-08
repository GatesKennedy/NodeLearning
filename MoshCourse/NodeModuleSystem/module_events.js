
//  An event is a signal that indicates that something has happend

// Class: Event Emitter
    //  Classes are named with PascalCasing (XxxxXxxx)
    //  Class = container for related methods and properties

//  Import Class Module
const EventEmitter = require('events');
//  Instantiate EventEmitter class
const emitter = new EventEmitter();

//  Register a listener
    //  on('eventName', callbackFxn(){...})
emitter.on('messageLogged', function(){
    console.log('Listener Called');
});

//  Raise an event
    // emit('eventName')
emitter.emit('messageLogged');

//  NOTE: an event listener must be registered before an event is raised.
//      When an event is raised, the emit method iterates over all the registered listeners synchronously

//=====================================
//      Event Arguments
//=====================================

// Best Practice:
//  Encapsulate event information (values) inside an object.

emitter.on('messageArgsLogged', function(arg){
    console.log('Listener Called: ', arg);
});
emitter.emit('messageArgsLogged', {id: 1, url: 'http://'});

//======================
//      Arrow Functions

emitter.on('messageArgsLogged', (arg) => {
    console.log('Listener Called: ', arg);
});
emitter.emit('messageArgsLogged', {
    id: 1,
    url: 'http://'
});
