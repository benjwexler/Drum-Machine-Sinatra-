
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
console.log(context);
function onMIDImessage(messageData) {
	var gainNode = context.createGain();

	function playSound1() {
		bufferNode1 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad1.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode1.buffer = buffer;
					bufferNode1.connect(gainNode);
					gainNode.connect(context.destination);
					// gainNode1.gain.setValueAtTime(1, context.currentTime);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode1.start()
	};

	function playSound2() {
		bufferNode2 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad2.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode2.buffer = buffer;
					bufferNode2.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode2.start()
	};
	function playSound3() {
		bufferNode3 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad3.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode3.buffer = buffer;
					bufferNode3.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode3.start()
	};
	function playSound4() {
		bufferNode4 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad4.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode4.buffer = buffer;
					bufferNode4.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode4.start()
	};
	function playSound5() {
		bufferNode5 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad5.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode5.buffer = buffer;
					bufferNode5.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode5.start()
	};
	function playSound6() {
		bufferNode6 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad6.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode6.buffer = buffer;
					bufferNode6.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode6.start()
	};
	function playSound7() {
		bufferNode7 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad7.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode7.buffer = buffer;
					bufferNode7.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode7.start()
	};
	function playSound8() {
		bufferNode8 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad8.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode8.buffer = buffer;
					bufferNode8.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode8.start()
	};
	function playSound9() {
		bufferNode9 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad9.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode9.buffer = buffer;
					bufferNode9.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode9.start()
	};
	function playSound10() {
		bufferNode10 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad10.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode10.buffer = buffer;
					bufferNode10.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode10.start()
	};
	function playSound11() {
		bufferNode11 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad11.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode11.buffer = buffer;
					bufferNode11.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode11.start()
	};
	function playSound12() {
		bufferNode12 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad12.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode12.buffer = buffer;
					bufferNode12.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode12.start()
	};
	function playSound13() {
		bufferNode13 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad13.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode13.buffer = buffer;
					bufferNode13.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode13.start()
	};
	function playSound14() {
		bufferNode14 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad14.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode14.buffer = buffer;
					bufferNode14.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode14.start()
	};
	function playSound15() {
		bufferNode15 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad15.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode15.buffer = buffer;
					bufferNode15.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode15.start()
	};
	function playSound16() {
		bufferNode16 = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundObject.pad16.sound, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					bufferNode16.buffer = buffer;
					bufferNode16.connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		bufferNode16.start()
	};

	function stopSound1() {
		bufferNode1.stop(context.currentTime);
	};
	function stopSound2() {
		bufferNode2.stop(context.currentTime);
	};
	function stopSound3() {
		bufferNode3.stop(context.currentTime);
	};
	function stopSound4() {
		bufferNode4.stop(context.currentTime);
	};
	function stopSound5() {
		bufferNode5.stop(context.currentTime);
	};
	function stopSound6() {
		bufferNode6.stop(context.currentTime);
	};
	function stopSound7() {
		bufferNode7.stop(context.currentTime);
	};
	function stopSound8() {
		bufferNode8.stop(context.currentTime);
	};
	function stopSound9() {
		bufferNode9.stop(context.currentTime);
	};
	function stopSound10() {
		bufferNode10.stop(context.currentTime);
	};
	function stopSound11() {
		bufferNode11.stop(context.currentTime);
	};
	function stopSound12() {
		bufferNode12.stop(context.currentTime);
	};
	function stopSound13() {
		bufferNode13.stop(context.currentTime);
	};
	function stopSound14() {
		bufferNode14.stop(context.currentTime);
	};
	function stopSound15() {
		bufferNode15.stop(context.currentTime);
	};
	function stopSound16() {
		bufferNode16.stop(context.currentTime);
	};

	function playAndStop1() {

		if (q === 0) {
			playSound1();

			addBackground(pad1);
			setTimeout(removeBackground, 3, pad1);
			q++
		} else {
			stopSound1();
			playSound1();
			addBackground(pad1);
			setTimeout(removeBackground, 3, pad1);
		}
	};
	function playAndStop2() {
		if (w === 0) {
			playSound2();
			addBackground(pad2);
			setTimeout(removeBackground, 3, pad2);
			w++

		} else {
			stopSound2();
			playSound2();
			addBackground(pad2);
			setTimeout(removeBackground, 3, pad2);
		}
	};
	function playAndStop3() {
		if (e === 0) {
			playSound3();
			addBackground(pad3);
			setTimeout(removeBackground, 3, pad3);
			e++
		} else {
			stopSound3();
			playSound3();
			addBackground(pad3);
			setTimeout(removeBackground, 3, pad3);
		}
	};
	function playAndStop4() {
		if (r === 0) {
			playSound4();
			addBackground(pad4);
			setTimeout(removeBackground, 3, pad4);
			r++
		} else {
			stopSound4();
			playSound4();
			addBackground(pad4);
			setTimeout(removeBackground, 3, pad4);
		}
	};
	function playAndStop5() {
		if (t === 0) {
			playSound5();
			addBackground(pad5);
			setTimeout(removeBackground, 3, pad5);
			t++
		} else {
			stopSound5();
			playSound5();
			addBackground(pad5);
			setTimeout(removeBackground, 3, pad5);
		}
	};
	function playAndStop6() {
		if (y === 0) {
			playSound6();
			addBackground(pad6);
			setTimeout(removeBackground, 3, pad6);
			y++
		} else {
			stopSound6();
			playSound6();
			addBackground(pad6);
			setTimeout(removeBackground, 3, pad6);
		}
	};
	function playAndStop7() {
		if (u === 0) {
			playSound7();
			addBackground(pad7);
			setTimeout(removeBackground, 3, pad7);
			u++
		} else {
			stopSound7();
			playSound7();
			addBackground(pad7);
			setTimeout(removeBackground, 3, pad7);
		}
	};
	function playAndStop8() {
		if (j === 0) {
			playSound8();
			addBackground(pad8);
			setTimeout(removeBackground, 3, pad8);
			j++
		} else {
			stopSound8();
			playSound8();
			addBackground(pad8);
			setTimeout(removeBackground, 3, pad8);
		}
	};
	function playAndStop9() {
		if (o === 0) {
			playSound9();
			addBackground(pad9);
			setTimeout(removeBackground, 3, pad9);
			o++
		} else {
			stopSound9();
			playSound9();
			addBackground(pad9);
			setTimeout(removeBackground, 3, pad9);
		}
	};
	function playAndStop10() {
		if (p === 0) {
			playSound10();
			addBackground(pad10);
			setTimeout(removeBackground, 3, pad10);
			p++
		} else {
			stopSound10();
			playSound10();
			addBackground(pad10);
			setTimeout(removeBackground, 3, pad10);
		}
	};
	function playAndStop11() {
		if (a === 0) {
			playSound11();
			addBackground(pad11);
			setTimeout(removeBackground, 3, pad11);
			a++
		} else {
			stopSound11();
			playSound11();
			addBackground(pad11);
			setTimeout(removeBackground, 3, pad11);
		}
	};
	function playAndStop12() {
		if (s === 0) {
			playSound12();
			addBackground(pad12);
			setTimeout(removeBackground, 3, pad12);
			s++
		} else {
			stopSound12();
			playSound12();
			addBackground(pad12);
			setTimeout(removeBackground, 3, pad12);
		}
	};
	function playAndStop13() {
		if (m === 0) {
			playSound13();
			addBackground(pad13);
			setTimeout(removeBackground, 3, pad13);
			m++
		} else {
			stopSound13();
			playSound13();
			addBackground(pad13);
			setTimeout(removeBackground, 3, pad13);
		}
	};
	function playAndStop14() {
		if (f === 0) {
			playSound14();
			addBackground(pad14);
			setTimeout(removeBackground, 3, pad14);
			f++
		} else {
			stopSound14();
			playSound14();
			addBackground(pad14);
			setTimeout(removeBackground, 3, pad14);
		}
	};
	function playAndStop15() {
		if (g === 0) {
			playSound15();
			addBackground(pad15);
			setTimeout(removeBackground, 3, pad15);
			g++
		} else {
			stopSound15();
			playSound15();
			addBackground(pad15);
			setTimeout(removeBackground, 3, pad15);
		}
	};
	function playAndStop16() {
		if (h === 0) {
			playSound16();
			addBackground(pad16);
			setTimeout(removeBackground, 3, pad16);
			h++
		} else {
			stopSound16();
			playSound16();
			addBackground(pad16);
			setTimeout(removeBackground, 3, pad16);
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
					
					playAndStop1()
				}
				if (note.pitch == 1 || note.pitch == 25 || note.pitch == 49 || note.pitch == 73 || note.pitch == 97) {
					playAndStop2()
				}
				if (note.pitch == 2 || note.pitch == 26 || note.pitch == 50 || note.pitch == 74 || note.pitch == 98) {
					playAndStop3()
				}
				if (note.pitch == 3 || note.pitch == 27 || note.pitch == 51 || note.pitch == 75 || note.pitch == 99) {
					playAndStop4()
				}
				if (note.pitch == 4 || note.pitch == 28 || note.pitch == 52 || note.pitch == 76 || note.pitch == 100) {
					playAndStop5()
				}
				if (note.pitch == 5 || note.pitch == 29 || note.pitch == 53 || note.pitch == 77 || note.pitch == 101) {
					playAndStop6()
				}
				if (note.pitch == 6 || note.pitch == 30 || note.pitch == 54 || note.pitch == 78 || note.pitch == 102) {
					playAndStop7()
				}
				if (note.pitch == 7 || note.pitch == 31 || note.pitch == 55 || note.pitch == 79 || note.pitch == 103) {
					playAndStop8()
				}
				if (note.pitch == 8 || note.pitch == 32 || note.pitch == 56 || note.pitch == 80 || note.pitch == 104) {
					playAndStop9()
				}
				if (note.pitch == 9 || note.pitch == 33 || note.pitch == 57 || note.pitch == 81 || note.pitch == 105) {
					playAndStop10()
				}
				if (note.pitch == 10 || note.pitch == 34 || note.pitch == 58 || note.pitch == 82 || note.pitch == 106) {
					playAndStop11()
				}
				if (note.pitch == 11 || note.pitch == 35 || note.pitch == 59 || note.pitch == 83 || note.pitch == 107) {
					playAndStop12()
				}
				if (note.pitch == 12 || note.pitch == 36 || note.pitch == 60 || note.pitch == 84 || note.pitch == 108) {
					playAndStop13()
				}
				if (note.pitch == 13 || note.pitch == 37 || note.pitch == 61 || note.pitch == 85 || note.pitch == 109) {
					playAndStop14()
				}
				if (note.pitch == 14 || note.pitch == 38 || note.pitch == 62 || note.pitch == 86 || note.pitch == 110) {
					playAndStop15()
				}
				if (note.pitch == 15 || note.pitch == 39 || note.pitch == 63 || note.pitch == 87 || note.pitch == 111) {
					playAndStop16()
				}

				break;
			case 128:
				console.log("Off")
				break;
		}
	}

	play(note);
};
