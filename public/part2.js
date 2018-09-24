let mappedPad = "";
let mappedKey = "";
let keyAssign = document.getElementById("keyAssign");
let beatRepeatBtn = document.getElementById("beatRepeat");
let switcher = "off";
let noteRepeatSwitcher = "off";
let hiddenButton = document.getElementsByClassName("hiddenButton");
var pads = document.getElementsByClassName("pads");

let tempoForm = document.getElementById("set-tempo");

tempoForm.onkeypress = function(e) {
	var key = e.charCode || e.keyCode || 0;     
	if (key == 13) {
	  e.preventDefault();
	}
  }

function displayKeyMappings() {
	hiddenButton[0].innerText = String.fromCharCode(soundObject.pad1.key)
	hiddenButton[1].innerText = String.fromCharCode(soundObject.pad2.key)
	hiddenButton[2].innerText = String.fromCharCode(soundObject.pad3.key)
	hiddenButton[3].innerText = String.fromCharCode(soundObject.pad4.key)
	hiddenButton[4].innerText = String.fromCharCode(soundObject.pad5.key)
	hiddenButton[5].innerText = String.fromCharCode(soundObject.pad6.key)
	hiddenButton[6].innerText = String.fromCharCode(soundObject.pad7.key)
	hiddenButton[7].innerText = String.fromCharCode(soundObject.pad8.key)
	hiddenButton[8].innerText = String.fromCharCode(soundObject.pad9.key)
	hiddenButton[9].innerText = String.fromCharCode(soundObject.pad10.key)
	hiddenButton[10].innerText = String.fromCharCode(soundObject.pad11.key)
	hiddenButton[11].innerText = String.fromCharCode(soundObject.pad12.key)
	hiddenButton[12].innerText = String.fromCharCode(soundObject.pad13.key)
	hiddenButton[13].innerText = String.fromCharCode(soundObject.pad14.key)
	hiddenButton[14].innerText = String.fromCharCode(soundObject.pad15.key)
	hiddenButton[15].innerText = String.fromCharCode(soundObject.pad16.key)
}
displayKeyMappings();
function keyBind() {
	if ((switcher === "on")) {
		let mapKeyCounter = 0;
		let mappedPad = this.id;
		window.addEventListener("keydown", function (event) {
			event.preventDefault;
			if (mapKeyCounter < 1) {
				mappedKey = event.keyCode;
				soundObject[mappedPad].key = mappedKey;
				mapKeyCounter++;
			}
			displayKeyMappings()
		})
	}
};

function beatRepeatToggle() {
	if (noteRepeatSwitcher === "on") {
		beatRepeatBtn.style.backgroundColor = "white";
		beatRepeatBtn.innerText = "Beat Repeat Off";
		noteRepeatSwitcher = "off";

		if (counterObj.newPadCounter1>0) {
			bufferNode1.stop(context.currentTime);
			counterObj.newPadCounter1 = 0;	
		}
		if (counterObj.newPadCounter2>0) {
			bufferNode2.stop(context.currentTime);
			counterObj.newPadCounter2 = 0;	
		}
		if (counterObj.newPadCounter3>0) {
			bufferNode3.stop(context.currentTime);
			counterObj.newPadCounter3 = 0;	
		}
		if (counterObj.newPadCounter4>0) {
			bufferNode4.stop(context.currentTime);
			counterObj.newPadCounter4 = 0;	
		}
		if (counterObj.newPadCounter5>0) {
			bufferNode5.stop(context.currentTime);
			counterObj.newPadCounter5 = 0;	
		}
		if (counterObj.newPadCounter6>0) {
			bufferNode6.stop(context.currentTime);
			counterObj.newPadCounter6 = 0;	
		}
		if (counterObj.newPadCounter7>0) {
			bufferNode7.stop(context.currentTime);
			counterObj.newPadCounter7 = 0;	
		}
		if (counterObj.newPadCounter8>0) {
			bufferNode8.stop(context.currentTime);
			counterObj.newPadCounter8 = 0;	
		}
		if (counterObj.newPadCounter9>0) {
			bufferNode9.stop(context.currentTime);
			counterObj.newPadCounter9 = 0;	
		}
		if (counterObj.newPadCounter10>0) {
			bufferNode10.stop(context.currentTime);
			counterObj.newPadCounter10 = 0;	
		}
		if (counterObj.newPadCounter11>0) {
			bufferNode11.stop(context.currentTime);
			counterObj.newPadCounter11 = 0;	
		}
		if (counterObj.newPadCounter12>0) {
			bufferNode12.stop(context.currentTime);
			counterObj.newPadCounter12 = 0;	
		}
		if (counterObj.newPadCounter13>0) {
			bufferNode13.stop(context.currentTime);
			counterObj.newPadCounter13 = 0;	
		}
		if (counterObj.newPadCounter14>0) {
			bufferNode14.stop(context.currentTime);
			counterObj.newPadCounter14 = 0;	
		}
		if (counterObj.newPadCounter15>0) {
			bufferNode15.stop(context.currentTime);
			counterObj.newPadCounter15 = 0;	
		}
		if (counterObj.newPadCounter16>0) {
			bufferNode16.stop(context.currentTime);
			counterObj.newPadCounter16 = 0;	
		}
		
	} else {
		beatRepeatBtn.style.backgroundColor = "yellow";
		beatRepeatBtn.innerText = "Beat Repeat On";
		noteRepeatSwitcher = "on";
	}
}

function keyToggle() {
	if (switcher === "on") {
		keyAssign.style.backgroundColor = "white";
		keyAssign.innerText = "Key Assign Off";

		for (let x = 0; x < hiddenButton.length; x++) {

			hiddenButton[x].style.display = "none"
		}
		switcher = "off";
	} else {
		keyAssign.style.backgroundColor = "yellow";
		keyAssign.innerText = "Key Assign On";
		for (let x = 0; x < hiddenButton.length; x++) {
			hiddenButton[x].style.display = "inline"
		}

		for (var i = 0; i < pads.length; i++) {
			pads[i].addEventListener("click", keyBind)
		}
		switcher = "on";
	}
}

function addBackground(padNumber) {
	if (switcher === "off") {
		window[padNumber].classList.add("backgroundBlack")
	}
}

function removeBackground(padNumber) {
	if (switcher === "off") {
		window[padNumber].classList.remove("backgroundBlack")
	}
}

function repeatPadEqualsZero(padNumber) {
	window['repeatPad'+padNumber] = 0
}

for(var i=1; i<=16; i++) {
		window['repeatPad'+i] = 0;
	}

let counterObj = {	
};

for(var i=1; i<=16; i++) {
	counterObj['newPadCounter'+i] = 0;
}
let counter;