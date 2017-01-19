(function(){
	var p = {
		elVideo : document.querySelector("#player").contentDocument.querySelector("video"),
		elDisplay : null,
	};
	
	//----
	
	var elMain = document.createElement("div");
	elMain.style.position = "fixed";
	elMain.style.bottom = "0px";
	elMain.style.left = "0px";
	elMain.style.width = "100%";
	elMain.style.color = "hsla(0,0%,100%,1)";
	elMain.style.backgroundColor = "hsla(0,0%,0%,0.8)";
	elMain.style.padding = "4px 8px";
	elMain.style.zIndex = "999999999";
	
	var elInput = document.createElement("input");
	elInput.style.width = "300px";
	elInput.style.backgroundColor = "hsla(0,0%,0%,1)";
	elInput.type  = "range";
	elInput.min   = 0.5;
	elInput.max   = 4;
	elInput.step  = 0.05;
	elInput.value = 1;
	elInput.addEventListener("input",(function(p){return function(event){
		p.elVideo.playbackRate = this.value;
		p.elDisplay.textContent = this.value+"x";
	};})(p));
	
	var elDisplay = document.createElement("block");
	elDisplay.style.width = "100px";
	elDisplay.style.backgroundColor = "hsla(0,0%,0%,1)";
	elDisplay.style.border = "1px solid white";
	elDisplay.style.padding = "0px 4px";
	elDisplay.style.margin = "0px 4px";
	elDisplay.textContent = "1x";
	p.elDisplay = elDisplay;
	
	var elVersion = document.createElement("div");
	elVersion.style.position = "absolute";
	elVersion.style.bottom = "4px";
	elVersion.style.right = "20px"; // padding of parent plus actual value
	elVersion.style.color = "hsla(0,0%,100%,0.5)";
	elVersion.style.textAlign = "right";
	elVersion.textContent = "ver1";
	
	elMain.appendChild(elVersion);
	elMain.appendChild(elInput);
	elMain.appendChild(elDisplay);
	elMain.appendChild(document.createTextNode("slider adjusts video playback rate"));
	document.body.appendChild(elMain);
})();