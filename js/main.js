var db = [
	{
		name: 'AJS37 Viggen',
		type: 'airborne',
		frequency: 1000,
		playDuration: 500,
		pauseDuration: 1200
	},
	{
		name: 'E-2D',
		type: 'airborne',
		frequency: 300,
		playDuration: 500,
		pauseDuration: 5200
	},
	{
		name: 'E-3A',
		type: 'airborne',
		frequency: 300,
		playDuration: 1000,
		pauseDuration: 5200
	},
	{
		name: 'A-50',
		type: 'airborne',
		frequency: 200,
		playDuration: 1000,
		pauseDuration: 5200
	},
	{
		name: 'MiG-21bis - Emitter 1',
		type: 'airborne',
		frequency: 1000,
		playDuration: 500,
		pauseDuration: 1200
	},
	{
		name: 'MiG-21bis - Emitter 2',
		type: 'airborne',
		frequency: 3400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'MiG-21bis - Emitter 3',
		type: 'airborne',
		frequency: 5400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'Su-27 - Emitter 1',
		type: 'airborne',
		frequency: 1000,
		playDuration: 500,
		pauseDuration: 1200
	},
	{
		name: 'Su 27 - Emitter 2',
		type: 'airborne',
		frequency: 5400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'Su 27 - Emitter 3',
		type: 'airborne',
		frequency: 3400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'F-15C - Emitter 1',
		type: 'airborne',
		frequency: 900,
		playDuration: 500,
		pauseDuration: 1200
	},
	{
		name: 'F-15C - Emitter 2',
		type: 'airborne',
		frequency: 1200,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'F-15C - Emitter 3',
		type: 'airborne',
		frequency: 5900,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'Mirage-2000C - Emitter 1',
		type: 'airborne',
		frequency: 1000,
		playDuration: 500,
		pauseDuration: 1200
	},
	{
		name: 'Mirage-2000C - Emitter 2',
		type: 'airborne',
		frequency: 5400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'Mirage-2000C - Emitter 3',
		type: 'airborne',
		frequency: 3400,
		playDuration: 200,
		pauseDuration: 500
	},
	{
		name: 'Kub - SA-6 - Search',
		type: 'ground',
		frequency: 967,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Kub - SA-6 - Tracking',
		type: 'ground',
		frequency: 1763,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Buk - SA-11 - Search A',
		type: 'ground',
		frequency: 697,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Buk - SA-11 - Search B',
		type: 'ground',
		frequency: 1763,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Buk - SA-11 - Tracking',
		type: 'ground',
		frequency: 2998,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'S-125 - SA-3 - Emitter 1',
		type: 'ground',
		frequency: 447,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'S-125 - SA-3 - Emitter 2',
		type: 'ground',
		frequency: 697,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Tunguska - SA-19 - Search',
		type: 'ground',
		frequency: 4836,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Tunguska - SA-19 - Tracking',
		type: 'ground',
		frequency: 6520,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Tor - SA-15 - Emitter 1',
		type: 'ground',
		frequency: 5553,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Tor - SA-15 - Emitter 2',
		type: 'ground',
		frequency: 3844,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'S-300PS - SA-10 - SR 5N66M',
		type: 'ground',
		frequency: 1110,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'S-300PS - SA-10 - SR 64H6E',
		type: 'ground',
		frequency: 447,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'S-300PS - SA-10 - Tracking',
		type: 'ground',
		frequency: 856,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Osa - SA-8 - Tracking',
		type: 'ground',
		frequency: 2800,
		playDuration: 500,
		pauseDuration: 1500
	},
	{
		name: 'ZSU-24-4 Shilka - Tracking',
		type: 'ground',
		frequency: 100,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Hawk - SR AN/MPQ-55',
		type: 'ground',
		frequency: 967,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Hawk - SR AN/MPQ-50',
		type: 'ground',
		frequency: 447,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Hawk - Search',
		type: 'ground',
		frequency: 768,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Hawk - Tracking',
		type: 'ground',
		frequency: 1427,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Roland - EWR',
		type: 'ground',
		frequency: 1763,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Roland - Search',
		type: 'ground',
		frequency: 4836,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Roland - TR ADS',
		type: 'ground',
		frequency: 6520,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Vulcan - Tracking',
		type: 'ground',
		frequency: 100,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Gepard - Tracking',
		type: 'ground',
		frequency: 100,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'Patriot - Search',
		type: 'ground',
		frequency: 447,
		playDuration: 1000,
		pauseDuration: 2000
	},
	{
		name: 'Patriot - Tracking',
		type: 'ground',
		frequency: 856,
		playDuration: 100,
		pauseDuration: 100
	},
	{
		name: 'EWR',
		type: 'ground',
		frequency: 400,
		playDuration: 1500,
		pauseDuration: 8500
	}
];

var volume = 0.75;

$(document).ready(function() {

	$("#volume-control").slider({
		max: 100,
		min: 0,
		value: volume * 100,
		slide: function(event, ui) {
			volume = ui.value / 100;
			for(var key in db) {
				db[key].pattern.tone.mul = volume;
			}
		}
	});

	for(var key in db) {
		db[key].id = key;
		db[key].pattern = new Pattern(db[key]);

		var playBtnHtml = "<input id=\"pattern"+key+"Play\" type=\"button\" value=\"Play\" />";
		var stopBtnHtml = "<input id=\"pattern"+key+"Stop\" type=\"button\" value=\"Stop\" disabled=\"disabled\" />";
		var html = "<li id=\"pattern"+key+"Row\">"+playBtnHtml+stopBtnHtml+" "+db[key].name+"</li>";

		if(db[key].type == "airborne") {
			$("#airborne-pattern-list-container").append(html);
		}
		if(db[key].type == "ground") {
			$("#ground-pattern-list-container").append(html);
		}
		if(db[key].type == "naval") {
			$("#naval-pattern-list-container").append(html);
		}
		

		db[key].pattern.bindKeys();
	}
});

function Pattern(options) {

	var self = this;
	this.id = options.id;
	this.name = options.name;
	this.frequency = options.frequency;
	this.playDuration = options.playDuration;
	this.pauseDuration = options.pauseDuration;
	this.repeat = options.repeat;
	this.status = "Stopped";
	this.tone = T("sin", {
			freq: this.frequency,
			mul: volume
		});

	this.play = function() {
		this.status = "Playing";
		this.tone.play();

		$("#pattern"+this.id+"Row").css("background-color", "orange");

		setTimeout(function() {
			self.tone.pause();
			$("#pattern"+self.id+"Row").css("background-color", "transparent");

			setTimeout(function() {
				if(self.status == "Playing") {
					self.play();
				}
			}, self.pauseDuration);

		}, self.playDuration);
		
	}

	this.stop = function() {
		this.status = "Stopped";
	}

	this.bindKeys = function() {
		$("#pattern"+self.id+"Play").bind("click", function() {
			self.play();
			$(this).attr("disabled", "disabled").addClass("active");
			$("#pattern"+self.id+"Stop").removeAttr("disabled");
		});
		$("#pattern"+self.id+"Stop").bind("click", function() {
			self.stop();
			$(this).attr("disabled", "disabled");
			$("#pattern"+self.id+"Play").removeAttr("disabled").removeClass("active");
		});
	}
}