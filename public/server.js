document.addEventListener("DOMContentLoaded", function () {
	// let tempo = 140;
	// let noteDivision = 8;
	var context = new window.AudioContext;
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
					gainNode.gain.setValueAtTime(1, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		window[nameBufferNode].start()
	};

	function stopSound1(nameBufferNode) {
		window[nameBufferNode].stop(context.currentTime);
	}; 

	for(let i=1; i<17; i++) {
		document.getElementById(`pad${i}`).addEventListener('click', function () { playAndStop1(`bufferNode${i}`, soundObject[`pad${i}`].sound, `pad${i}`) }, true);
	}

	let setTempo = document.getElementById("set-tempo");

	function keyzDown(event) {

		event.preventDefault();

		if (event.keyCode != 8) {
			if ((event.keyCode === soundObject.pad1.key) && (repeatPad1 < 1) && switcher === "off") {
				playAndStop1('bufferNode1', soundObject.pad1.sound, 'pad1')
				repeatPad1++
			}
			if (event.keyCode === soundObject.pad2.key && (repeatPad2 < 1) && switcher === "off") {
				playAndStop1('bufferNode2', soundObject.pad2.sound, 'pad2')
				repeatPad2++
			}
			if (event.keyCode === soundObject.pad3.key && (repeatPad3 < 1) && switcher === "off") {
				playAndStop1('bufferNode3', soundObject.pad3.sound, 'pad3')
				repeatPad3++
			}
			if (event.keyCode === soundObject.pad4.key && (repeatPad4 < 1) && switcher === "off") {
				playAndStop1('bufferNode4', soundObject.pad4.sound, 'pad4')
				repeatPad4++
			}
			if (event.keyCode === soundObject.pad5.key && (repeatPad5 < 1) && switcher === "off") {
				playAndStop1('bufferNode5', soundObject.pad5.sound, 'pad5')
				repeatPad5++
			}
			if (event.keyCode === soundObject.pad6.key && (repeatPad6 < 1) && switcher === "off") {
				playAndStop1('bufferNode6', soundObject.pad6.sound, 'pad6')
				repeatPad6++
			}
			if (event.keyCode === soundObject.pad7.key && (repeatPad7 < 1) && switcher === "off") {
				playAndStop1('bufferNode7', soundObject.pad7.sound, 'pad7')
				repeatPad7++
			}
			if (event.keyCode === soundObject.pad8.key && (repeatPad8 < 1) && switcher === "off") {
				playAndStop1('bufferNode8', soundObject.pad8.sound, 'pad8')
				repeatPad8++
			}
			if (event.keyCode === soundObject.pad9.key && (repeatPad9 < 1) && switcher === "off") {
				playAndStop1('bufferNode9', soundObject.pad9.sound, 'pad9')
				repeatPad9++
			}
			if (event.keyCode === soundObject.pad10.key && (repeatPad10 < 1) && switcher === "off") {
				playAndStop1('bufferNode10', soundObject.pad10.sound, 'pad10')
				repeatPad10++
			}
			if (event.keyCode === soundObject.pad11.key && (repeatPad11 < 1) && switcher === "off") {
				playAndStop1('bufferNode11', soundObject.pad11.sound, 'pad11')
				repeatPad11++
			}
			if (event.keyCode === soundObject.pad12.key && (repeatPad12 < 1) && switcher === "off") {
				playAndStop1('bufferNode12', soundObject.pad12.sound, 'pad12')
				repeatPad12++
			}
			if (event.keyCode === soundObject.pad13.key && (repeatPad13 < 1) && switcher === "off") {
				playAndStop1('bufferNode13', soundObject.pad13.sound, 'pad13')
				repeatPad13++
			}
			if (event.keyCode === soundObject.pad14.key && (repeatPad14 < 1) && switcher === "off") {
				playAndStop1('bufferNode14', soundObject.pad14.sound, 'pad14')
				repeatPad14++
			}
			if (event.keyCode === soundObject.pad15.key && (repeatPad15 < 1) && switcher === "off") {
				playAndStop1('bufferNode15', soundObject.pad15.sound, 'pad15')
				repeatPad15++
			}
			if (event.keyCode === soundObject.pad16.key && (repeatPad16 < 1) && switcher === "off") {
				playAndStop1('bufferNode16', soundObject.pad16.sound, 'pad16')
				repeatPad16++
			}

		}
	}

	window.addEventListener("keydown", keyzDown);

	window.addEventListener("keyup", function (event) {
		event.preventDefault();
		if (event.keyCode === soundObject.pad1.key && (switcher === "off")) {
			repeatPad1EqualsZero();

			if (noteRepeatSwitcher === "on") {
				bufferNode1.stop(context.currentTime);
			}
		}

		if (event.keyCode === soundObject.pad2.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode2.stop(context.currentTime);
			}
			repeatPad2EqualsZero();
		}
		if (event.keyCode === soundObject.pad3.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode3.stop(context.currentTime);
			}
			repeatPad3EqualsZero();
		}

		if (event.keyCode === soundObject.pad4.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode4.stop(context.currentTime);
			}
			repeatPad4EqualsZero();
		}
		if (event.keyCode === soundObject.pad5.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode5.stop(context.currentTime);
			}
			repeatPad5EqualsZero();
		}

		if (event.keyCode === soundObject.pad6.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode6.stop(context.currentTime);
			}
			repeatPad6EqualsZero();
		}
		if (event.keyCode === soundObject.pad7.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode7.stop(context.currentTime);
			}
			repeatPad7EqualsZero();
		}

		if (event.keyCode === soundObject.pad8.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode8.stop(context.currentTime);
			}
			repeatPad8EqualsZero();
		}
		if (event.keyCode === soundObject.pad9.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode9.stop(context.currentTime);
			}
			repeatPad9EqualsZero();
		}

		if (event.keyCode === soundObject.pad10.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode10.stop(context.currentTime);
			}
			repeatPad10EqualsZero();
		}
		if (event.keyCode === soundObject.pad11.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode11.stop(context.currentTime);
			}
			repeatPad11EqualsZero();
		}

		if (event.keyCode === soundObject.pad12.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode12.stop(context.currentTime);
			}
			repeatPad12EqualsZero();
		}
		if (event.keyCode === soundObject.pad13.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode13.stop(context.currentTime);
			}
			repeatPad13EqualsZero();
		}

		if (event.keyCode === soundObject.pad14.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode14.stop(context.currentTime);
			}
			repeatPad14EqualsZero();
		}
		if (event.keyCode === soundObject.pad15.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode15.stop(context.currentTime);
			}
			repeatPad15EqualsZero();
		}

		if (event.keyCode === soundObject.pad16.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode16.stop(context.currentTime);
			}
			repeatPad16EqualsZero();
		}
	})

	setTempo.addEventListener("focus", function (event) {
		window.removeEventListener("keydown", keyzDown);
	});
	setTempo.addEventListener("blur", function (event) {
		window.addEventListener("keydown", keyzDown);
	});

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

});



