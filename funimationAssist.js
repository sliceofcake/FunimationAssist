(function(){
	var p = {
		elVideo      : document.querySelector("#player").contentDocument.querySelector("video"),
		controlEO : {
			playbackRate : {elControl : null,elDisplay : null,elReset : null,reset : 1,v : 1,min:0.5,max:4,step:0.05,},
			brightness   : {elControl : null,elDisplay : null,elReset : null,reset : 1,v : 1,min:0  ,max:4,step:0.05,},
			contrast     : {elControl : null,elDisplay : null,elReset : null,reset : 1,v : 1,min:0  ,max:4,step:0.05,},
			saturate     : {elControl : null,elDisplay : null,elReset : null,reset : 1,v : 1,min:0  ,max:4,step:0.05,},
		},
		genFilter : function(){
			return "brightness("+this.controlEO.brightness.v+") contrast("+(this.controlEO.contrast.v*100)+"%) saturate("+(this.controlEO.saturate.v*100)+"%)";},
		set : function(o={}){this.ooaw(o,{whatS:null,valueM:null});
			var controlE = this.controlEO[o.whatS];
			controlE.v = o.valueM;
			this.pipe(o);},
		pipe : function(o={}){this.ooaw(o,{whatS:null});
			var controlE = this.controlEO[o.whatS];
			switch (o.whatS){default:;
				break;case "playbackRate":
					this.elVideo.playbackRate = controlE.v;
					controlE.elDisplay.textContent = "playback rate : "+controlE.v+"x";
					controlE.elInput.value = controlE.v;
				break;case "brightness":
					this.elVideo.style.filter = this.genFilter();
					controlE.elDisplay.textContent = "brightness : "+controlE.v+"x";
					controlE.elInput.value = controlE.v;
				break;case "contrast":
					this.elVideo.style.filter = this.genFilter();
					controlE.elDisplay.textContent = "contrast : "+controlE.v+"x";
					controlE.elInput.value = controlE.v;
				break;case "saturate":
					this.elVideo.style.filter = this.genFilter();
					controlE.elDisplay.textContent = "saturation : "+controlE.v+"x";
					controlE.elInput.value = controlE.v;}},
		
		genElBase    : function(o={}){this.ooaw(o,{typeS:"div",classS:null,elParent:null});
			var el = document.createElement(o.typeS);
			if (o.classS   !== null){el.classList.add(o.classS);}
			if (o.elParent !== null){o.elParent.appendChild(el);}
			return el;},
		// object <-- object ; property absorb (strong)
		ooas:function(o,oo){
			for (var k of Object.keys(oo)){
				o[k] = oo[k];}
			return o;},
		// object <-- object ; property absorb (weak)
		ooaw:function(o,oo){
			for (var k of Object.keys(oo)){
				if (typeof o[k] === "undefined"){
					o[k] = oo[k];}}
			return o;},
	};
	
	//----
	
	var elCSS = p.genElBase({typeS:"style",elParent:document.head});
	elCSS.textContent
		= ".funimationAssist-main    {position:fixed;bottom:0px;left:0px;width:100%;color:hsla(0,0%,100%,1);background-color:hsla(0,0%,0%,0.8);padding:4px 4px;z-index:999999999;}"
		+ ".funimationAssist-version {position:absolute;bottom:4px;right:20px;color:hsla(0,0%,100%,0.5);text-align:right;}"
		+ ".funimationAssist-row     {}"
		+ ".funimationAssist-display {display:inline-block;width:200px;background-color:hsla(0,0%,0%,1);border:1px solid white;padding:0px 4px;margin:0px 4px;text-align:right;}"
		+ ".funimationAssist-input   {width:300px;background-color:hsla(0,0%,0%,1);}";
	
	var elMain = p.genElBase({typeS:"div",classS:"funimationAssist-main",elParent:document.body});
	
	var elVersion = p.genElBase({typeS:"div",classS:"funimationAssist-version",elParent:elMain});
	elVersion.textContent = "ver2";
	
	var controlEOKA = Object.keys(p.controlEO);
	for (var controlEOKAI = 0,controlEOKAC = controlEOKA.length; controlEOKAI < controlEOKAC; controlEOKAI++){var controlEOK = controlEOKA[controlEOKAI];
		var whatS = controlEOK;
		var controlE = p.controlEO[whatS];
		var elDisplayRow   = p.genElBase({typeS:"div"  ,classS:"funimationAssist-row"    ,elParent:elMain});
		controlE.elDisplay = p.genElBase({typeS:"div"  ,classS:"funimationAssist-display",elParent:elDisplayRow});
		controlE.elInput   = p.genElBase({typeS:"input",classS:"funimationAssist-input"  ,elParent:elDisplayRow});
		controlE.elReset   = p.genElBase({typeS:"input",classS:"funimationAssist-reset"  ,elParent:elDisplayRow});
		p.ooas(controlE.elInput,{type:"range",min:controlE.min,max:controlE.max,step:controlE.step,value:controlE.v});
		p.ooas(controlE.elReset,{type:"button",value:"Reset"});
		controlE.elInput.addEventListener("input",(function(whatS){return function(ev){p.set({whatS,valueM:this.value});};})(whatS));
		controlE.elReset.addEventListener("click",(function(whatS){return function(ev){p.set({whatS,valueM:p.controlEO[whatS].reset});};})(whatS));
		p.pipe({whatS});}
})();