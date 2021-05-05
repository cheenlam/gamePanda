(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"panda_atlas_", frames: [[878,1492,734,70],[1614,1492,197,65],[376,1492,500,110],[1614,1559,108,83],[1252,1564,51,51],[878,1590,51,51],[931,1590,51,51],[0,0,632,744],[634,0,632,744],[1268,0,632,744],[0,746,632,744],[634,746,632,744],[1268,746,632,744],[878,1564,372,24],[0,1492,374,305]]}
];


// symbols:



(lib.bananaImg = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bomb = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bomb02 = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.img_go = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.light_green = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.light_red = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.light_yellow = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.panda_bg = function() {
	this.initialize(img.panda_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2400,310);


(lib.panda_bg2 = function() {
	this.initialize(img.panda_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2400,35);


(lib.panda_bg3 = function() {
	this.initialize(img.panda_bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2400,310);


(lib.panda_user01 = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.panda_user02 = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.panda_user03 = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.panda_user04 = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.panda_user05 = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.panda_user06 = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.run = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.startLight = function() {
	this.initialize(ss["panda_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.補間動畫16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.panda_bg2();
	this.instance.setTransform(-1200,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1200,-17.5,2400,35);


(lib.補間動畫15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.panda_bg2();
	this.instance.setTransform(-1200,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1200,-17.5,2400,35);


(lib.補間動畫14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.img_go();
	this.instance.setTransform(-54,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-41.5,108,83);


(lib.補間動畫13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.img_go();
	this.instance.setTransform(-54,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-41.5,108,83);


(lib.補間動畫12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.startLight();
	this.instance.setTransform(-151,-123.15,0.8075,0.8075);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-123.1,302,246.3);


(lib.補間動畫11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.startLight();
	this.instance.setTransform(-151,-123.15,0.8075,0.8075);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-123.1,302,246.3);


(lib.補間動畫3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.panda_bg();
	this.instance.setTransform(-1200,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1200,-155,2400,310);


(lib.smoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{smokeStop:0,smokePlay:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.play();
	}
	this.frame_4 = function() {
		this.gotoAndPlay('smokePlay');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(1));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsCzIAAllILZAAIAAFlg");
	mask.setTransform(36.5212,17.908);

	// 煙霧
	this.instance = new lib.run();
	this.instance.setTransform(-29,0);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:-106},0).wait(1).to({x:-181},0).wait(1).to({x:-256},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.1,24);


(lib.userPanda06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{dance:0,stop:39,ready:40,run:48,die:56,fall:85});

	// timeline functions:
	this.frame_38 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_55 = function() {
		this.gotoAndPlay(49);
	}
	this.frame_84 = function() {
		this.gotoAndPlay("ready");
	}
	this.frame_96 = function() {
		this.gotoAndPlay("ready");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1).call(this.frame_39).wait(16).call(this.frame_55).wait(29).call(this.frame_84).wait(12).call(this.frame_96).wait(1));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_39 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_40 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_48 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_56 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_73 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_85 = new cjs.Graphics().p("AmKG3IAAtuIMVAAIAANug");
	var mask_graphics_86 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_87 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_88 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_89 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_90 = new cjs.Graphics().p("AnjGtIAAtZIPHAAIAANZg");
	var mask_graphics_94 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_95 = new cjs.Graphics().p("Am7HZIAAtaIOMAAIAANag");
	var mask_graphics_96 = new cjs.Graphics().p("Am6HUIAAuBIOLAAIAAOBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.5,y:46.5}).wait(39).to({graphics:mask_graphics_39,x:39.5,y:46.5}).wait(1).to({graphics:mask_graphics_40,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_48,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_56,x:39.5,y:46.5}).wait(17).to({graphics:mask_graphics_73,x:39.5,y:44.5}).wait(12).to({graphics:mask_graphics_85,x:39.5,y:42.55}).wait(1).to({graphics:mask_graphics_86,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_87,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_88,x:39.55,y:43.55}).wait(1).to({graphics:mask_graphics_89,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_90,x:44.55,y:58.625}).wait(4).to({graphics:mask_graphics_94,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_95,x:46.5065,y:47.2769}).wait(1).to({graphics:mask_graphics_96,x:46.5,y:46.7785}).wait(1));

	// 熊貓
	this.instance = new lib.panda_user06();
	this.instance.setTransform(-473,-279);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:-394},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-240,y:0},0).wait(1).to({x:0},0).wait(1).to({x:-80},0).wait(1).to({x:-162},0).wait(1).to({x:-240},0).wait(1).to({x:-317,y:1},0).wait(1).to({x:-399},0).wait(1).to({x:-477},0).wait(1).to({x:-554},0).wait(1).to({x:1,y:-652},0).wait(1).to({x:-79,y:-650},0).wait(1).to({x:-159,y:-651},0).wait(1).to({x:-238,y:-652},0).wait(1).to({x:-316},0).wait(1).to({x:-398},0).wait(1).to({x:-476},0).wait(1).to({x:-553},0).wait(1).to({x:-1,y:-373},0).wait(6).to({x:-80},0).wait(1).to({x:-159},0).wait(2).to({x:-238},0).wait(1).to({x:-318},0).wait(2).to({x:-397},0).wait(1).to({x:-476},0).wait(2).to({x:-555},0).wait(2).to({x:0,y:-469},0).wait(2).to({x:-78,y:-466},0).wait(2).to({x:-156,y:-467},0).wait(2).to({x:-233,y:-466},0).wait(2).to({x:-158,y:-467},0).wait(1).to({x:-397,y:-466},0).wait(1).to({x:-477,y:-468},0).wait(1).to({x:-554,y:-466},0).wait(1).to({x:-41,y:-560},0).wait(1).to({x:-136,y:-563},0).wait(1).to({x:-249,y:-566},0).wait(1).to({x:-44,y:-193},0).wait(1).to({x:-368,y:-548},0).wait(1).to({x:-186,y:-175},0).wait(4).to({x:-368,y:-548},0).wait(1).to({x:-321,y:-184},0).wait(1).to({x:-451},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-2,104.8,103.6);


(lib.userPanda05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"dance":0,"stop":39,"ready":40,"run":48,"die":56,"fall":85});

	// timeline functions:
	this.frame_38 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_55 = function() {
		this.gotoAndPlay(49);
	}
	this.frame_84 = function() {
		this.gotoAndPlay("ready");
	}
	this.frame_96 = function() {
		this.gotoAndPlay("ready");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1).call(this.frame_39).wait(16).call(this.frame_55).wait(29).call(this.frame_84).wait(12).call(this.frame_96).wait(1));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_39 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_40 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_48 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_56 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_73 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_85 = new cjs.Graphics().p("AmKG3IAAtuIMVAAIAANug");
	var mask_graphics_86 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_87 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_88 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_89 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_90 = new cjs.Graphics().p("AnjGtIAAtZIPHAAIAANZg");
	var mask_graphics_94 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_95 = new cjs.Graphics().p("Am7HZIAAtaIOMAAIAANag");
	var mask_graphics_96 = new cjs.Graphics().p("Am6HUIAAuBIOLAAIAAOBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.5,y:46.5}).wait(39).to({graphics:mask_graphics_39,x:39.5,y:46.5}).wait(1).to({graphics:mask_graphics_40,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_48,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_56,x:39.5,y:46.5}).wait(17).to({graphics:mask_graphics_73,x:39.5,y:44.5}).wait(12).to({graphics:mask_graphics_85,x:39.5,y:42.55}).wait(1).to({graphics:mask_graphics_86,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_87,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_88,x:39.55,y:43.55}).wait(1).to({graphics:mask_graphics_89,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_90,x:44.55,y:58.625}).wait(4).to({graphics:mask_graphics_94,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_95,x:46.5065,y:47.2769}).wait(1).to({graphics:mask_graphics_96,x:46.5,y:46.7785}).wait(1));

	// 熊貓
	this.instance = new lib.panda_user05();
	this.instance.setTransform(-473,-279);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:-394},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-240,y:0},0).wait(1).to({x:0},0).wait(1).to({x:-80},0).wait(1).to({x:-162},0).wait(1).to({x:-240},0).wait(1).to({x:-317,y:1},0).wait(1).to({x:-399},0).wait(1).to({x:-477},0).wait(1).to({x:-554},0).wait(1).to({x:1,y:-652},0).wait(1).to({x:-79,y:-650},0).wait(1).to({x:-159,y:-651},0).wait(1).to({x:-238,y:-652},0).wait(1).to({x:-316},0).wait(1).to({x:-398},0).wait(1).to({x:-476},0).wait(1).to({x:-553},0).wait(1).to({x:-1,y:-373},0).wait(6).to({x:-80},0).wait(1).to({x:-159},0).wait(2).to({x:-238},0).wait(1).to({x:-318},0).wait(2).to({x:-397},0).wait(1).to({x:-476},0).wait(2).to({x:-555},0).wait(2).to({x:0,y:-469},0).wait(2).to({x:-78,y:-466},0).wait(2).to({x:-156,y:-467},0).wait(2).to({x:-233,y:-466},0).wait(2).to({x:-158,y:-467},0).wait(1).to({x:-397,y:-466},0).wait(1).to({x:-477,y:-468},0).wait(1).to({x:-554,y:-466},0).wait(1).to({x:-41,y:-560},0).wait(1).to({x:-136,y:-563},0).wait(1).to({x:-249,y:-566},0).wait(1).to({x:-44,y:-193},0).wait(1).to({x:-368,y:-548},0).wait(1).to({x:-186,y:-175},0).wait(4).to({x:-368,y:-548},0).wait(1).to({x:-321,y:-184},0).wait(1).to({x:-451},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-2,104.8,103.6);


(lib.userPanda04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"dance":0,"stop":39,"ready":40,"run":48,"die":56,"fall":85});

	// timeline functions:
	this.frame_38 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_55 = function() {
		this.gotoAndPlay(49);
	}
	this.frame_84 = function() {
		this.gotoAndPlay("ready");
	}
	this.frame_96 = function() {
		this.gotoAndPlay("ready");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1).call(this.frame_39).wait(16).call(this.frame_55).wait(29).call(this.frame_84).wait(12).call(this.frame_96).wait(1));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_39 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_40 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_48 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_56 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_73 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_85 = new cjs.Graphics().p("AmKG3IAAtuIMVAAIAANug");
	var mask_graphics_86 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_87 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_88 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_89 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_90 = new cjs.Graphics().p("AnjGtIAAtZIPHAAIAANZg");
	var mask_graphics_94 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_95 = new cjs.Graphics().p("Am7HZIAAtaIOMAAIAANag");
	var mask_graphics_96 = new cjs.Graphics().p("Am6HUIAAuBIOLAAIAAOBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.5,y:46.5}).wait(39).to({graphics:mask_graphics_39,x:39.5,y:46.5}).wait(1).to({graphics:mask_graphics_40,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_48,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_56,x:39.5,y:46.5}).wait(17).to({graphics:mask_graphics_73,x:39.5,y:44.5}).wait(12).to({graphics:mask_graphics_85,x:39.5,y:42.55}).wait(1).to({graphics:mask_graphics_86,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_87,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_88,x:39.55,y:43.55}).wait(1).to({graphics:mask_graphics_89,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_90,x:44.55,y:58.625}).wait(4).to({graphics:mask_graphics_94,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_95,x:46.5065,y:47.2769}).wait(1).to({graphics:mask_graphics_96,x:46.5,y:46.7785}).wait(1));

	// 熊貓
	this.instance = new lib.panda_user04();
	this.instance.setTransform(-473,-279);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:-394},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-240,y:0},0).wait(1).to({x:0},0).wait(1).to({x:-80},0).wait(1).to({x:-162},0).wait(1).to({x:-240},0).wait(1).to({x:-317,y:1},0).wait(1).to({x:-399},0).wait(1).to({x:-477},0).wait(1).to({x:-554},0).wait(1).to({x:1,y:-652},0).wait(1).to({x:-79,y:-650},0).wait(1).to({x:-159,y:-651},0).wait(1).to({x:-238,y:-652},0).wait(1).to({x:-316},0).wait(1).to({x:-398},0).wait(1).to({x:-476},0).wait(1).to({x:-553},0).wait(1).to({x:-1,y:-373},0).wait(6).to({x:-80},0).wait(1).to({x:-159},0).wait(2).to({x:-238},0).wait(1).to({x:-318},0).wait(2).to({x:-397},0).wait(1).to({x:-476},0).wait(2).to({x:-555},0).wait(2).to({x:0,y:-469},0).wait(2).to({x:-78,y:-466},0).wait(2).to({x:-156,y:-467},0).wait(2).to({x:-233,y:-466},0).wait(2).to({x:-158,y:-467},0).wait(1).to({x:-397,y:-466},0).wait(1).to({x:-477,y:-468},0).wait(1).to({x:-554,y:-466},0).wait(1).to({x:-41,y:-560},0).wait(1).to({x:-136,y:-563},0).wait(1).to({x:-249,y:-566},0).wait(1).to({x:-44,y:-193},0).wait(1).to({x:-368,y:-548},0).wait(1).to({x:-186,y:-175},0).wait(4).to({x:-368,y:-548},0).wait(1).to({x:-321,y:-184},0).wait(1).to({x:-451},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-2,104.8,103.6);


(lib.userPanda03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"dance":0,"stop":39,"ready":40,"run":48,"die":56,"fall":85});

	// timeline functions:
	this.frame_38 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_55 = function() {
		this.gotoAndPlay(49);
	}
	this.frame_84 = function() {
		this.gotoAndPlay("ready");
	}
	this.frame_96 = function() {
		this.gotoAndPlay("ready");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1).call(this.frame_39).wait(16).call(this.frame_55).wait(29).call(this.frame_84).wait(12).call(this.frame_96).wait(1));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_39 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_40 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_48 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_56 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_73 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_85 = new cjs.Graphics().p("AmKG3IAAtuIMVAAIAANug");
	var mask_graphics_86 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_87 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_88 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_89 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_90 = new cjs.Graphics().p("AnjGtIAAtZIPHAAIAANZg");
	var mask_graphics_94 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_95 = new cjs.Graphics().p("Am7HZIAAtaIOMAAIAANag");
	var mask_graphics_96 = new cjs.Graphics().p("Am6HUIAAuBIOLAAIAAOBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.5,y:46.5}).wait(39).to({graphics:mask_graphics_39,x:39.5,y:46.5}).wait(1).to({graphics:mask_graphics_40,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_48,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_56,x:39.5,y:46.5}).wait(17).to({graphics:mask_graphics_73,x:39.5,y:44.5}).wait(12).to({graphics:mask_graphics_85,x:39.5,y:42.55}).wait(1).to({graphics:mask_graphics_86,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_87,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_88,x:39.55,y:43.55}).wait(1).to({graphics:mask_graphics_89,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_90,x:44.55,y:58.625}).wait(4).to({graphics:mask_graphics_94,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_95,x:46.5065,y:47.2769}).wait(1).to({graphics:mask_graphics_96,x:46.5,y:46.7785}).wait(1));

	// 熊貓
	this.instance = new lib.panda_user03();
	this.instance.setTransform(-473,-279);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:-394},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-240,y:0},0).wait(1).to({x:0},0).wait(1).to({x:-80},0).wait(1).to({x:-162},0).wait(1).to({x:-240},0).wait(1).to({x:-317,y:1},0).wait(1).to({x:-399},0).wait(1).to({x:-477},0).wait(1).to({x:-554},0).wait(1).to({x:1,y:-652},0).wait(1).to({x:-79,y:-650},0).wait(1).to({x:-159,y:-651},0).wait(1).to({x:-238,y:-652},0).wait(1).to({x:-316},0).wait(1).to({x:-398},0).wait(1).to({x:-476},0).wait(1).to({x:-553},0).wait(1).to({x:-1,y:-373},0).wait(6).to({x:-80},0).wait(1).to({x:-159},0).wait(2).to({x:-238},0).wait(1).to({x:-318},0).wait(2).to({x:-397},0).wait(1).to({x:-476},0).wait(2).to({x:-555},0).wait(2).to({x:0,y:-469},0).wait(2).to({x:-78,y:-466},0).wait(2).to({x:-156,y:-467},0).wait(2).to({x:-233,y:-466},0).wait(2).to({x:-158,y:-467},0).wait(1).to({x:-397,y:-466},0).wait(1).to({x:-477,y:-468},0).wait(1).to({x:-554,y:-466},0).wait(1).to({x:-41,y:-560},0).wait(1).to({x:-136,y:-563},0).wait(1).to({x:-249,y:-566},0).wait(1).to({x:-44,y:-193},0).wait(1).to({x:-368,y:-548},0).wait(1).to({x:-186,y:-175},0).wait(4).to({x:-368,y:-548},0).wait(1).to({x:-321,y:-184},0).wait(1).to({x:-451},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-2,104.8,103.6);


(lib.userPanda02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"dance":0,"stop":39,"ready":40,"run":48,"die":56,"fall":85});

	// timeline functions:
	this.frame_38 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_55 = function() {
		this.gotoAndPlay(49);
	}
	this.frame_84 = function() {
		this.gotoAndPlay("ready");
	}
	this.frame_96 = function() {
		this.gotoAndPlay("ready");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1).call(this.frame_39).wait(16).call(this.frame_55).wait(29).call(this.frame_84).wait(12).call(this.frame_96).wait(1));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_39 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_40 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_48 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_56 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_73 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_85 = new cjs.Graphics().p("AmKG3IAAtuIMVAAIAANug");
	var mask_graphics_86 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_87 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_88 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_89 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_90 = new cjs.Graphics().p("AnjGtIAAtZIPHAAIAANZg");
	var mask_graphics_94 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_95 = new cjs.Graphics().p("Am7HZIAAtaIOMAAIAANag");
	var mask_graphics_96 = new cjs.Graphics().p("Am6HUIAAuBIOLAAIAAOBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.5,y:46.5}).wait(39).to({graphics:mask_graphics_39,x:39.5,y:46.5}).wait(1).to({graphics:mask_graphics_40,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_48,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_56,x:39.5,y:46.5}).wait(17).to({graphics:mask_graphics_73,x:39.5,y:44.5}).wait(12).to({graphics:mask_graphics_85,x:39.5,y:42.55}).wait(1).to({graphics:mask_graphics_86,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_87,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_88,x:39.55,y:43.55}).wait(1).to({graphics:mask_graphics_89,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_90,x:44.55,y:58.625}).wait(4).to({graphics:mask_graphics_94,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_95,x:46.5065,y:47.2769}).wait(1).to({graphics:mask_graphics_96,x:46.5,y:46.7785}).wait(1));

	// 熊貓
	this.instance = new lib.panda_user02();
	this.instance.setTransform(-473,-279);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:-394},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-240,y:0},0).wait(1).to({x:0},0).wait(1).to({x:-80},0).wait(1).to({x:-162},0).wait(1).to({x:-240},0).wait(1).to({x:-317,y:1},0).wait(1).to({x:-399},0).wait(1).to({x:-477},0).wait(1).to({x:-554},0).wait(1).to({x:1,y:-652},0).wait(1).to({x:-79,y:-650},0).wait(1).to({x:-159,y:-651},0).wait(1).to({x:-238,y:-652},0).wait(1).to({x:-316},0).wait(1).to({x:-398},0).wait(1).to({x:-476},0).wait(1).to({x:-553},0).wait(1).to({x:-1,y:-373},0).wait(6).to({x:-80},0).wait(1).to({x:-159},0).wait(2).to({x:-238},0).wait(1).to({x:-318},0).wait(2).to({x:-397},0).wait(1).to({x:-476},0).wait(2).to({x:-555},0).wait(2).to({x:0,y:-469},0).wait(2).to({x:-78,y:-466},0).wait(2).to({x:-156,y:-467},0).wait(2).to({x:-233,y:-466},0).wait(2).to({x:-158,y:-467},0).wait(1).to({x:-397,y:-466},0).wait(1).to({x:-477,y:-468},0).wait(1).to({x:-554,y:-466},0).wait(1).to({x:-41,y:-560},0).wait(1).to({x:-136,y:-563},0).wait(1).to({x:-249,y:-566},0).wait(1).to({x:-44,y:-193},0).wait(1).to({x:-368,y:-548},0).wait(1).to({x:-186,y:-175},0).wait(4).to({x:-368,y:-548},0).wait(1).to({x:-321,y:-184},0).wait(1).to({x:-451},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-2,104.8,103.6);


(lib.userPanda01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"dance":0,"stop":39,"ready":40,"run":48,"die":56,"fall":85});

	// timeline functions:
	this.frame_38 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_55 = function() {
		this.gotoAndPlay(49);
	}
	this.frame_84 = function() {
		this.gotoAndPlay("ready");
	}
	this.frame_96 = function() {
		this.gotoAndPlay("ready");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1).call(this.frame_39).wait(16).call(this.frame_55).wait(29).call(this.frame_84).wait(12).call(this.frame_96).wait(1));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_39 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_40 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_48 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_56 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_73 = new cjs.Graphics().p("AmKHRIAAuhIMVAAIAAOhg");
	var mask_graphics_85 = new cjs.Graphics().p("AmKG3IAAtuIMVAAIAANug");
	var mask_graphics_86 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_87 = new cjs.Graphics().p("AnjG3IAAtuIPHAAIAANug");
	var mask_graphics_88 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_89 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_90 = new cjs.Graphics().p("AnjGtIAAtZIPHAAIAANZg");
	var mask_graphics_94 = new cjs.Graphics().p("AnjGQIAAsfIPHAAIAAMfg");
	var mask_graphics_95 = new cjs.Graphics().p("Am7HZIAAtaIOMAAIAANag");
	var mask_graphics_96 = new cjs.Graphics().p("Am6HUIAAuBIOLAAIAAOBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.5,y:46.5}).wait(39).to({graphics:mask_graphics_39,x:39.5,y:46.5}).wait(1).to({graphics:mask_graphics_40,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_48,x:39.5,y:46.5}).wait(8).to({graphics:mask_graphics_56,x:39.5,y:46.5}).wait(17).to({graphics:mask_graphics_73,x:39.5,y:44.5}).wait(12).to({graphics:mask_graphics_85,x:39.5,y:42.55}).wait(1).to({graphics:mask_graphics_86,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_87,x:39.55,y:42.55}).wait(1).to({graphics:mask_graphics_88,x:39.55,y:43.55}).wait(1).to({graphics:mask_graphics_89,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_90,x:44.55,y:58.625}).wait(4).to({graphics:mask_graphics_94,x:47.55,y:57.55}).wait(1).to({graphics:mask_graphics_95,x:46.5065,y:47.2769}).wait(1).to({graphics:mask_graphics_96,x:46.5,y:46.7785}).wait(1));

	// 熊貓
	this.instance = new lib.panda_user01();
	this.instance.setTransform(-473,-279);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:-394},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(2).to({x:-237},0).wait(2).to({x:-156},0).wait(2).to({x:-237},0).wait(2).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-553},0).wait(1).to({x:4},0).wait(1).to({x:-76},0).wait(1).to({x:-154},0).wait(1).to({x:-237},0).wait(1).to({x:-317},0).wait(1).to({x:-394},0).wait(1).to({x:-473},0).wait(1).to({x:-240,y:0},0).wait(1).to({x:0},0).wait(1).to({x:-80},0).wait(1).to({x:-162},0).wait(1).to({x:-240},0).wait(1).to({x:-317,y:1},0).wait(1).to({x:-399},0).wait(1).to({x:-477},0).wait(1).to({x:-554},0).wait(1).to({x:1,y:-652},0).wait(1).to({x:-79,y:-650},0).wait(1).to({x:-159,y:-651},0).wait(1).to({x:-238,y:-652},0).wait(1).to({x:-316},0).wait(1).to({x:-398},0).wait(1).to({x:-476},0).wait(1).to({x:-553},0).wait(1).to({x:-1,y:-373},0).wait(6).to({x:-80},0).wait(1).to({x:-159},0).wait(2).to({x:-238},0).wait(1).to({x:-318},0).wait(2).to({x:-397},0).wait(1).to({x:-476},0).wait(2).to({x:-555},0).wait(2).to({x:0,y:-469},0).wait(2).to({x:-78,y:-466},0).wait(2).to({x:-156,y:-467},0).wait(2).to({x:-233,y:-466},0).wait(2).to({x:-158,y:-467},0).wait(1).to({x:-397,y:-466},0).wait(1).to({x:-477,y:-468},0).wait(1).to({x:-554,y:-466},0).wait(1).to({x:-41,y:-560},0).wait(1).to({x:-136,y:-563},0).wait(1).to({x:-249,y:-566},0).wait(1).to({x:-44,y:-193},0).wait(1).to({x:-368,y:-548},0).wait(1).to({x:-186,y:-175},0).wait(4).to({x:-368,y:-548},0).wait(1).to({x:-321,y:-184},0).wait(1).to({x:-451},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-2,104.8,103.6);


(lib.playBomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{goBomb:0,stopBomb:3});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		this.gotoAndPlay("goBomb");
	}
	this.frame_3 = function() {
		this.play();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(4).call(this.frame_7).wait(1));

	// 圖層_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkwF8IAAr3IJhAAIAAL3g");
	var mask_graphics_3 = new cjs.Graphics().p("Al/GVIAAspIL/AAIAAMpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:30.5,y:38.025}).wait(3).to({graphics:mask_graphics_3,x:38.4484,y:40.5182}).wait(5));

	// 圖層_4
	this.instance = new lib.bomb();
	this.instance.setTransform(8,0);

	this.instance_1 = new lib.bomb02();
	this.instance_1.setTransform(0,2,0.6545,0.6545);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:8}}]}).to({state:[{t:this.instance,p:{x:-68}}]},1).to({state:[{t:this.instance,p:{x:-144}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({x:-86},0).wait(1).to({x:-168},0).wait(1).to({x:-252},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.9,74);


(lib.banana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bananaStop:0,bananaPlay:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.gotoAndPlay('bananaPlay');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlTGpIAAtRIKnAAIAANRg");
	var mask_graphics_1 = new cjs.Graphics().p("AlTGpIAAtRIKnAAIAANRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:34.05,y:43.55}).wait(1).to({graphics:mask_graphics_1,x:34.05,y:43.55}).wait(8));

	// 香蕉
	this.instance = new lib.bananaImg();
	this.instance.setTransform(-6,12,0.8924,0.8924);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-5},0).wait(1).to({x:-88,y:17},0).wait(1).to({x:-169,y:12},0).wait(1).to({x:-250},0).wait(1).to({x:-333,y:20},0).wait(1).to({x:-412,y:12},0).wait(1).to({x:-496},0).wait(1).to({x:-579},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,12,68,70.5);


(lib.補間動畫18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.light_green();
	this.instance.setTransform(25,-2.15,0.784,0.784);

	this.instance_1 = new lib.補間動畫12("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-123.1,302,246.3);


(lib.補間動畫17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.light_green();
	this.instance.setTransform(25,-2.15,0.784,0.784);

	this.instance_1 = new lib.補間動畫12("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-123.1,302,246.3);


(lib.lawn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lawnStop:0,lawnPlay:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.play();
	}
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(148).call(this.frame_149).wait(1));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg32ACvIAAldMBvtAAAIAAFdg");
	mask.setTransform(357.5001,17.4999);

	// 草地
	this.instance = new lib.panda_bg2();

	this.instance_1 = new lib.補間動畫15("synched",0);
	this.instance_1.setTransform(1200,17.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫16("synched",0);
	this.instance_2.setTransform(-485,18.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},148).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true,x:-485,y:18.5},148).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,715,35);


// stage content:
(lib.panda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.play();
	}
	this.frame_199 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(198).call(this.frame_199).wait(4));

	// 紅綠燈
	this.instance = new lib.補間動畫11("synched",0);
	this.instance.setTransform(347,-45.85);
	this.instance._off = true;

	this.instance_1 = new lib.補間動畫12("synched",0);
	this.instance_1.setTransform(347,130.15);

	this.instance_2 = new lib.light_red();
	this.instance_2.setTransform(284,128,0.7647,0.7647);

	this.instance_3 = new lib.light_yellow();
	this.instance_3.setTransform(328,128,0.7645,0.7645);

	this.instance_4 = new lib.light_green();
	this.instance_4.setTransform(372,128,0.784,0.784);

	this.instance_5 = new lib.補間動畫17("synched",0);
	this.instance_5.setTransform(347,130.15);
	this.instance_5._off = true;

	this.instance_6 = new lib.補間動畫18("synched",0);
	this.instance_6.setTransform(347,-126.85);

	this.instance_7 = new lib.補間動畫13("synched",0);
	this.instance_7.setTransform(373,155.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.補間動畫14("synched",0);
	this.instance_8.setTransform(373,155.5,3.1928,3.1928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1},{t:this.instance_2}]},2).to({state:[{t:this.instance_1},{t:this.instance_3}]},10).to({state:[{t:this.instance_1},{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},5).to({state:[]},1).wait(154));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true,y:130.15},4).wait(198));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({_off:false},0).to({_off:true,y:-126.85},6).wait(161));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(43).to({_off:false},0).to({_off:true,scaleX:3.1928,scaleY:3.1928},5).wait(155));

	// 背景
	this.instance_9 = new lib.panda_bg3();
	this.instance_9.setTransform(1,1);

	this.instance_10 = new lib.panda_bg();
	this.instance_10.setTransform(1,3);

	this.instance_11 = new lib.補間動畫3("synched",0);
	this.instance_11.setTransform(1201,156);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{y:3}},{t:this.instance_9}]}).to({state:[{t:this.instance_10,p:{y:1}}]},1).to({state:[{t:this.instance_10,p:{y:1}}]},5).to({state:[{t:this.instance_11}]},43).to({state:[{t:this.instance_11}]},150).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:false},0).to({x:-485,y:155},150).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1327.5,-95,3728.5,408);
// library properties:
lib.properties = {
	id: '3D19719345A25C45BBCCE99DF7743749',
	width: 715,
	height: 310,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/panda_bg.jpg", id:"panda_bg"},
		{src:"images/panda_bg2.png", id:"panda_bg2"},
		{src:"images/panda_bg3.jpg", id:"panda_bg3"},
		{src:"images/panda_atlas_.png", id:"panda_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3D19719345A25C45BBCCE99DF7743749'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;