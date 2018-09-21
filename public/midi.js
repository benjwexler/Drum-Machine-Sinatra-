
var midi, data;
if (navigator.requestMIDIAccess) {
	navigator.requestMIDIAccess({
		sysex: false
	}).then(onMIDISuccess, onMIDIFailure);
} else {
	console.warn("No MIDI support in your browser");
}
function onMIDISuccess(midiData) {
	console.log(midiData);
	midi = midiData;
	var allInputs = midi.inputs.values();
	for (var input = allInputs.next(); input && !input.done; input = allInputs.next()) {
		input.value.onmidimessage = onMIDImessage;
	}
}
function onMIDIFailure() {
	console.warn("Not finding a MIDI controller");

}

var context = new window.AudioContext;

function onMIDImessage(messageData) {
	console.log(context);
	var gainNode = context.createGain();
	function beatRepeat(tempo, noteDivision) {
		tempo2 = document.getElementById("set-tempo").value;
		console.log(document.getElementById("set-tempo").value);
		noteDivision2 = document.getElementById("set-noteDivision").value;
		console.log(document.getElementById("set-noteDivision").value);
		let interval = 1 / ((tempo2 / 60) * noteDivision2 / 4)
		return interval
	}

	function playSound1(nameBufferNode, soundFile, interval) {
		window[nameBufferNode] = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundFile, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					window[nameBufferNode].buffer = buffer;
					window[nameBufferNode].connect(gainNode);

					if (noteRepeatSwitcher==="on") {
						window[nameBufferNode].loop = true;
						console.log(interval);
						console.log(buffer.duration);
						window[nameBufferNode].loopEnd = interval;
					}
					
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		window[nameBufferNode].start()
	};

	function stopSound1(nameBufferNode) {
		window[nameBufferNode].stop(context.currentTime + .5);
    };
    
    function playAndStop1(bufferNodeName, soundFile, pad) {
		let interval = beatRepeat(tempo, noteDivision);

		if (switcher === "off") {
			if (bufferNodeName === 'bufferNode1') {
				counter = counterObj.newPadCounter1
				counterObj.newPadCounter1 = counterObj.newPadCounter1 + 1
			}
			if (bufferNodeName === 'bufferNode2') {
				counter = counterObj.newPadCounter2
				counterObj.newPadCounter2 = counterObj.newPadCounter2 + 1
			}
			if (bufferNodeName === 'bufferNode3') {
				counter = counterObj.newPadCounter3
				counterObj.newPadCounter3 = counterObj.newPadCounter3 + 1
			}
			if (bufferNodeName === 'bufferNode4') {
				counter = counterObj.newPadCounter4
				counterObj.newPadCounter4 = counterObj.newPadCounter4 + 1
			}
			if (bufferNodeName === 'bufferNode5') {
				counter = counterObj.newPadCounter5
				counterObj.newPadCounter5 = counterObj.newPadCounter5 + 1
			}
			if (bufferNodeName === 'bufferNode6') {
				counter = counterObj.newPadCounter6
				counterObj.newPadCounter6 = counterObj.newPadCounter6 + 1
			}
			if (bufferNodeName === 'bufferNode7') {
				counter = counterObj.newPadCounter7
				counterObj.newPadCounter7 = counterObj.newPadCounter7 + 1
			}
			if (bufferNodeName === 'bufferNode8') {
				counter = counterObj.newPadCounter8
				counterObj.newPadCounter8 = counterObj.newPadCounter8 + 1
			}
			if (bufferNodeName === 'bufferNode9') {
				counter = counterObj.newPadCounter9
				counterObj.newPadCounter9 = counterObj.newPadCounter9 + 1
			}
			if (bufferNodeName === 'bufferNode10') {
				counter = counterObj.newPadCounter10
				counterObj.newPadCounter10 = counterObj.newPadCounter10 + 1

			}
			if (bufferNodeName === 'bufferNode11') {
				counter = counterObj.newPadCounter11
				counterObj.newPadCounter11 = counterObj.newPadCounter11 + 1
			}
			if (bufferNodeName === 'bufferNode12') {
				counter = counterObj.newPadCounter12
				counterObj.newPadCounter12 = counterObj.newPadCounter12 + 1

			}
			if (bufferNodeName === 'bufferNode13') {
				counter = counterObj.newPadCounter13
				counterObj.newPadCounter13 = counterObj.newPadCounter13 + 1
			}
			if (bufferNodeName === 'bufferNode14') {
				counter = counterObj.newPadCounter14
				counterObj.newPadCounter14 = counterObj.newPadCounter14 + 1
			}
			if (bufferNodeName === 'bufferNode15') {
				counter = counterObj.newPadCounter15
				counterObj.newPadCounter15 = counterObj.newPadCounter15 + 1

			}
			if (bufferNodeName === 'bufferNode16') {
				counter = counterObj.newPadCounter16
				counterObj.newPadCounter16 = counterObj.newPadCounter16 + 1
			}



			if (counter === 0 || noteRepeatSwitcher === "on") {
				playSound1(bufferNodeName, soundFile, interval);
				addBackground(pad);
				setTimeout(removeBackground, 3, pad);

			}
			else {
				stopSound1(bufferNodeName);
				playSound1(bufferNodeName, soundFile, interval);
				addBackground(pad);
				setTimeout(removeBackground, 3, pad);

			}
		}
	};

	var d = messageData.data; // Example: [144, 60, 100]
	var note = {
		on: d[0],
		pitch: d[1],
		velocity: d[2]
	}

	function play(note) {
		switch (note.on) {
			case 144:
				console.log(note)
				if (note.pitch == 0 || note.pitch == 24 || note.pitch == 48 || note.pitch == 72 || note.pitch == 96 || note.pitch == 120) {
					playAndStop1('bufferNode1', soundObject.pad1.sound, 'pad1')
				}
				if (note.pitch == 1 || note.pitch == 25 || note.pitch == 49 || note.pitch == 73 || note.pitch == 97) {
					playAndStop1('bufferNode2', soundObject.pad2.sound, 'pad2')
				}
				if (note.pitch == 2 || note.pitch == 26 || note.pitch == 50 || note.pitch == 74 || note.pitch == 98) {
					playAndStop1('bufferNode3', soundObject.pad3.sound, 'pad3')
				}
				if (note.pitch == 3 || note.pitch == 27 || note.pitch == 51 || note.pitch == 75 || note.pitch == 99) {
					playAndStop1('bufferNode4', soundObject.pad4.sound, 'pad4')
				}
				if (note.pitch == 4 || note.pitch == 28 || note.pitch == 52 || note.pitch == 76 || note.pitch == 100) {
					playAndStop1('bufferNode5', soundObject.pad5.sound, 'pad5')
				}
				if (note.pitch == 5 || note.pitch == 29 || note.pitch == 53 || note.pitch == 77 || note.pitch == 101) {
					playAndStop1('bufferNode6', soundObject.pad6.sound, 'pad6')
				}
				if (note.pitch == 6 || note.pitch == 30 || note.pitch == 54 || note.pitch == 78 || note.pitch == 102) {
					playAndStop1('bufferNode7', soundObject.pad7.sound, 'pad7')
				}
				if (note.pitch == 7 || note.pitch == 31 || note.pitch == 55 || note.pitch == 79 || note.pitch == 103) {
					playAndStop1('bufferNode8', soundObject.pad8.sound, 'pad8')
				}
				if (note.pitch == 8 || note.pitch == 32 || note.pitch == 56 || note.pitch == 80 || note.pitch == 104) {
					playAndStop1('bufferNode9', soundObject.pad9.sound, 'pad9')
				}
				if (note.pitch == 9 || note.pitch == 33 || note.pitch == 57 || note.pitch == 81 || note.pitch == 105) {
					playAndStop1('bufferNode10', soundObject.pad10.sound, 'pad10')
				}
				if (note.pitch == 10 || note.pitch == 34 || note.pitch == 58 || note.pitch == 82 || note.pitch == 106) {
					playAndStop1('bufferNode11', soundObject.pad11.sound, 'pad11')
				}
				if (note.pitch == 11 || note.pitch == 35 || note.pitch == 59 || note.pitch == 83 || note.pitch == 107) {
					playAndStop1('bufferNode12', soundObject.pad12.sound, 'pad12')
				}
				if (note.pitch == 12 || note.pitch == 36 || note.pitch == 60 || note.pitch == 84 || note.pitch == 108) {
					playAndStop1('bufferNode13', soundObject.pad13.sound, 'pad13')
				}
				if (note.pitch == 13 || note.pitch == 37 || note.pitch == 61 || note.pitch == 85 || note.pitch == 109) {
					playAndStop1('bufferNode14', soundObject.pad14.sound, 'pad14')
				}
				if (note.pitch == 14 || note.pitch == 38 || note.pitch == 62 || note.pitch == 86 || note.pitch == 110) {
					playAndStop1('bufferNode15', soundObject.pad15.sound, 'pad15')
				}
				if (note.pitch == 15 || note.pitch == 39 || note.pitch == 63 || note.pitch == 87 || note.pitch == 111) {
					playAndStop1('bufferNode16', soundObject.pad16.sound, 'pad16')
				}

				break;
			case 128:
                console.log("Off")
                if (note.pitch == 0 || note.pitch == 24 || note.pitch == 48 || note.pitch == 72 || note.pitch == 96 || note.pitch == 120) {
					stopSound1('bufferNode1')
                }
                if (note.pitch == 1 || note.pitch == 25 || note.pitch == 49 || note.pitch == 73 || note.pitch == 97) {
					stopSound1('bufferNode2')
				}
				if (note.pitch == 2 || note.pitch == 26 || note.pitch == 50 || note.pitch == 74 || note.pitch == 98) {
					stopSound1('bufferNode3')
				}
				if (note.pitch == 3 || note.pitch == 27 || note.pitch == 51 || note.pitch == 75 || note.pitch == 99) {
					stopSound1('bufferNode4')
				}
				if (note.pitch == 4 || note.pitch == 28 || note.pitch == 52 || note.pitch == 76 || note.pitch == 100) {
					stopSound1('bufferNode5')
				}
				if (note.pitch == 5 || note.pitch == 29 || note.pitch == 53 || note.pitch == 77 || note.pitch == 101) {
					stopSound1('bufferNode6')
				}
				if (note.pitch == 6 || note.pitch == 30 || note.pitch == 54 || note.pitch == 78 || note.pitch == 102) {
					stopSound1('bufferNode7')
				}
				if (note.pitch == 7 || note.pitch == 31 || note.pitch == 55 || note.pitch == 79 || note.pitch == 103) {
					stopSound1('bufferNode8')
				}
				if (note.pitch == 8 || note.pitch == 32 || note.pitch == 56 || note.pitch == 80 || note.pitch == 104) {
					stopSound1('bufferNode9')
				}
				if (note.pitch == 9 || note.pitch == 33 || note.pitch == 57 || note.pitch == 81 || note.pitch == 105) {
					stopSound1('bufferNode10')
				}
				if (note.pitch == 10 || note.pitch == 34 || note.pitch == 58 || note.pitch == 82 || note.pitch == 106) {
					stopSound1('bufferNode11')
				}
				if (note.pitch == 11 || note.pitch == 35 || note.pitch == 59 || note.pitch == 83 || note.pitch == 107) {
					stopSound1('bufferNode12')
				}
				if (note.pitch == 12 || note.pitch == 36 || note.pitch == 60 || note.pitch == 84 || note.pitch == 108) {
					stopSound1('bufferNode13')
				}
				if (note.pitch == 13 || note.pitch == 37 || note.pitch == 61 || note.pitch == 85 || note.pitch == 109) {
					stopSound1('bufferNode14')
				}
				if (note.pitch == 14 || note.pitch == 38 || note.pitch == 62 || note.pitch == 86 || note.pitch == 110) {
					stopSound1('bufferNode15')
				}
				if (note.pitch == 15 || note.pitch == 39 || note.pitch == 63 || note.pitch == 87 || note.pitch == 111) {
					stopSound1('bufferNode16')
				}
				break;
		}
	}

	play(note);
};
