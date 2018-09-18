// // var express = require('express');
// // var app = express();
// // const port = process.env.PORT || 8080;
// // var server = app.listen(port);
// // app.use(express.static('public'));


// document.addEventListener("DOMContentLoaded", function() {
 
// 	// Establish endpoint in the browser by declaring an AudioContext
// 	var context = new window.AudioContext;
// 	console.log(context);


// 	//  Access the context to create an oscillator node,an object which gives you a sine wave as signal
// 	var oscillatorNode = context.createOscillator();
// 	console.log(oscillatorNode);
// 	oscillatorNode.start()

// 	// Oscillator can be manipulated
// 	oscillatorNode.type = 'sawtooth'
// 	// oscillatorNode.frequency.value = 700




// 	// Support a simple interface with click-and-hold event listener for responsive output
// 	document.getElementById('oscillator-button').addEventListener('mousedown', function(e){
// 		e.preventDefault()
// 		// Connect the oscillator node to the output by accessing the context's destination property
// 		oscillatorNode.connect(context.destination);
// 	});

// 	document.getElementById('oscillator-button').addEventListener('mouseup', function(e){
// 		e.preventDefault()
// 		oscillatorNode.disconnect(context.destination)
// 	});

// 	for (i=0; i< document.getElementsByClassName('buffer-button').length; i++){
// 		document.getElementsByClassName('buffer-button')[i].addEventListener('click', function(){thunder()}, true)
// 	};	
	

// 	function thunder(){
// 		// Buffer nodes are generated from the context allowing you to store audio files
// 		var bufferNode = context.createBufferSource();

// 		// Get the file
// 		var request = new XMLHttpRequest();
// 		request.open('GET', '/audio/explosion.ogg', true);
// 		request.responseType = 'arraybuffer';

// 		// Decode the audio data from the media file and pass to the buffer node
// 		request.onload = function(){
// 			context.decodeAudioData(
// 				request.response, 
// 				function(buffer){
// 					bufferNode.buffer = buffer;

// 					// Conenct the buffer to the output
// 					bufferNode.connect(context.destination);
// 				},
// 				function(e){ console.log("Error with decoding audio data" + e.err); } 
// 			);
// 		};

// 		request.send()
// 		bufferNode.start()
// 	};
// });

