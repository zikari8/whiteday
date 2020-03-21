"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {

};

// Define the notifications used in the game
let notifications = {

};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {
	"Pink": "Pink.png",
	"Red": "Red.png",
	"White": "White.png",
	"Green": "Green.png",
	"Hosts": "Hosts.png"
};

// Define the backgrounds for each scene.
const scenes = {
	"Stage": "Stage.png",
	"Booth": "Booth.png",
	"London": "London.png",
	"Paris": "Paris.png",
	"America": "America.png"
};

// Define the Characters
const characters = {
	"n": {
		"Name": " ",
		"Color": "#5bcaff"
	},
	"ev": {
		"Name": "Everyone",
		"Color": "#5bcaff"
	},
	"men": {
		"Name": "Men",
		"Color": "#5bcaff"
	},
	"hos": {
		"Name": "Hosts",
		"Color": "#5bcaff"
	},
	"s": {
		"Name": "Seigi",
		"Color": "#EE1414",
		"Images" : {
			"IMG": "Seigi.png"
		}
	},
	"r": {
		"Name": "Risa",
		"Color": "#FD85ED",
		"Images" : {
			"IMG": "Risa.png"
		}
	},
	"a": {
		"Name": "Arwyn",
		"Color": "#F4FF6A",
		"Images" : {
			"IMG": "Arwyn.png"
		}
	},
	"x": {
		"Name": "Shiori",
		"Color": "#FF6A6A",
		"Images" : {
			"IMG": "Shiori.png"
		}
	},
	"b": {
		"Name": "Bengshan",
		"Color": "#990A0A",
		"Images" : {
			"IMG": "Ben.png"
		}
	},
	"y": {
		"Name": "Yingying",
		"Color": "#7ADEE4",
		"Images" : {
			"IMG": "Yingying.png"
		}
	},
	"c": {
		"Name": "Canda",
		"Color": "#FFB923",
		"Images" : {
			"IMG": "Canda.png"
		}
	},
	"e": {
		"Name": "Ernest",
		"Color": "#23FF30",
		"Images" : {
			"IMG": "Ernest.png"
		}
	},
	"h":{
		"Name": "Haruto",
		"Color": "#5bcaff",
		"Images" : {
			"Intro": "Haruto.png",
			"IMG": "Haruto_2.png"
		}
	},
	"l":{
		"Name": "Lestari",
		"Color": "#5bcaff",
		"Images" : {
			"IMG": "Lestari.png"
		}
	}
};

let script = {
	// The game starts here.
	"Start": [
		"jump Introduction"
	],

	"Introduction": [
		"scene Stage",
		"show h Intro with fadeIn",
		"wait 1000",
		"h Welcome ladies and gentlemen to the show you've all been waiting for: The Holy Grail Best Pair Contest!!!",
		"h Tonight, we've gathered four of the most iconic and beloved duos of Questverse to compete head-to-head for the Holy Grail and to see who amongst them is the Best Pair!",
		"h I'm your host for tonight, the man who expects to stay single till the day he dies, Hayama Haruto from True Name Discernment. Also joining me on commentary is...",
		"hide h",
		"show l IMG with fadeInRight",
		"l Me, Lestari Elliwyn from Fate/ConQUEST.",
		"hide l",
		"show Hosts with fadeIn",
		"h Thank you for joining us today, Miss Elliwyn. It is an honor to have you here.",
		"l No, it's my pleasure. I feel like I'm the wrong person to be doing this, but nevertheless, I hope I'll be able to provide appropriate commentary for tonight's events.", 
		"h Now then, what are your thoughts on this competition?",
		"l Well, I think zikari's fooling around too much again.",
		"h That's... a very valid opinion.",
		"h Well then, let's not waste any more time and move right on to introducing tonight's contestants!",
		"scene Booth with fadeIn",
		"h Starting us off are the OG lovebirds of Questverse, the vanilla pairing that started it all.",
		"h Representing Quest of Fate is Team Pink Chocolate. Please give it up for Seigi Nomikata and Risa Mol-Undi!",
		"show Pink bottom center with fadeIn",
		"s Good evening folks. I'm Seigi Nomikata of Team Pink Chocolate. I'll be aiming for victory, so please give us your support.",
		"r Likewise, I'm Risa Mol-Undi. I'm not really sure why this is happening, but if the prize is a Holy Grail, then I won't back down.",
		"h Yes, thank you for joining us tonight, Team Pink Chocolate. Is there anything either of you would like to say?",
		"s Well, as the veterans of Questverse, I feel like Risa and I have already gone through a lot together. Even if we don't ultimately win, I hope to put up a fight worthy of our reputation.",
		"h Alright. Thank you very much, Seigi and Risa. Good luck in the competition.",
		"hide Pink with fadeOut",
		"show Hosts with fadeIn",
		"h Before we move on, we've actually received a letter from an anoymous source regarding Team Pink Chocolate.",
		"h I don't know who wrote it, but it seems that the writer is quite upset Risa was paired with Seigi instead of her. I wonder who this could be from.",
		"l Eh? Isn't it obvious?",
		"h Well, I'm sure Mr. Nomikata has plenty of admirers. He is the No.1 Legendary Playboy after all. But moving on...",
		"hide Hosts",
		"h Next up, a love that surpasses time and dimension, the married couple from another world. Representing Lostbelt Raising Project is Team Red Dragon!",
		"show Red with fadeIn",
		"b ... this is stupid.", 
		"b I thought Holy Grail Wars were supposed to be epic battles, so why are we doing this instead?",
		"y Come on, dear. We're already here, so let's do our best.",
		"b ... well if you say so.",
		"b Yo, I'm Camille Vladivan Andreski from Lostbelt Raising Project. Though I didn't want to, I've been lured here by the prospect of a Holy Grail, so I guess I'll win. It won't even be a challenge.",
		"y And I'm his wife, Yao Yingying. Thank you for inviting us to tonight's festivites.",
		"y Today, I asked my father if I'd be okay, and he said that I'll be fine as long as I try my best, so I'll give it everything I got!",
		"h What a wonderful attitude to have. Then, I'll also wish you two good luck in the competition.", 
		"hide Red",
		"h Our next contestents are the unlikely pair that won our hearts out of nowhere. Representing Language of Love is Team Black Thunder!",
		"show Green with fadeIn",
		"c Uh, hello there, I'm Candis Etherauletta from Fate/ConQuest and Language of Love.",
		"e I-I-I'm, um, Ernest Helmingham. Hi.",
		"h Oh? You two both seem rather nervous. Is there a problem?",
		"e N-no, it's just... I'm not really used to speaking in public...",
		"c It's also a little embarassing to have so many people watching us...",
		"h I see, well I hope it isn't too bad for you two. Any goals for tonight's competition?",
		"e Um... first, I'll do my best to get used to the atmosphere and then go from there.",
		"c W-we'll be doing our best, so please give us your support.",
		"hide Green",
		"show Hosts with fadeIn",
		"h Well, they're certainly a unique couple. Speaking of which, I believe you are close friends with one of them, Miss Elliwyn? What do you think of the pair?",
		"l No Comment. I shall refrain from airing my true thoughts as they would be too graphic for broadcast.",
		"h That's basically the same as saying them. But okay, let's move on.",
		"hide Hosts",
		"h Our final contestents for tonight are the 'impossible' duo of miracles, the pairing that makes zikari cough up blood everytime it's mentioned. Representing Fate/Reclamation is Team White Winter!",
		"show White bottom center with fadeIn",
		"a Good evening. I'm Arwyn Penrith from Fate/Recant.",
		"x Hello there, I'm Amakusa Mori Shiori from the same work.",
		"x Um, I'm not really sure why we were invited here. To begin with, the two of us aren't really like 'that'. But since we're here, we hope to do our best and aim for victory as well.",
		"x If I bring back a Holy Grail, I'm sure Lord Shirou will be happy as well.",
		"a To be honest, I'm not too sure about the purpose of this competition, but since Shiori seems eager, I'll also aim for victory.",
		"x You have my deepest gratitude, sir. I'll be sure to repay this kindness.",
		"a No, there's no need to thank me. Let's both do our best.",
		"x Yes, sir!",
		"hide White",
		"scene Stage with fadeInDown",
		"wait 300",
		"show Hosts with fadeIn",
		"h Alright, those have been all our contestants for this Holy Grail Best Pair Contest. Some seem more ready than others, but they're all aiming for the Holy Grail.",
		"h What do you think of the contestents, Miss Elliwyn?",
		"l Hm? That's strange. Where are the Fimbul cast? I'd think there's atleast be one pair from them.",
		"h Oh, um, we actually had planned to have Javier and Maria participate as the fifth pair, but...",
		"h Currently in Fimbulwinter, Javier's a little too... heated to join us.",
		"l Ah. Well, certainly, in his current state, it'd be difficult to have him participate peacefully.",
		"h We also tried to have the duo from 7th Heaven join us as well, but Miss Strauss vehemently refused. Thus, these four will be our only contestants for this Holy Grail War.",
		"h Which of them do you think seems most likely to win?",
		"l Well... I suppose it'd have to be Team Pink Chocolate. They are the original pair after all, so they have spent the most time together.",
		"l The least likely to win is probably Team White Winter. Those two seem like they're fundamentally incompatable to begin with.",
		"h Oh, that's a rather astute observation. Then, let's see if your prediction comes true.",
		"h Before we begin, for all the viewers watching, please tell us which team you're supporting.",
		"hide Hosts",
		"jump Choice"

	],

	"Choice": [
		"n Note: This VN can be played in two modes: Player Mode and Spectator Mode.",
		"n Player Mode allows you to play as one of the teams and lead them to victory, while Spectator Mode allows you to sit back and enjoy the Holy Grail War.",
		"n This VN has little replay value so please choose wisely.",
		{"Choice":{
			"Dialog": "n Which mode would you like to play?",
			"Player":{
				"Text": "Player Mode",
				"Do": "jump Choice_1"
			},
			"Spectator":{
				"Text": "Spectator Mode",
				"Do": "jump Round_1"
			}
		}}
	],

	"Choice_1": [
		{"Choice":{
			"Dialog": "n Which team would you like to play as?",
			"Pink":{
				"Text": "Team Pink Chocolate",
				"Do": "jump Choice_Pink"
			},
			"Red":{
				"Text": "Team Red Dragon",
				"Do": "jump Choice_Red"
			},
			"Black":{
				"Text": "Team Black Thunder",
				"Do": "jump Choice_Black"
			},
			"White":{
				"Text": "Team White Winter",
				"Do": "jump Choice_White"
			},
			"All":{
				"Text": "Play all teams",
				"Do": "jump Choice_All"
			}
		}},
		"jump Round_1"
	],

	"Choice_Pink": [
		function () {
			storage.mode.team = 1;
			return true;
		},
		"jump Round_1"
	],

	"Choice_Red": [
		function (){
			storage.mode.team = 2;
			return true;
		},
		"jump Round_1"
	],

	"Choice_Black": [
		function (){
			storage.mode.team = 3;
			return true;
			  },
		"jump Round_1"
	],

	"Choice_White": [
		function (){
			storage.mode.team = 4;
			return true;
			  },
		"jump Round_1"
	],

	"Choice_All": [
		function (){
			storage.mode.team = 5;
			return true;
			  },
		"jump Round_1"
	],

	"Round_1": [
		//"n You are on Team {{mode.team}}"
		"show h IMG bottom center",
		"h Alright, now then, allow me to go over the rules of this Holy Grail War.",
		"h Over the course of the contest, the teams will be given questions that test the strength of their relationship. If they are truly the Best Pair of Questverse, they should easily be able to get the correct answer.",
		"h There will be three rounds, each with different type of questions, and the team with the most points at the end will win the Holy Grail.",
		"h That is all. Any questions?",
		"r So it's basically a regular quiz show? We don't have to fight the other teams or anything?",
		"h In essence, yes. We can't be having mass murder and giant explosions every war. The Church will get mad.",
		"s How many questions will be in each round?",
		"a Also, are certain questions worth more points than others?",
		"h The first two rounds will have three questions and the last will have four for a total of 10. Each question is worth one point, except the last one.",
		"h If there are no other questions, allow me to move along with the first round. The very first battle of this Holy Grail War will be this.",
		"h Read her mind! Answer Guessing Quiz!!! Yay~!",
		"h Here's how it works. The female partners of the teams will be given a question about themselves that they must answer and then the men will have to guess their partner's answer.",
		"h If they get it right, that's one point. Otherwise, they receive nothing. Simple, isn't it?",
		"b Hmmm, that's surprisingly difficult...",
		"a Question. How close does our guess have to be to her answer to receive the point?",
		"h Oho, as expected of the lawyer, you sure are a stickler for the rules.",
		"hide h",
		"show Hosts with fadeIn",
		"h The ruling shall be done by the two of us. We'll be in charge of judging whether or not your answer is close enough to receive the point.",
		"h Those are all the rules. What do you think about this battle, Miss Elliwyn?",
		"l Hmmm, it's certainly a rather malicious quiz. Men are rather infamous for being unable to read their partner's signals, so this may be very difficult.",
		"h D-don't say stuff like that; you'll get us in trouble. Umm, then what do you think will be key to winning?",
		"l Well, I suppose the most important aspect to consider is that the women themselves will be the ones answering. So it'll be vital to not only know your partner well, but also how she thinks.",
		"h Very wise words. Then let's keep that in mind as we begin with the very first question.",
		"jump Q1"

	],

	"Q1": [
		"h 'If you're receiving a present from your partner, what would you want?'",
		"h In other words, what kind of present would the ladies like to receive from their partners. The women will first submit their answers, and then the men will have to guess what they want.",
		"l It's a rather practical question, isn't it?",
		"h Yes, it's a question that any man will have to consider at least once in their life. If they are truly a good pair, he should be able to know what she likes.",
		"h Now then, ladies, please submit your answers.",
		"hide Hosts",
		"show Red with fadeIn",
		"b Oi, isn't this too difficult for the first question?",
		"y Hmmm, I'm not sure what to write... I guess it'll have to be this.",
		"hide Red",
		"show Green with fadeIn",
		"c Eh? What am I supposed to answer with? I don't know...",
		"e D-don't worry, just be honest. I'll try my best to guess it!",
		"hide Green",
		"show Pink bottom center with fadeIn",
		"r ... okay, I'll go with this.",
		"hide Pink",
		"show White bottom center with fadeIn",
		"x Alright, good luck, sir. I believe in you!",
		"hide White",
		"h Alright, all of the answers have been submitted. Then let's move right along to the guesses.",
		"jump Q1_Pink"

	],

	"Q1_Pink": [
		"h Shall we have Team Pink Chocolate start us off? Seigi Nomikata, will you give us your guess?",
		"show s IMG bottom center with fadeIn",
		"s No problem. This is easy.",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 1 || storage.mode.team == 5;
			},
			"True": "jump Q1_Pink_Choice",
			"False": "s The present Risa wants is 'sweets'!"
		}},
		"s She has a sweet tooth, so I'm certain she'd prefer something simple like that over an expensive, romantic gift.",
		"h Oh, that sounds rather convincing. But let's check if it's correct. Miss Mol-Undi, what is your answer?",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r My answer was...",
		"r Chocolate!",
		"s Yes!",
		"h Alright, Team Pink Chocolate gets the first point. Congratulations.",
		"hide r",
		"show Pink bottom center with fadeIn",
		"r It looks like we got it right.",
		"s Let's keep it up and get the rest correct too.",
		"hide Pink",
		function () {
			storage.score.pink += 1;
			return true;
		},
		"jump Q1_Red"

	],

	"Q1_Pink_Choice": [
		{"Choice":{
			"Dialog": "n What present does Risa want?",
			"Pink":{
				"Text": "Sweets",
				"Do": "jump Q1_Pink_1"
			},
			"Red":{
				"Text": "Jewellery",
				"Do": "jump Q1_Pink_2"
			},
			"Black":{
				"Text": "Mystic Code",
				"Do": "jump Q1_Pink_3"
			}
		}}
	],

	"Q1_Pink_1": [
		"s The present Risa wants is 'sweets'!",
		"s She has a sweet tooth, so I'm certain she'd prefer something simple like that over an expensive, romantic gift.",
		"h Oh, that sounds rather convincing. But let's check if it's correct. Miss Mol-Undi, what is your answer?",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r My answer was...",
		"r Chocolate!",
		"s Yes!",
		"h Alright, Team Pink Chocolate gets the first point. Congratulations.",
		"hide r",
		"show Pink bottom center with fadeIn",
		"r It looks like we got it right.",
		"s Let's keep it up and get the rest correct too.",
		"hide Pink",
		function () {
			storage.score.pink += 1;
			return true;
		},
		"jump Q1_Red"
	],

	"Q1_Pink_2": [
		"s The present Risa wants is 'jewellery'!",
		"s Accessories are both romantic and something that can be used regularly. Any woman would be delighted to receive some.",
		"h Oh, that sounds rather convincing. But let's check if it's correct. Miss Mol-Undi, what is your answer?",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r My answer was...",
		"r Chocolate!",
		"s Ah, it was that!?",
		"h Oof, looks like Seigi's guess was wrong. Unfortunately, they will not be getting a point, this time.",
		"hide r",
		"show Pink bottom center with fadeIn",
		"s Sorry, it looks like I got it wrong.",
		"r Don't worry, we've just started. Let's get the next one.",
		"hide Pink",
		"jump Q1_Red"
	],

	"Q1_Pink_3": [
		"s The present Risa wants is 'a Mystic Code'!",
		"s Risa's the type of person who would prefer something practical, so I believe what she wants most as a magus are magical items.",
		"h Oh, that sounds rather convincing. But let's check if it's correct. Miss Mol-Undi, what is your answer?",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r My answer was...",
		"r Chocolate!",
		"s Ah, it was that!?",
		"h Oof, looks like Seigi's guess was wrong. Unfortunately, they will not be getting a point, this time.",
		"hide r",
		"show Pink bottom center with fadeIn",
		"s Sorry, it looks like I got it wrong.",
		"r Don't worry, we've just started. Let's get the next one.",
		"hide Pink",
		"jump Q1_Red"
	],

	"Q1_Red": [
		"h Next up is Team Red Dragon. Ben, what is your guess?",
		"show b IMG bottom center with fadeIn",
		"b Uhhh...",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 2 || storage.mode.team == 5;
			},
			"True": "jump Q1_Red_Choice",
			"False": "b Q-question. Does the present have to be a physical object?"
		}},
		"h Nope, it can be anything that's a gift.",
		"b ... well, I think I know the answer. But I really don't want to say it...",
		"h I can't give you the point if you don't say it out loud.",
		"b Dammit, fine. The thing Yingying wants the most from me right now is...",
		"b ... sex.",
		"h Oya, oya? How lewd. But is it the correct answer?",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y ...",
		"y Yes, my answer was indeed 'Consummation of marriage'...",
		"h Correct! Team Red Dragon gets their first point. Congratulations!",
		"hide y",
		"show Red bottom center with fadeIn",
		"b U-umm...",
		"y I-it's okay, you don't have to say anything. I understand.",
		"y Let's just keep going.",
		"hide Red",
		function () {
			storage.score.red += 1;
			return true;
		},
		"jump Q1_Black"

	],

	"Q1_Red_Choice": [
		{"Choice":{
			"Dialog": "n What present does Yingying want?",
			"Pink":{
				"Text": "Textbooks",
				"Do": "jump Q1_Red_1"
			},
			"Red":{
				"Text": "Sex",
				"Do": "jump Q1_Red_2"
			},
			"Black":{
				"Text": "Anything",
				"Do": "jump Q1_Red_3"
			}
		}}
	],

	"Q1_Red_1": [
		"b Okay, I think I have an idea.",
		"b The present Yingying would want the most is 'textbooks'. I remember her telling me she likes reading them.",
		"h I see, so it's something you've discussed before. But let's see if it's correct. Miss Yao, what is your answer?",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y ...",
		"y Sorry, dear. My answer was 'Consummation of Marriage'",
		"b ... I should've known.",
		"h Oof, looks like Ben's guess was wrong. Unfortunately, they will not be getting a point, this time.",
		"hide y",
		"show Red bottom center with fadeIn",
		"b U-umm...",
		"y I-it's okay, you don't have to say anything. I understand.",
		"y Let's just keep going.",
		"hide Red",
		"jump Q1_Black"
	],

	"Q1_Red_3": [
		"b Okay, I think I have an idea.",
		"b Y'see, Yingying's really kind. She's the type to be grateful for anything.",
		"b Thus her answer would be 'anything'!",
		"h An interesting rationale. But is it correct? Miss Yao?",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y ...",
		"y Sorry, dear. My answer was 'Consummation of Marriage'",
		"b ... I should've known.",
		"h Oof, looks like Ben's guess was wrong. Unfortunately, they will not be getting a point, this time.",
		"hide y",
		"show Red bottom center with fadeIn",
		"b U-umm...",
		"y I-it's okay, you don't have to say anything. I understand.",
		"y Let's just keep going.",
		"hide Red",
		"jump Q1_Black"
	],

	"Q1_Red_2": [
		"b Q-question. Does the present have to be a physical object?",
		"h Nope, it can be anything that's a gift.",
		"b ... well, I think I know the answer. But I really don't want to say it...",
		"h I can't give you the point if you don't say it out loud.",
		"b Dammit, fine. The thing Yingying wants the most from me right now is...",
		"b ... sex.",
		"h Oya, oya? How lewd. But is it the correct answer?",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y ...",
		"y Yes, my answer was indeed 'Consummation of marriage'...",
		"h Correct! Team Red Dragon gets their first point. Congratulations!",
		"hide y",
		"show Red bottom center with fadeIn",
		"b U-umm...",
		"y I-it's okay, you don't have to say anything. I understand.",
		"y Let's just keep going.",
		"hide Red",
		function () {
			storage.score.red += 1;
			return true;
		},
		"jump Q1_Black"
	],

	"Q1_Black": [
		"h Up next is Team Black Thunder. Your guess, Mr. Helmingham?",
		"show e IMG bottom center with fadeIn",
		"e ...",
		"e ... ... ...",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 3 || storage.mode.team == 5;
			},
			"True": "jump Q1_Black_Choice",
			"False": "e Perhaps, the answer is something like... rare relics?"
		}},
		"e S-sorry, I'm not really sure. But I think Candis might like something like an ancient fossil or uncovered artifact.",
		"h Well, that's a very a magus-like answer. Shall we confirm it?",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'Anything he chooses for me would make me happy'.",
		"e Ah... So it was that kind of thing.",
		"h Oof, that's certainly a difficult answer to guess.",
		"l That's very Canda-like though.",
		"hide c",
		"show Green bottom center with fadeIn",
		"e ... sorry, I got it wrong.",
		"c No, no, it's my fault for having a difficult answer. I'm sorry.",
		"e No, no, no, those are your true feelings, right? I should've thought about things more from your perspective.",
		"c No, no, no, no...",
		"h Okay, this is going nowhere, so I'm cutting it short. Moving on...",
		"hide Green",
		"jump Q1_White"
	],

	"Q1_Black_Choice": [
		{"Choice":{
			"Dialog": "n What present does Canda want?",
			"Pink":{
				"Text": "Poem",
				"Do": "jump Q1_Black_1"
			},
			"Red":{
				"Text": "Relics",
				"Do": "jump Q1_Black_2"
			},
			"Black":{
				"Text": "Anything",
				"Do": "jump Q1_Black_3"
			}
		}}
	],

	"Q1_Black_1": [
		"e Perhaps, the answer is something like... a poem?",
		"e S-sorry, I'm not really sure. But I think that kind of stuff is rather romantic?",
		"h Well, well, let's find out. Miss Etherauletta?",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'Anything he chooses for me would make me happy'.",
		"e Ah... So it was that kind of thing.",
		"h Oof, that's certainly a difficult answer to guess.",
		"l That's very Canda-like though.",
		"hide c",
		"show Green bottom center with fadeIn",
		"e ... sorry, I got it wrong.",
		"c No, no, it's my fault for having a difficult answer. I'm sorry.",
		"e No, no, no, those are your true feelings, right? I should've thought about things more from your perspective.",
		"c No, no, no, no...",
		"h Okay, this is going nowhere, so I'm cutting it short. Moving on...",
		"hide Green",
		"jump Q1_White"
	],

	"Q1_Black_2": [
		"e Perhaps, the answer is something like... rare relics?",
		"e S-sorry, I'm not really sure. But I think Candis might like something like an ancient fossil or uncovered artifact.",
		"h Well, that's a very a magus-like answer. Shall we confirm it?",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'Anything he chooses for me would make me happy'.",
		"e Ah... So it was that kind of thing.",
		"h Oof, that's certainly a difficult answer to guess.",
		"l That's very Canda-like though.",
		"hide c",
		"show Green bottom center with fadeIn",
		"e ... sorry, I got it wrong.",
		"c No, no, it's my fault for having a difficult answer. I'm sorry.",
		"e No, no, no, those are your true feelings, right? I should've thought about things more from your perspective.",
		"c No, no, no, no...",
		"h Okay, this is going nowhere, so I'm cutting it short. Moving on...",
		"hide Green",
		"jump Q1_White"
	],

	"Q1_Black_3": [
		"e Thinking about this from Candis's point of view... I think she might actually give an answer such as 'anything'.",
		"e Yes, I believe she's someone who would be grateful no matter what you were to gift her.",
		"h Oooh, what a confident answer? Shall we confirm it? Miss Etherauletta?",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'Anything he chooses for me would make me happy'.",
		"e Ah, I was right.",
		"h Oho, it seems that Mr. Helmingham understands Miss Etherualetta rather well.",
		"l Mn, it's a very Canda-like answer. He did well.",
		"hide c",
		"show Green bottom center with fadeIn",
		"e Umm... are you really sure that any type of gift would be okay?",
		"c Yes. To begin with, your friendship is already the greatest gift.",
		"h Well, then, since they got it right, Team Black Thunder gets a point! Now let's go to the next team.",
		"hide Green",
		function () {
			storage.score.black += 1;
			return true;
		},
		"jump Q1_White"
	],

	"Q1_White": [
		"show a IMG bottom center with fadeIn",
		"h Well, Mr. Penrith? Do you have any idea what your partner wants?",
		"a Well actually... to be honest, I'm not very knowledgable about the sort of gift a girl might like.",
		"a However, there was an opportunity not too long ago where I had to give Shiori a gift. So I think I have a good idea about what she might like.",
		"h That sounds very confident. So then, what do you think the answer is?",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 4 || storage.mode.team == 5;
			},
			"True": "jump Q1_White_Choice",
			"False": "a I believe the answer is 'jewellery'."
		}},
		"a I gave her some for her birthday last year, and she seemed happy, so I think that should be the correct answer.",
		"h I see. Well let's put your theory to test. Miss Mori?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Well, right now, the thing I want Arwyn to give me the most is...",
		"x A ring.",
		"h That certainly counts as jewellery, so Team White Winter gets a point!",
		"hide x",
		"show White bottom center with fadeIn",
		"a Hm... are you sure you want another ring? You're still wearing the one I bought you, right?",
		"x Yes, I wouldn't mind getting another one from you.",
		"x Though... this time, I hope to receive a ring with more 'meaning'.",
		"a ??? I don't really get it, but okay. I'll keep that in mind.",
		"l ... d-does he not understand what she meant? How dense is he?",
		"h The full ball and chain, huh... I'll give him my condolences beforehand. Rest in peace.",
		"hide White",
		"jump Q2"
	],

	"Q1_White_Choice": [
		{"Choice":{
			"Dialog": "n What present does Shiori want?",
			"Pink":{
				"Text": "Weapons",
				"Do": "jump Q1_White_1"
			},
			"Red":{
				"Text": "Jewellery",
				"Do": "jump Q1_White_2"
			},
			"Black":{
				"Text": "Bible",
				"Do": "jump Q1_White_3"
			}
		}}
	],

	"Q1_White_1": [
		"a I believe the answer is 'weaponry'.",
		"a From what I know, Shiori is a very practical person, so I believe she would prefer something she can use in her work over unnecessary gifts.",
		"a Since she's an assassin, I think that the gift she would like most is some sort of weapon she can use.",
		"h I see, that's certainly a unique answer. Shall we confirm it? Miss Mori?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Well, right now, the thing I want Arwyn to give me the most is...",
		"x A ring.",
		"h Ouch, it seems that Mr. Penrith's assessment was off. The thing Shiori wants is not weaponry, but jewellery.",
		"x While I do like weapons, I wouldn't want to get one as a gift. I try to keep my work and private lives seperate.",
		"hide x",
		"show White bottom center with fadeIn",
		"a Hm, that's surprising. I suppose I was mistaken",
		"a ... though, are you sure you want another ring? You're still wearing the one I bought you, right?",
		"x Yes, I wouldn't mind getting another one from you.",
		"x Though... this time, I hope to receive a ring with more 'meaning'.",
		"a ??? I don't really get it, but okay. I'll keep that in mind.",
		"l ... d-does he not understand what she meant? How dense is he?",
		"h The full ball and chain, huh... I'll give him my condolences beforehand. Rest in peace.",
		"hide White",
		"jump Q2"
	],

	"Q1_White_3": [
		"a I believe the answer is 'a bible'.",
		"a From what I know, Shiori is a very religious person, so I believe that the present she wants has to be something religious as well.",
		"h I see, that's certainly a unique answer. Shall we confirm it? Miss Mori?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Well, right now, the thing I want Arwyn to give me the most is...",
		"x A ring.",
		"h Ouch, it seems that Mr. Penrith's assessment was off. The thing Shiori wants has nothing to do with her religion.",
		"x Yes. While my faith is important to me, I'd rather a gift be more personal rather than otherworldly.",
		"hide x",
		"show White bottom center with fadeIn",
		"a Hm, that's surprising. I suppose I was mistaken",
		"a ... though, are you sure you want another ring? You're still wearing the one I bought you, right?",
		"x Yes, I wouldn't mind getting another one from you.",
		"x Though... this time, I hope to receive a ring with more 'meaning'.",
		"a ??? I don't really get it, but okay. I'll keep that in mind.",
		"l ... d-does he not understand what she meant? How dense is he?",
		"h The full ball and chain, huh... I'll give him my condolences beforehand. Rest in peace.",
		"hide White",
		"jump Q2"
	],

	"Q1_White_2": [
		"a I believe the answer is 'jewellery'.",
		"a I gave her some for her birthday last year, and she seemed happy, so I think that should be the correct answer.",
		"h I see. Well let's put your theory to test. Miss Mori?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Well, right now, the thing I want Arwyn to give me the most is...",
		"x A ring.",
		"h That certainly counts as jewellery, so Team White Winter gets a point!",
		"hide x",
		"show White bottom center with fadeIn",
		"a Hm... are you sure you want another ring? You're still wearing the one I bought you, right?",
		"x Yes, I wouldn't mind getting another one from you.",
		"x Though... this time, I hope to receive a ring with more 'meaning'.",
		"a ??? I don't really get it, but okay. I'll keep that in mind.",
		"l ... d-does he not understand what she meant? How dense is he?",
		"h The full ball and chain, huh... I'll give him my condolences beforehand. Rest in peace.",
		"hide White",
		function () {
			storage.score.white += 1;
			return true;
		},
		"jump Q2"
	],

	"Q2": [
		"show Hosts with fadeIn",
		"h Moving along, let's not waste anytime as we head into Question 2. Will you do the honors this time, Miss Elliwyn?",
		"l Ah, sure. Let's see, the second question is...",
		"l 'If the two of you are going on a date, where would you like to go?'",
		"h That's right. Now then, ladies, please submit your ideal date locations.",
		"hide Hosts",
		"n ...",
		"show Hosts with fadeIn",
		"h Alright, all the answers have been submitted. Once again, let's start with Team Pink Chocolate.",
		"hide Hosts",
		"show s IMG bottom center with fadeInRight",
		"jump Q2_Pink",
	],

	"Q2_Pink": [
		"s Hmm, this one's a bit harder...",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 1 || storage.mode.team == 5;
			},
			"True": "jump Q2_Pink_Choice",
			"False": "s Personally, if I were to take Risa on a date... I guess I'd bring her to the local park."
		}},
		"s After that, I guess I'd take her to the movies and then we can dine together in the evening. A simple restaurant that's not too fancy, not too shabby.",
		"s Those would be my date plans.",
		"h Well, they seem pretty solid to me, but let's see what Miss Mol-Undi thinks.",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r Well, my answer was...",
		"r 'Something casual'. Nothing too overbearing.",
		"r I'd also like it if we could make a whole day out of it.",
		"h I see, I see. Well, I suppose Seigi's plans are rather casual. What do you think Miss Elliwyn?",
		"l Hmm... I'd say it counts. Let's give them the point.",
		"h Alrighty then. Team Pink Chocolate gets a point!",
		"hide r",
		function () {
			storage.score.pink += 1;
			return true;
		},
		"jump Q2_Red"
	],

	"Q2_Pink_Choice": [
		{"Choice":{
			"Dialog": "n Where would Risa like to go on a date?",
			"Pink":{
				"Text": "Fancy Restaurant",
				"Do": "jump Q2_Pink_1"
			},
			"Red":{
				"Text": "Park",
				"Do": "jump Q2_Pink_2"
			},
			"Black":{
				"Text": "Overseas",
				"Do": "jump Q2_Pink_3"
			}
		}}
	],

	"Q2_Pink_1": [
		"s I think a high-end restaurant might be a good place to go.",
		"s Somewhere good and also romantic. A night-time view of the cityscape would be good too.",
		"h Sounds very romantic. Let's see what Miss Mol-Undi thinks, though.",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r Well, my answer was...",
		"r 'Something casual'. Nothing too overbearing.",
		"r I'd also like it if we could make a whole day out of it.",
		"s Ah, shoot.",
		"h I see, I see. Certainly, a fancy restaurante can be a bit overbearing to some. I think we'll have to call this one a wrong answer.",
		"hide r",
		"jump Q2_Red"
	],

	"Q2_Pink_3": [
		"s Perhaps a trip overseas might be good.",
		"s Go on a retreat to a beautiful country and take in the sights. Something very memorable.",
		"h I see, that is rather amazing in a sense. Let's see what Miss Mol-Undi thinks, though.",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r Well, my answer was...",
		"r 'Something casual'. Nothing too overbearing.",
		"r I'd also like it if we could make a whole day out of it.",
		"s Ah, shoot.",
		"h I see, I see. Certainly, an overseas is a bit much to be considered a date. I think we'll have to call this one a wrong answer.",
		"hide r",
		"jump Q2_Red"
	],

	"Q2_Pink_2": [
		"s Personally, if I were to take Risa on a date... I guess I'd bring her to the local park.",
		"s After that, I guess I'd take her to the movies and then we can dine together in the evening. A simple restaurant that's not too fancy, not too shabby.",
		"s Those would be my date plans.",
		"h Well, they seem pretty solid to me, but let's see what Miss Mol-Undi thinks.",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r Well, my answer was...",
		"r 'Something casual'. Nothing too overbearing.",
		"r I'd also like it if we could make a whole day out of it.",
		"h I see, I see. Well, I suppose Seigi's plans are rather casual. What do you think Miss Elliwyn?",
		"l Hmm... I'd say it counts. Let's give them the point.",
		"h Alrighty then. Team Pink Chocolate gets a point!",
		"hide r",
		function () {
			storage.score.pink += 1;
			return true;
		},
		"jump Q2_Red"
	],

	"Q2_Red": [
		"show b IMG bottom center with fadeIn",
		"h What do you think, Ben? Any idea where your wife might want to go?",
		"b Honestly, I have no idea.",
		"b Uhmmm.... maybe... Okay, I have an answer.",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 2 || storage.mode.team == 5;
			},
			"True": "jump Q2_Red_Choice",
			"False": "b The place Yingying wants to go to most is her hometown."
		}},
		"h You mean where she was born?",
		"b Yes. I believe that she would like to spend time with her family above all else.",
		"h Well, that's a very considerate answer, but is it correct? Let's find out.",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y Well...",
		"y Sorry. My answer was 'a memorable and romantic location'.",
		"y It's true that my hometown is where I'd like to visit the most, but not for a date.",
		"b Ah, right. Shoot, I got confused.",
		"h Too bad. It was a good answer, but for the wrong question.",
		"hide y",
		"jump Q2_Black"

	],

	"Q2_Red_Choice": [
		{"Choice":{
			"Dialog": "n Where would Yingying like to go on a date?",
			"Pink":{
				"Text": "Hometown",
				"Do": "jump Q2_Red_1"
			},
			"Red":{
				"Text": "Training Grounds",
				"Do": "jump Q2_Red_2"
			},
			"Black":{
				"Text": "Eiffel Tower",
				"Do": "jump Q2_Red_3"
			}
		}}
	],

	"Q2_Red_1": [
		"b The place Yingying wants to go to most is her hometown.",
		"h You mean where she was born?",
		"b Yes. I believe that she would like to spend time with her family above all else.",
		"h Well, that's a very considerate answer, but is it correct? Let's find out.",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y Well...",
		"y Sorry. My answer was 'a memorable and romantic location'.",
		"y It's true that my hometown is where I'd like to visit the most, but not for a date.",
		"b Ah, right. Shoot, I got confused.",
		"h Too bad. It was a good answer, but for the wrong question.",
		"hide y",
		"jump Q2_Black"
	],

	"Q2_Red_2": [
		"b The best place for our date is the Training Grounds.",
		"h You mean a place where you can train? Like a gym?",
		"b Yes. That's where our first date was and she was the one who chose the location, so I believe that it must be a place that she likes a lot.",
		"h Well, that's a very logical answer, but is it correct? Let's find out.",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y Well...",
		"y Sorry. My answer was 'a memorable and romantic location'.",
		"y It's true that we went to the training grounds last time, but if we're talking about my ideal... I think I'd prefer somewhere more romantic.",
		"b Ah, is that so? Sorry, I messed up.",
		"h Too bad. It was a good answer, but not quite on mark.",
		"hide y",
		"jump Q2_Black"
	],

	"Q2_Red_3": [
		"b The ideal place for our date would be... the Eiffel Tower!",
		"h Eh? You mean the one in France?",
		"b That's right. They say it's a really romantic place, right? This is just hypotheticals, so I might as well choose the most grandiose option.",
		"h Well... that's a very bold answer, but is it correct? Let's find out.",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y Well...",
		"y Yes, my answer was 'a memorable and romantic location'.",
		"y I think that the type of date I'd like most is one that I'd remember for the rest of my life. I'm not sure what this Eiffel Tower is like, but if it's as romantic as they say, I'd love to see it.",
		"h I see. Well, I'd say that's a pretty clear correct answer. Team Red Dragon gets a point!",
		"hide y",
		function () {
			storage.score.red += 1;
			return true;
		},
		"jump Q2_Black"
	],

	"Q2_Black": [
		"show e IMG bottom center with fadeIn",
		"h Alright, then it's your turn, Mr. Helmingham. Feeling more confident this time?",
		"e ... ... ...",
		"h Okay, that more or less answers my question. Um, any ideas?",
		"e Uhh... I think that maybe...",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 3 || storage.mode.team == 5;
			},
			"True": "jump Q2_Black_Choice",
			"False": "e Judging by last time's answer, perhaps this time, the answer is also 'anywhere is fine'?"
		}},
		"h I see. Using previous data to support your answer. How analytical. But are your calculations correct?",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'Anywhere he brings me would make me happy'.",
		"h As expected, it was a very pure answer.",
		"l She's so bright, it's blinding!",
		"h A-anyways, it seems that Ernest's answer was spot on. Team Black Thunder gets a point.",
		"hide c",
		function () {
			storage.score.black += 1;
			return true;
		},
		"jump Q2_White"
	],

	"Q2_Black_Choice": [
		{"Choice":{
			"Dialog": "n Where would Canda like to go on a date?",
			"Pink":{
				"Text": "Library",
				"Do": "jump Q2_Black_1"
			},
			"Red":{
				"Text": "Museum",
				"Do": "jump Q2_Black_2"
			},
			"Black":{
				"Text": "Anywhere",
				"Do": "jump Q2_Black_3"
			}
		}}
	],

	"Q2_Black_1": [
		"e Maybe the library? Somewhere we can talk freely and get to know each other better.",
		"h Eh, don't you usually not talk in libraries?",
		"e Ah, that's right. Sorry, I made a mistake. Still, I think a library would be good...",
		"h Well, alright. Let's see what Miss Etherualleta thinks about it then.",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'Anywhere he brings me would make me happy'.",
		"e Ah, that answer again. I should've known.",
		"h As expected, it was a very pure answer.",
		"l She's so bright, it's blinding!",
		"h A-anyways, it seems that Ernest's answer was wrong. Too bad. Let's hope they get it right next time.",
		"hide c",
		"jump Q2_White"
	],

	"Q2_Black_2": [
		"e Maybe the Museum? I remember seeing her spend a lot of time there, so I think she might like it a lot.",
		"h Hm, hmm, certainly, it's an uncommon choice, but not unheard of as a date location. Let's see what Miss Etherauletta herself thinks about it.",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'Anywhere he brings me would make me happy'.",
		"e Ah, that answer again. I should've known.",
		"h As expected, it was a very pure answer.",
		"l She's so bright, it's blinding!",
		"h A-anyways, it seems that Ernest's answer was wrong. Too bad. Let's hope they get it right next time.",
		"hide c",
		"jump Q2_White"
	],

	"Q2_Black_3": [
		"e Judging by last time's answer, perhaps this time, the answer is also 'anywhere is fine'?",
		"h I see. Using previous data to support your answer. How analytical. But are your calculations correct?",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'Anywhere he brings me would make me happy'.",
		"h As expected, it was a very pure answer.",
		"l She's so bright, it's blinding!",
		"h A-anyways, it seems that Ernest's answer was spot on. Team Black Thunder gets a point.",
		"hide c",
		function () {
			storage.score.black += 1;
			return true;
		},
		"jump Q2_White"
	],

	"Q2_White": [
		"show a IMG bottom center with fadeIn",
		"h Finally, we're back to you, Mr. Penrith. What do you think about this question?",
		"a I'm actually quite confident about this one.",
		"h Ooooh, really? How surprising. Why do you say so?",
		"a Well, Shiori and I occassionally talk about hobbies and the like, so I believe I have a decent idea of where she'd like to go.",
		"h I see, how reliable. Well then, let's get right to it? Where do you plan to take Miss Mori on a date?",
		"a ... I'm not really planning anything, but well...",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 4 || storage.mode.team == 5;
			},
			"True": "jump Q2_White_Choice",
			"False": "a It should be the cinema, right?"
		}},
		"a I'm certain that Shiori enjoys watching movies, so I think that's where she'd like to go.", 
		"h Well, Miss Mori? Is he correct?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Well, what I'd like to do most for a date is...",
		"x Shopping.",
		"x It's true that I like watching movies, but not really for a date. I'd actually prefer something more interactive. Something like checking out shops or even going to a nice restaurant to talk is what I'd like.",
		"h Oof, so much for Arwyn's confidence.",
		"hide x",
		"show White bottom center with fadeIn",
		"a I see. Sorry, I made a mistake.",
		"x No, it's not a problem. Let's aim for the next question.",
		"x Oh, but I have been thinking of buying a new swimsuit lately. I'd like your opinion, so come with me sometime.",
		"a ... You're joking right?",
		"x Hehe, I wonder~",
		"hide White", 
		"jump Q3"
	],

	"Q2_White_Choice": [
		{"Choice":{
			"Dialog": "n Where would Shiori like to go on a date?",
			"Pink":{
				"Text": "Shopping",
				"Do": "jump Q2_White_1"
			},
			"Red":{
				"Text": "Movies",
				"Do": "jump Q2_White_2"
			},
			"Black":{
				"Text": "Church",
				"Do": "jump Q2_White_3"
			}
		}}
	],

	"Q2_White_1": [
		"a I think she'd be happy if we went shopping together. She does seem like she enjoys window-shopping in particular.",
		"h Well, Miss Mori? Is he correct?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Well, what I'd like to do most for a date is...",
		"x Shopping. Yes, he's exactly correct!",
		"h Huh, it seems that his confidence was well-earned. Team White Winter gets a point.",
		"hide x",
		"show White bottom center with fadeIn",
		"x Good job, sir. I knew you would get it right!",
		"a Yes, I had a feeling that would be the correct answer.",
		"x Oh, speaking of which, I have been thinking of buying a new swimsuit lately. I'd like your opinion, so come with me sometime.",
		"a ... You're joking right?",
		"x Hehe, I wonder~",
		"hide White", 
		function () {
			storage.score.white += 1;
			return true;
		},
		"jump Q3"
	],

	"Q2_White_2": [
		"a It should be the cinema, right?",
		"a I'm certain that Shiori enjoys watching movies, so I think that's where she'd like to go.", 
		"h Well, Miss Mori? Is he correct?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Well, what I'd like to do most for a date is...",
		"x Shopping.",
		"x It's true that I like watching movies, but not really for a date. I'd actually prefer something more interactive. Something like checking out shops or even going to a nice restaurant to talk is what I'd like.",
		"h Oof, so much for Arwyn's confidence.",
		"hide x",
		"show White bottom center with fadeIn",
		"a I see. Sorry, I made a mistake.",
		"x No, it's not a problem. Let's aim for the next question.",
		"x Oh, but I have been thinking of buying a new swimsuit lately. I'd like your opinion, so come with me sometime.",
		"a ... You're joking right?",
		"x Hehe, I wonder~",
		"hide White", 
		"jump Q3"
	],

	"Q2_White_3": [
		"a It should be the Church, right?",
		"a I think that for someone like Shiori, the house of the Lord is the place she finds most comfortable.", 
		"h Well, Miss Mori? Is he correct?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Well, what I'd like to do most for a date is...",
		"x Shopping.",
		"x My faith aside, I don't really think the house of the Lord is the most suitable place for... intimate affairs.",
		"h Oof, so much for Arwyn's confidence.",
		"hide x",
		"show White bottom center with fadeIn",
		"a I see. Sorry, I made a mistake.",
		"x No, it's not a problem. Let's aim for the next question.",
		"x Oh, but I have been thinking of buying a new swimsuit lately. I'd like your opinion, so come with me sometime.",
		"a ... You're joking right?",
		"x Hehe, I wonder~",
		"hide White", 
		"jump Q3"
	],

	"Q3": [
		"show Hosts bottom center with fadeIn",
		"h Now then, we're already at the last question for this round. Things have been pretty tense so far, but let's see how the final question changes things. The final question is...",
		"h 'What is your type?' That is to say, what type of person do you like the most?",
		"ev Ehhhhh???",
		"s That's a rather... difficult question.",
		"h Yes, well, it wouldn't be any good if it were easy, would it?",
		"a Pardon. Can I ask what specifically you mean by 'like'? Is this a general term for compatability or romantic affection?",
		"h That's something up to your partner to interpret and for you to guess.",
		"a ...",
		"h Now then, if there are no other questions, let's move right along and have the ladies submit their answers.",
		"hide Hosts",
		"n ...",
		"jump Q3_Pink"
	],

	"Q3_Pink": [
		"show s IMG bottom center with fadeIn",
		"h Once again, I'd like to start with you, Mr. Nomikata. What do you think?",
		"s It's rather rough having the least amout of time to think, you know.",
		"h Consider it a handicap as the veteran. Well?",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 1 || storage.mode.team == 5;
			},
			"True": "jump Q3_Pink_Choice",
			"False": "s I think that Risa's type is... a charismatic gentleman. Someone suave and stylish."
		}},
		"h That's basically the same as saying yourself, isn't it?",
		"s Well, y'know.",
		"h Shall we find out then? Miss Mol-Undi?",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r Well, my answer was...",
		"r 'Someone who's kind, honest, and determined'.",
		"s Hmmm, I see...",
		"h Unfortunately, it seems that you were mistaken, Mr. Nomikata.",
		"s Well, I guess it can't be helped.",
		"hide r",
		"jump Q3_Red"

	],

	"Q3_Pink_Choice": [
		{"Choice":{
			"Dialog": "n What is Risa's type?",
			"Pink":{
				"Text": "Kind, honest, and determined",
				"Do": "jump Q3_Pink_1"
			},
			"Red":{
				"Text": "Intelligent, resourceful, and wise",
				"Do": "jump Q3_Pink_2"
			},
			"Black":{
				"Text": "Charming, smooth, and gentlemanly",
				"Do": "jump Q3_Pink_3"
			}
		}}
	],

	"Q3_Pink_1": [
		"s I think that Risa's type is... an earnest and caring person. Someone who works hard and looks after others.",
		"h I see, certainly that sounds rather appealing, but is it to her? Let's find out. Miss Mol-Undi?",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r Well, my answer was...",
		"r 'Someone who's kind, honest, and determined'.",
		"h I see. I'd say that more or less falls into line with what Seigi said.",
		"h Then, Team Pink Chocolate gets a point!",
		function () {
			storage.score.pink += 1;
			return true;
		},
		"hide r",
		"jump Q3_Red"
	],

	"Q3_Pink_2": [
		"s I think that Risa's type is... a smart and cunning person. Someone who's greatest asset is their intellect and wisdom.",
		"h I see, certainly that sounds rather appealing, but is it to her? Let's find out. Miss Mol-Undi?",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r Well, my answer was...",
		"r 'Someone who's kind, honest, and determined'.",
		"s Hmmm, I see...",
		"h Unfortunately, it seems that you were mistaken, Mr. Nomikata.",
		"s Well, I guess it can't be helped.",
		"hide r",
		"jump Q3_Red"
	],

	"Q3_Pink_3": [
		"s I think that Risa's type is... a charismatic gentleman. Someone suave and stylish.",
		"h That's basically the same as saying yourself, isn't it?",
		"s Well, y'know.",
		"h Shall we find out then? Miss Mol-Undi?",
		"hide s",
		"show r IMG bottom center with fadeIn",
		"r Well, my answer was...",
		"r 'Someone who's kind, honest, and determined'.",
		"s Hmmm, I see...",
		"h Unfortunately, it seems that you were mistaken, Mr. Nomikata.",
		"s Well, I guess it can't be helped.",
		"hide r",
		"jump Q3_Red"
	],

	"Q3_Red": [
		"show b IMG center bottom with fadeIn",
		"h And you, Ben? Any idea what your wife likes?",
		"b Do you have to ask that every time? Of course, I don't!",
		"b Uhhh.... let's see...",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 2 || storage.mode.team == 5;
			},
			"True": "jump Q3_Red_Choice",
			"False": "b I'm gonna guess that the type of person Yingying likes the most... is a loyal person!"
		}},
		"h Oh? And what makes you say that?",
		"b If you were to question what quality Yingying appreciates the most, I believe that it would have to be loyalty and obedience. Thus, I think that her type is something along those lines.",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y Well...",
		"y Sorry. My answer was 'a considerate person'.",
		"y Part of the reason I like you is... because you're always thinking about other people...",
		"b A-ah, I-I see... That's... good to know.",
		"h Um, as sweet as this is, unfortunately, Ben got the wrong answer. Sorry, better luck next time.",
		"b R-right.",
		"hide y",
		"jump Q3_Black"
	],

	"Q3_Red_Choice": [
		{"Choice":{
			"Dialog": "n What is Yingying's type?",
			"Pink":{
				"Text": "An honest person",
				"Do": "jump Q3_Red_1"
			},
			"Red":{
				"Text": "A considerate person",
				"Do": "jump Q3_Red_2"
			},
			"Black":{
				"Text": "A loyal person",
				"Do": "jump Q3_Red_3"
			}
		}}
	],

	"Q3_Red_1": [
		"b I'm gonna guess that the type of person Yingying likes the most... is an honest person!",
		"h Oh? And what makes you say that?",
		"b Well, lately, the lesson that honesty is the best policy has been getting hammered into my head a lot, so I feel like that might be the correct answer.",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y Well...",
		"y Sorry. My answer was 'a considerate person'.",
		"y Part of the reason I like you is... because you're always thinking about other people...",
		"b A-ah, I-I see... That's... good to know.",
		"h Um, as sweet as this is, unfortunately, Ben got the wrong answer. Sorry, better luck next time.",
		"b R-right.",
		"hide y",
		"jump Q3_Black"
	],

	"Q3_Red_2": [
		"b I'm gonna guess that the type of person Yingying likes the most... is a considerate person!",
		"h Oh? And what makes you say that?",
		"b Well, I personally think that Yingying's a very caring and thoughtful person... so I thought maybe she'd like someone similar to herself.",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y Well...",
		"y I'm not sure about the reasoning, but my answer was 'a considerate person'.",
		"b Yosha! See that, that's my true ability!",
		"h Oooh, congratulations!",
		"y Um, y'see... part of the reason I like you is... because you're always thinking about other people...",
		"b Eh? A-ah, I-I see... That's... good to know.",
		"h Oh my, that's a quick change of tone.",
		"b S-shut up!",
		function () {
			storage.score.red += 1;
			return true;
		},
		"hide y",
		"jump Q3_Black"
	],

	"Q3_Red_3": [
		"b I'm gonna guess that the type of person Yingying likes the most... is a loyal person!",
		"h Oh? And what makes you say that?",
		"b If you were to question what quality Yingying appreciates the most, I believe that it would have to be loyalty and obedience. Thus, I think that her type is something along those lines.",
		"hide b",
		"show y IMG bottom center with fadeIn",
		"y Well...",
		"y Sorry. My answer was 'a considerate person'.",
		"y Part of the reason I like you is... because you're always thinking about other people...",
		"b A-ah, I-I see... That's... good to know.",
		"h Um, as sweet as this is, unfortunately, Ben got the wrong answer. Sorry, better luck next time.",
		"b R-right.",
		"hide y",
		"jump Q3_Black"
	],

	"Q3_Black": [
		"show e IMG bottom center with fadeIn",
		"h Wel, well, moving right along, we come back to Team Black Thunder. What do you think is the answer, Ernest?",
		"e ... Yes, well, after a lot of thoughts, I've come to the conclusion...",
		"e That I don't even have the slightest semblance of a clue.",
		"e ... do I get like a hint or a lifeline I can use?",
		"h No such thing is available, unfortunately. Please do your best on your own.",
		"e Ahhhh, then, um...",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 2 || storage.mode.team == 5;
			},
			"True": "jump Q3_Black_Choice",
			"False": "e Maybe an honest person?"
		}},
		"h You don't sound very confident, but let's check. Miss Etherauletta?",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'An honest person'.",
		"c There aren't really any type of people I don't dislike but... I suppose I might like people who are true to themselves.",
		"e I see... I'll keep that in mind...",
		"h Well, it seems like he accidently got the right answer. What do you think about this, Miss Elliwyn?",
		"l NO COMMENT",
		"hide c",
		function () {
			storage.score.black += 1;
			return true;
		},
		"jump Q3_White"
	],

	"Q3_Black_Choice": [
		{"Choice":{
			"Dialog": "n What is Canda's type?",
			"Pink":{
				"Text": "An energetic person",
				"Do": "jump Q3_Black_1"
			},
			"Red":{
				"Text": "An honest person",
				"Do": "jump Q3_Black_2"
			},
			"Black":{
				"Text": "Anyone",
				"Do": "jump Q3_Black_3"
			}
		}}
	],

	"Q3_Black_1": [
		"e Maybe an energetic person?",
		"h You don't sound very confident, but let's check. Miss Etherauletta?",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'An honest person'.",
		"c There aren't really any type of people I don't dislike but... I suppose I might like people who are true to themselves.",
		"e I see... I'll keep that in mind...",
		"h Hmm, he got the wrong answer, yet he still sounds happy. What do you think about this, Miss Elliwyn?",
		"l NO COMMENT",
		"hide c",
		"jump Q3_White"
	],

	"Q3_Black_2": [
		"e Maybe an honest person?",
		"h You don't sound very confident, but let's check. Miss Etherauletta?",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'An honest person'.",
		"c There aren't really any type of people I don't dislike but... I suppose I might like people who are true to themselves.",
		"e I see... I'll keep that in mind...",
		"h Well, it seems like he accidently got the right answer. What do you think about this, Miss Elliwyn?",
		"l NO COMMENT",
		"hide c",
		function () {
			storage.score.black += 1;
			return true;
		},
		"jump Q3_White"
	],

	"Q3_Black_3": [
		"e Maybe... anyone? If we're going with the same pattern as the previous answers...",
		"h You don't sound very confident, but let's check. Miss Etherauletta?",
		"hide e",
		"show c IMG bottom center with fadeIn",
		"c Um... my answer was...",
		"c 'An honest person'.",
		"c There aren't really any type of people I don't dislike but... I suppose I might like people who are true to themselves.",
		"e I see... I'll keep that in mind...",
		"h Hmm, he got the wrong answer, yet he still sounds happy. What do you think about this, Miss Elliwyn?",
		"l NO COMMENT",
		"hide c",
		"jump Q3_White"
	],

	"Q3_White": [
		"h Well, then, let's finish off with our final answer of the round. Arwyn Penrith, what do you have for us today?",
		"a Well, I personally find this question rather vague and intrusive. But, if it's Shiori, then the answer is most likely...",
		{"Conditional": {
			"Condition": function(){
				return storage.mode.team == 4 || storage.mode.team == 5;
			},
			"True": "jump Q3_White_Choice",
			"False": "a Someone similar to Amakusa Shirou Tokisada"
		}},
		"h Huh? That's a rather vague yet specific answer. What... what kind of person would that be?",
		"a I'm not really sure since I've never met him, but I am certain that he is most likely the type of person Shiori prefers.",
		"h I see. Well, Miss Mori? Is he correct?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Right. Well, for me, my ideal guy has to be...",
		"x Arwyn Penrith.",
		"hos OOOOOHHHHH!?!?",
		"h W-what a direct answer. Eh? Huh? What is this? A confession?",
		"l ... is that type of answer even allowed?",
		"h I-I wonder how Mr. Penrith will react to this answer...",
		"hide x",
		"show White bottom center with fadeIn",
		"a ...",
		"a Please don't lie so blatantly. It's difficult even for me to guess your answer.",
		"x Tehe~ Sorry~ :p",
		"l ... how anticlimactic.",
		"hide White",
		"show Hosts bottom center with fadeIn",
		"h Well, I suppose that's to be expected from these two...",
		"l So, how do we rule this answer?",
		"h Eh? Well, I guess it's wrong? Ah, but, Arwyn said 'Someone similar to Amakusa' and Shiori's answer was 'Arwyn' so actually...",
		"l Shall we count it as correct? It's rather close.",
		"h Hmm... Why not? Team White Winter gets a point.",
		function () {
			storage.score.white += 1;
			return true;
		},
		"jump R1_End"
	],

	"Q3_White_Choice": [
		{"Choice":{
			"Dialog": "n What is Shiori's type?",
			"Pink":{
				"Text": "Amakusa Shirou Tokisada",
				"Do": "jump Q3_White_1"
			},
			"Red":{
				"Text": "Arwyn Penrith",
				"Do": "jump Q3_White_2"
			},
			"Black":{
				"Text": "Everyone",
				"Do": "jump Q3_White_3"
			}
		}}
	],

	"Q3_White_1": [
		"a Someone similar to Amakusa Shirou Tokisada",
		"h Huh? That's a rather vague yet specific answer. What... what kind of person would that be?",
		"a I'm not really sure since I've never met him, but I am certain that he is most likely the type of person Shiori prefers.",
		"h I see. Well, Miss Mori? Is he correct?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Right. Well, for me, my ideal guy has to be...",
		"x Arwyn Penrith.",
		"hos OOOOOHHHHH!?!?",
		"h W-what a direct answer. Eh? Huh? What is this? A confession?",
		"l ... is that type of answer even allowed?",
		"h I-I wonder how Mr. Penrith will react to this answer...",
		"hide x",
		"show White bottom center with fadeIn",
		"a ...",
		"a Please don't lie so blatantly. It's difficult even for me to guess your answer.",
		"x Tehe~ Sorry~ :p",
		"l ... how anticlimactic.",
		"hide White",
		"show Hosts bottom center with fadeIn",
		"h Well, I suppose that's to be expected from these two...",
		"l So, how do we rule this answer?",
		"h Eh? Well, I guess it's wrong? Ah, but, Arwyn said 'Someone similar to Amakusa' and Shiori's answer was 'Arwyn' so actually...",
		"l Shall we count it as correct? It's rather close.",
		"h Hmm... Why not? Team White Winter gets a point.",
		function () {
			storage.score.white += 1;
			return true;
		},
		"jump R1_End"
	],

	"Q3_White_2": [
		"a Arwyn Penrith.",
		"h Eh? That's a rather... self-conscious answer, isn't it?",
		"a No, no, you don't understand what type of person Mori Shiori is. This woman will certainly answer like this.",
		"h I see. Well, Miss Mori? Is he correct?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Right. Well, for me, my ideal guy has to be...",
		"x Arwyn Penrith!",
		"h OOOHH!?",
		"h Amazing, you were able to guess such a specific answer.",
		"a Well, I suppose you could say I understand her well.",
		"hide x",
		"show White bottom center with fadeIn",
		"a Shiori...",
		"a Please don't lie so blatantly. It's difficult even for me to guess your answer.",
		"x Eh? But didn't it all work out overall?",
		"a You'll give people the wrong idea.",
		"hide White",
		"show Hosts bottom center with fadeIn",
		"h Well, I suppose this is to be expected from these two...",
		"l I'm not sure if they're a good match or just weird...",
		function () {
			storage.score.white += 1;
			return true;
		},
		"jump R1_End"
	],

	"Q3_White_3": [
		"a Everyone.",
		"a I believe that Shiori would most likely say that she loves everyone equally.",
		"h I see, that's certainly an interesting answer. Well, Miss Mori? Is he correct?",
		"hide a",
		"show x IMG bottom center with fadeIn",
		"x Unfortunately, it is incorrect. I do love everyone, but I also have a certain preference.",
		"x For me, my ideal guy has to be...",,
		"x Arwyn Penrith.",
		"hos OOOOOHHHHH!?!?",
		"h W-what a direct answer. Eh? Huh? What is this? A confession?",
		"l ... is that type of answer even allowed?",
		"h I-I wonder how Mr. Penrith will react to this answer...",
		"hide x",
		"show White bottom center with fadeIn",
		"a ...",
		"a Please don't lie so blatantly. It's difficult even for me to guess your answer.",
		"x Tehe~ Sorry~ :p",
		"l Oh... how anticlimactic.",
		"hide White",
		"show Hosts bottom center with fadeIn",
		"h Well, I suppose that's to be expected from these two...",
		"jump R1_End"
	],

	"R1_End": [
		"h Anyways, with that, we've reached the end of Round 1. It's been a strange series of events after another, but let's keep going on with a smile.",
		"h Could you announce the current points, Miss Elliwyn? Cause I stopped counting a long time ago.",
		"l You're a rather unreliable host, aren't you. Let's see...",
		"l Team Pink Chocolate: {{score.pink}}",
		"l Team Red Dragon: {{score.red}}",
		"l Team Black Thunder: {{score.black}}",
		"l Team White Winter: {{score.white}}",
		"h Hmm, rather interesting results so far, but we're not done yet. Let us move ahead to the next round!",
		"jump R2"
	],

	"R2": [
		"h Tada! What's our ranking? Public Opinion Guessing Quiz!!!",
		"l Yay~!!!",
		"h Allow me to explain. For this round, we will be asking the audience for their opinions on the pairs, and the contestents will have to guess what the audience thinks.",
		"h In other words, this is a test to see how self-aware you are of outside perception.",
		"l Is that important in a relationship?",
		"h Well, y'know. Don't you hate it when a couple are totally unaware of how they're acting in public?",
		"h It's like, go get a room, you two. Normies Explode! That kind of thing.",
		"l I sense a lot of personal bias in this quiz...",
		"hide Hosts",
		"show Pink bottom center with fadeIn",
		"r Another difficult quiz...",
		"s This one might be harder than the first.",
		"hide Pink",
		"show Red bottom center with fadeIn",
		"y Let's not be discouraged and try out best!",
		"b R-right...",
		"hide Red",
		"show Green bottom center with fadeIn",
		"e This contest relies too much on social skills...",
		"c Uhh...",
		"hide Green",
		"show White bottom center with fadeIn",
		"x Hmm, I wonder what kind of questions there will be?",
		"a ...",
		"hide White",
		"show Hosts bottom center with fadeIn",
		"h Well, it seems like everyone is beginning to get the gist of this game.",
		"h The audience as well are encouraged to answer honestly what they think of each pair.",
		"h Now then, let us move along with haste to the first question!",
		"jump Q4"
	],

	"Q4": [
		"h 'Which pair has the most ideal relationship?",
		"h In other words, of our four pairs here, which one does the audience believe has the best kind of relationship?",
		"h Y'know, like a bond that makes you go 'Ah, those two sure suit each other' or 'I wish I had that kind of relationship' sort of thing.",
		"c So it's not which pair they like the most, but which pair seems to have the best relationship?",
		"h Precisely. A small, but key difference to consider.",
		"h Now then, viewers, please submit your answer.",
		{"Choice":{
			"Dialog": "n Which pair has the most ideal relationship?",
			"Pink":{
				"Text": "Team Pink Chocolate",
				"Do": "jump Q4_Pink"
			},
			"Red":{
				"Text": "Team Red Dragon",
				"Do": "jump Q4_Red"
			},
			"Black":{
				"Text": "Team Black Thunder",
				"Do": "jump Q4_Black"
			},
			"White":{
				"Text": "Team White Winter",
				"Do": "jump Q4_White"
			}
		}}

	],

	"Q4_Pink": [
		function () {
			storage.ranks.ideal = 1;
			return true;
		},
		"jump Q4_M"
	],

	"Q4_Red": [
		function () {
			storage.ranks.ideal = 2;
			return true;
		},
		"jump Q4_M"
	],

	"Q4_Black": [
		function () {
			storage.ranks.ideal = 3;
			return true;
		},
		"jump Q4_M"
	],

	"Q4_White": [
		function () {
			storage.ranks.ideal = 4;
			return true;
		},
		"jump Q4_M"
	],

	"Q4_M": [
		"h Alright, we have received the answer. Thank you very much.",
		"h Now then, the contestents may begin to guess. Feel free to discuss with your partner as you do so.",
		"hide Hosts",
		"show Pink bottom center with fadeIn",
		"r Hmmm... this is rather hard. What do you think?",
		"s Hm... Would it be conceited to say that it's us?",
		"r Eh? I don't think it's us.",
		"s You don't think that our relationship is good?",
		"r N-no, I didn't say that. It's just... you know, it's the audience's answer. So we have to think about this from their point of view.",
		"r You're rather popular, so there may be some viewers who think that you'd be better suited with another girl... or something like that.",
		"s I suppose that's true. So then... maybe Team Black Thunder?",
		"s Thinking objectively, I think that kind of adolescent love is rather popular with audiences.",
		"r I also agree.",
		"s Right, then our answer is 'Team Black Thunder'",
		"hide Pink",
		"show Red bottom center with fadeIn",
		"b What do you think, Yingying?",
		"y Ah well... I think it might be us.",
		"b Eeeehhhh???",
		"y You don't think so?",
		"b I-I mean... l-let me hear your reasoning first.",
		"y Well, I'm not really familiar with how people from your world think, but I feel like everyone wants to have a close, comfortable marriage...",
		"y And I think that's what we have, so that's why the audience might vote for us.",
		"b Mm.... okay, I can't argue with that.",
		"b Then we'll go with 'Team Red Dragon' as our answer.",
		"hide Red",
		"show Green bottom center with fadeIn",
		"e ... ... ...",
		"c ... ... ...",
		"e Um... this may be a little bold, but I think it's 'Team Pink Chocolate.'",
		"c Ah, I was also thinking the same thing.",
		"e They seem like they're really close friend, right? Like they're able to share a lot about themselves with each other.",
		"c Yes, I also feel like they have a very open relationship. I'm a little envious.",
		"e Shall we go with that then?",
		"c Let's go with that.",
		"hide Green",
		"show White bottom center with fadeIn",
		"x What do you think, sir?",
		"a Hmm... it's difficult to say.",
		"x Might you think that maybe it's us?",
		"a There's no way that's true.",
		"x Ahahaha, you sure are confident about that.",
		"x But well, I agree. It can't be us.",
		"x Then, which of the others do you personally think is the most ideal?",
		"a ... I think that's irrelevant. We should look at this objectively.",
		"a You watch a lot of romance movies, right? From that point of view, what kind of couple do you think is popular with audiences?",
		"x Hmm... currently, the most popular trend tends to be a pair where the guy is a deeply tormented soul and he's healed by the power of the maiden's love.",
		"a So Red Dragon.",
		"x Yeah, let's go with 'Team Red Dragon'.",
		"hide White",
		"show Hosts bottom center with fadeIn",
		"h Alright, all of the guesses are in. Shall we see which of them got it right?",
		"h The answer the audience chose for 'Most Ideal Pair' is...",
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.ideal == 1;
			},
			"True": "jump Q4_M_Pink",
			"False": "..."
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.ideal == 2;
			},
			"True": "jump Q4_M_Red",
			"False": "... ..."
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.ideal == 3;
			},
			"True": "jump Q4_M_Black",
			"False": "... ... ..."
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.ideal == 4;
			},
			"True": "jump Q4_M_White",
			"False": "... ... ..."
		}}
	],

	"Q4_M_Pink": [
		"h Team Pink Chocolate!",
		"r Huhhhh???",
		"e Yes!",
		"c Yay, we got it right!",
		"hide Hosts",
		"show Pink bottom center with fadeIn",
		"s It looks like we're considered the ideal pair.",
		"r Yeah, I guess we're considered a good match. How surprising.",
		"s Let's keep that in mind for the next question, then.",
		"hide Pink",
		function () {
			storage.score.black += 1;
			return true;
		},
		"jump Q5"
	],

	"Q4_M_Red": [
		"h Team Red Dragon!",
		"b Ooooh, we got it!",
		"y Yay yay!",
		"x Ah, we also got it right.",
		"a It seems that your knowledge came in handy.",
		"hide Hosts",
		"show Red bottom center with fadeIn",
		"y Um, I guess it looks like we're considered the ideal pair.",
		"b Y-yeah, I suppose. That's... good to know.",
		"b I-I suppose it goes to show that we should really treasure the relationship we have.",
		"y Y-yeah. That's a good point.",
		"hide Red",
		function () {
			storage.score.red += 1;
			storage.score.white += 1;
			return true;
		},
		"jump Q5"

	],

	"Q4_M_Black": [
		"h Team Black Thunder!",
		"c Huhh???",
		"s Alright, we got it.",
		"r Yes!",
		"hide Hosts",
		"show Green bottom center with fadeIn",
		"e Uhhhh....",
		"c Wh- whu...",
		"e Um... I guess we have good chemistry?",
		"c Eh? Ah? Mhm....",
		"hide Green",
		function () {
			storage.score.black += 1;
			return true;
		},
		"jump Q5"
	],

	"Q4_M_White": [
		"h Team White Winter!",
		"x Hmmmm???",
		"a Wh-what?",
		"h Huh, it seems that nobody guessed this answer. How surprising.",
		"hide Hosts",
		"show White bottom center with fadeIn",
		"x Huh? It seems like the audience thinks we have a good relationship.",
		"a I wonder what they were looking at to come to that conclusion.",
		"x Perhaps it was a misclick. Mistakes happen. Or maybe it's one of those joke answers.",
		"a If it was an honest answer, what would you make of it?",
		"x Hmm... actually, maybe it makes sense.",
		"x Thinking about it from a girl's point of view, there may be many that would like to be close to you. So then, based on that alone, they may have chosen us.",
		"a I see...",
		"x If only they knew how much of a pain you were to deal with daily, hahaha.",
		"a Ah, yeah...",
		"hide White",
		"jump Q5"
	],

	"Q5": [
		"show Hosts bottom center with fadeIn",
		"h Now then, let's move ahead to the next question.",
		"h 'Which pair seems the most likely to start dating?'",
		"l That's a rather malicious one, isn't it. Who on earth would want to answer this kind of question?",
		"h Well, I hope the contestents will be able to look at it objectively.",
		"l To begin with, aren't there already...",
		"l Ah. Now that I think about it, in their stories, none of them are technically 'dating' yet.",
		"h Precisely. So then, viewers, which of these pairs do you think is the most likely to end up dating?",
		{"Choice":{
			"Dialog": "n Which pair has the most ideal relationship?",
			"Pink":{
				"Text": "Team Pink Chocolate",
				"Do": "jump Q5_Pink"
			},
			"Red":{
				"Text": "Team Red Dragon",
				"Do": "jump Q5_Red"
			},
			"Black":{
				"Text": "Team Black Thunder",
				"Do": "jump Q5_Black"
			},
			"White":{
				"Text": "Team White Winter",
				"Do": "jump Q5_White"
			}
		}}
	],

	"Q5_Pink": [
		function () {
			storage.ranks.date = 1;
			return true;
		},
		"jump Q5_M"
	],

	"Q5_Red": [
		function () {
			storage.ranks.date = 2;
			return true;
		},
		"jump Q5_M"
	],

	"Q5_Black": [
		function () {
			storage.ranks.date = 3;
			return true;
		},
		"jump Q5_M"
	],

	"Q5_White": [
		function () {
			storage.ranks.date = 4;
			return true;
		},
		"jump Q5_M"
	],

	"Q5_M": [
		"h Alright, we have received the answers. Contestents may begin guessing.",
		"hide Hosts",
		"show Pink bottom center with fadeIn",
		"s Who do you think it is?",
		"r I was going to ask you. I have no idea.",
		"s Shall we go through all the teams and consider each option?",
		"r Good idea. Let's do that.",
		"hide Pink",
		"show Red bottom center with fadeIn",
		"r The Red Team seems rather likely, don't you think.",
		"s Certainly, they seem rather close.",
		"b Eh? No way, no way.",
		"b To begin with, we're already married. We're way past the dating phase.",
		"y Is that how it works?",
		"x I think that you can date while being married.",
		"c I do too. I don't think they're exclusive terms.",
		"s They have gone on a date already, in story. It almost seems like it's just a matter of time.",
		"hide Red",
		"show Green bottom center with fadeIn",
		"s What about the Black Team?",
		"r They also seem rather likely.",
		"c E-eh? N-no, it's not like that. We're just friends.",
		"e Y-yeah, that's right. It's not like that at all.",
		"e The two of us are still in development.",
		"y When you say it like that, it makes it feel like you're more than friends.",
		"b Yeah, like you're trying to hide something.",
		"r In terms of adolescence, they're certainly the highest pair...",
		"s You can rather easily imagine them on a date, that's for sure.",
		"hide Green",
		"show White bottom center with fadeIn",
		"r ... what do you think about them?",
		"s Hmmm, they're rather hard to judge aren't they?",
		"x Hm? I personally think we're the least likely.",
		"a I also agree.",
		"x To begin with, dating between coworkers is forbidden, so...",
		"r ... what do you make of that?",
		"s Hard to say. They seem like the type to go on dates and not really realize they're dates.",
		"hide White",
		"show Pink bottom center with fadeIn",
		"b You guys sure can talk a lot. In my opinion, aren't you guys the most likely?",
		"r Huh? Us? Well...",
		"e ... I also think you two are rather likely.",
		"s Well... from the audience's point of view, perhaps.",
		"r Certainly, your reputation precedes you.",
		"s Hm. This one's difficult. All options seem possible.",
		"hide Pink",
		"show Hosts bottom center with fadeIn",
		"h Alright, I think that's enough discussion. What are your guesses?",
		"s We'll have to go with 'Team Red Dragon'.",
		"b We pick 'Team Pink Chocolate'.",
		"c We'll also go with 'Team Pink Chocolate'.",
		"a I think we'll go with 'Team Red Dragon'.",
		"h Alright, all the guesses are in.",
		"h The answer the audience chose for 'Pair Most Likely to Date' is...",
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.date == 1;
			},
			"True": "jump Q5_M_Pink",
			"False": "..."
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.date == 2;
			},
			"True": "jump Q5_M_Red",
			"False": "..."
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.date == 3;
			},
			"True": "jump Q5_M_Black",
			"False": "... ... ..."
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.date == 4;
			},
			"True": "jump Q5_M_White",
			"False": "... ... ..."
		}}
	],

	"Q5_M_Pink": [
		"h Team Pink Chocolate!",
		"b Yosha! We got it!",
		"y Yay~~~!!!",
		"c We got it right, as well.",
		"e Phew, I was worried there for a moment.",
		"hide Hosts",
		"show Pink bottom center with fadeIn",
		"s Ah, so it was us. I should've known.",
		"r Well, subjectively speaking, it's rather difficult to answer yourself for this sort of question.",
		"s That's true. Well, it can't be helped.",
		"hide Pink",
		function () {
			storage.score.red += 1;
			storage.score.black += 1;
			return true;
		},
		"jump Q6"

	],

	"Q5_M_Red": [
		"h Team Red Dragon!",
		"a Oh, we got it right.",
		"x How fortunate. I wasn't too confident on that answer.",
		"s It seems like our analysis paid off. We got it right.",
		"hide Hosts",
		"show Red bottom center with fadeIn",
		"b Ahh, so it was us, huh? I should've known.",
		"y I guess we were a bit too narrow-minded. I suppose that's the type of image that we portray.",
		"b Sorry, I made a wrong call.",
		"y N-no, it's fine. We got it wrong but... I'm not too unhappy...",
		"hide Red",
		function () {
			storage.score.pink += 1;
			storage.score.white += 1;
			return true;
		},
		"jump Q6"
	],

	"Q5_M_Black": [
		"h Team Black Thunder!",
		"e Ehhh???",
		"b Ahh, so it was them.",
		"s Darn. I second guessed myself at the last minute.",
		"hide Hosts",
		"show Green bottom center with fadeIn",
		"e I-it seems like we seem likely to d-d-date...",
		"c Awawa, how embarassing...",
		"hide Green",
		"jump Q6"
	],

	"Q5_M_White": [
		"h Team White Winter!",
		"x EHHHH???",
		"a ???",
		"hide Hosts",
		"show White bottom center with fadeIn",
		"x Hm, I wonder why we were picked.",
		"a I suppose it just shows that it's difficult to judge how others perceive you.",
		"a Rather, isn't it mostly your fault we're seen like this?",
		"x Haha, I guess you're right. Sorry, sorry.",
		"x Let's see. As an apology, I'll treat you to a meal next time. Just. The. Two. Of. Us.",
		"a That's exactly what I'm talking about...",
		"hide White",
		"jump Q6"
	],

	"Q6": [
		"show Hosts bottom center with fadeIn",
		"h Well then, shall we go ahead with the next question. This will be the last one for this round.",
		"h Will you do the honors, Miss Elliwyn?",
		"l Sure, sure. Let's see... Oh my. The next question is...",
		"l 'Which pair seems the most likely to engage in intimate, adult activities with each other?'",
		"ev Pfffffttt.",
		"b W-w-w-w-what the hell kind of question is that?",
		"x Oh dear, how bold.",
		"c Ah! Ernest, don't faint!",
		"e Guhh...",
		"l It seems like this is a rather difficult question to swallow.",
		"h Hm, I wonder why. Well, this should be a rather amusing question to watch.",
		"h So then, valued viewers, please submit your answer!",
		{"Choice":{
			"Dialog": "n Which pair seems the most likely to engage in intimate, adult activities with each other?",
			"Pink":{
				"Text": "Team Pink Chocolate",
				"Do": "jump Q6_Pink"
			},
			"Red":{
				"Text": "Team Red Dragon",
				"Do": "jump Q6_Red"
			},
			"Black":{
				"Text": "Team Black Thunder",
				"Do": "jump Q6_Black"
			},
			"White":{
				"Text": "Team White Winter",
				"Do": "jump Q6_White"
			}
		}}
	],

	"Q6_Pink": [
		function () {
			storage.ranks.sex = 1;
			return true;
		},
		"jump Q6_M"
	],

	"Q6_Red": [
		function () {
			storage.ranks.sex = 2;
			return true;
		},
		"jump Q6_M"
	],

	"Q6_Black": [
		function () {
			storage.ranks.sex = 3;
			return true;
		},
		"jump Q6_M"
	],

	"Q6_White": [
		function () {
			storage.ranks.sex = 4;
			return true;
		},
		"jump Q6_M"
	],

	"Q6_M": [
		"h Alright, while the contestents have been reeling, the answers have been submitted.",
		"h I'd like to start the guessing but... it seems some of our players have yet to recover.",
		"c Ernest! Ernest! Don't die on me!!",
		"h How about we go at this one by one this time? Since you guys seem the most composed, why don't we start with Team Pink Chocolate?",
		"h What do you think, Mr. Nomikata, Miss Mol-Undi?",
		"hide Hosts",
		"show Pink bottom center with fadeIn",
		"s Well... I think the immediate answer that comes to mind would have to be us. For obvious reasons.",
		"h Certainly. Quest of Fate is the only Quest with H-scenes so far, so it only makes sense to think of you two when it comes to that sort of stuff.",
		"s Right. But... if we think about this a little more, couldn't it actually be Team Red Dragon?",
		"s When you consider the recent developments in LBRP, it's almost certain that they're eventually gonna do it, right?",
		"h Certainly, from a narrative standpoint, one could see that happening.",
		"b I object!",
		"h Overruled.",
		"b Dammit!",
		"s What do you think, Risa?",
		"r Eh? Ah... right, right, that makes sense. I'll go with your answer.",
		"s Then we'll go with 'Team Red Dragon'.",
		"hide Pink",
		"show Red bottom center with fadeIn",
		"h Right, then since we're on topic, what about you guys? What do you think?",
		"b Eeugghh... I don't wanna answer...",
		"b Yingying, tag in. I'll leave it to you...",
		"y Eh? Ah, then... I also think it's us.",
		"h Oh? How bold. Why do you think so?",
		"y W-well... My husband promised me we'd eventually conssumate our marriage, so I believe in him.",
		"b Guh! My heart!",
		"hide Red",
		"show White bottom center with fadeIn",
		"h Well, then, what do you two think about this question?",
		"a I think that these questions have been getting more and more ridiculous.",
		"h You knew what you were signing yourself up for.",
		"a I don't think I did.",
		"x Hmm... of the four pairs... at the very least, I think we're the least likely.",
		"a That's true.",
		"x So then, I suppose it's most likely between the Pink Team and the Red Team.",
		"x What do you think, sir?",
		"a Please don't ask me. You know I don't have an answer.",
		"x Hahaha, okay, okay. Then I'll pick... 'Team Pink Chocolate' as our answer.",
		"x Out of everyone, I think they have the most 'adult' relationship.",
		"a Then, we'll go with that. I'll believe in your assessment.",
		"hide White",
		"show Green bottom center with fadeIn",
		"h Well, then. How are feeling now, Mr. Helmingham?",
		"e Please stop with these type of questions. My heart can't take it...",
		"c I'll also have to ask the same.",
		"h Well, well, I'll try to keep that in mind. But for now, what's your answer for this question?",
		"e Fine. Let's see...",
		"e Looking at things from the audience's perspective, it would have to be between the Red Team and the Pink Team.",
		"e Atmosphere-wise, those two are the most likely to involve adult elements. Or rather, they already do.",
		"e From a narrative standpoint, LBRP almost seems to be phoning in an inevitable H-scene between the pair.",
		"e Meanwhile, Quest of Fate has already had H-scenes, and it only seems like a matter of time, before another one happens.",
		"e The key difference, I would suppose, is that, in QoF, the main character isn't as seemingly anchored to a certain heroine as in LBRP.",
		"e Theoretically, it's very possible that the story could take a route in which they never even see each other again.",
		"e So, I'll have to go with 'Team Red Dragon' as the answer.",
		"h ... wow. That was surprisingly analytical of you.",
		"e Well, I guess I should get serious once in a while.",
		"h Right. Well, what do you think, Miss Etherauletta?",
		"c Mmm... I think Ernest has said everything I was thinking. I'll agree with him.",
		"h Alright, then, we have our answers.",
		"hide Green",
		"show Hosts with fadeIn",
		"h Surprisingly, almost everyone has picked the same team. There's a good chance we could get a lot of points given here.",
		"h So then. The answer chosen by the audience is...",
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.sex == 1;
			},
			"True": "jump Q6_M_Pink",
			"False": "..."
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.sex == 2;
			},
			"True": "jump Q6_M_Red",
			"False": "... ..."
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.sex == 3;
			},
			"True": "jump Q6_M_Black",
			"False": "... ... ..."
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.ranks.sex == 4;
			},
			"True": "jump Q6_M_White",
			"False": "... ... ..."
		}}
	],

	"Q6_M_Pink": [
		"h Team Pink Chocoalte!",
		"s Ah. So it was us, after all.",
		"x Yay! We got it right!",
		"hide Hosts",
		"show Pink bottom center with fadeIn",
		"s How am I supposed to feel about this?",
		"r Well, it's just the audience perception, so let's try not to let it get too us too much.",
		"s Yeah, I suppose.",
		"hide Pink",
		function () {
			storage.score.white += 1;
			return true;
		},
		"show Hosts bottom center with fadeIn",
		"jump R3"
	],

	"Q6_M_Red": [
		"h Team Red Dragon!",
		"s Alright. We got it right.",
		"e Phew. My assessment was correct.",
		"hide Hosts",
		"show Red bottom center with fadeIn",
		"y Yay, we got it correct. That's great, right dear?",
		"b ... I have so many conflicting emotions right now.",
		"y I-it's ok. I'll wait for you as long as it takes.",
		"b Don't say that in public!",
		"hide Red",
		function () {
			storage.score.pink += 1;
			storage.score.red += 1;
			storage.score.black += 1;
			return true;
		},
		"show Hosts bottom center with fadeIn",
		"jump R3"

	],

	"Q6_M_Black": [
		"h Team Black Thunder!",
		"e EHHHHH???",
		"c EHHHHHHHH????",
		"hide Hosts",
		"show Green bottom center with fadeIn",
		"e No, no, no, there has to be some sort of mistake about this one.",
		"e R-recount. I demand a recount.",
		"c Wh... how...",
		"hide Green",
		"show Hosts bottom center with fadeIn",
		"h It seems that the people themselves are quite bewildered by this result. What do you make of this, Miss Elliwyn?",
		"l I think it shouldn't be too much of a problem. The age of consent in the UK is 16, so it should be fine even considering the age gap.",
		"h T-that's not quite what I was asking...",
		"l I'm trying to keep my cool as much as I can, so please move along before I lose it.",
		"h Right, of course. Thank you for being professional.",
		"jump R3"
	],

	"Q6_M_White": [
		"h Team White Winter!",
		"x Ara? How surprising.",
		"a ... eh?",
		"hide Hosts",
		"show White bottom center with fadeIn",
		"a I'm not really sure what to say. I suppose it'd be best to just not let it bother us.",
		"x Right. This kind of thing can't be helped. Let's do our best to not let these topics bother us.",
		"x Ah, but don't get the wrong idea. Still no lewd stuff until marriage, okay?",
		"a Huh? But I wasn't... we won't... nevermind.",
		"x Though if you really insisted... kya!",
		"a ... ... ... spare me. Please.",
		"hide White",
		"show Hosts bottom center with fadeIn",
		"jump R3"
	],

	"R3": [
		"h Well then, at last we've reached the third and final round.",
		"h It's been quite the journey so far, wouldn't you say so, Miss Elliwyn?",
		"l Honestly, I have no idea what's been happening. This is way too messy.",
		"h Very valid!",
		"h Now then, this will be the final round. There's still a chance to get some points and turn things around. So then, the final contest is this!",
		"h Do we match? Same Answer Quiz!",
		"l Yeah!!!",
		"h Allow me to explain. This time, everyone will be presented a question and each contestent will have to give their personal opinion on it.",
		"h If your answer matches your partners, then you get a point. Very simple.",
		"l So it's like one of those compatability quizes?",
		"h Yes. This will see if you and your partner are truly 'of the same mind' as they say. Disgreements can often lead to break-ups after all, so this too is a test of one's bond.",
		"l Sounds rather sketchy, but I suppose it's better than the last round.",
		"l I suppose it's true that fundamental differences in views can drive people apart in theory.",
		"h Well then, if there are no complaints, we'll move right along to the first question.",
		"jump Q7"

	],

	"Q7": [
		"h 'How would you describe you and your partner's relationship?' Please write down your thoughts honestly.",
		"b Ugh, there's never gonna be a normal question, is there?",
		"e At this point, I've already resigned myself...",
		"hide Hosts",
		"n ...",
		"h Alright, let's see everyone's answers. How do they describe their relationship?",
		"show Pink bottom center with fadeInRight",
		"s Friends",
		"r Friends",
		"hide Pink with fadeOutLeft",
		"show Red bottom center with fadeInRight",
		"b Close Friends",
		"y Husband and Wife",
		"hide Red with fadeOutLeft",
		"show Green bottom center with fadeInRight",
		"e Friends",
		"c Friends",
		"hide Green with fadeOutLeft",
		"show White bottom center with fadeInRight",
		"a Coworkers",
		"x Superior and Subordinate",
		"hide White with fadeOutLeft",
		"show Hosts bottom center with fadeInLeft",
		"h Oho, quite the variety of answers here. How delectable.",
		"h Right off the bat, it seems that Team Pink Chocolate and Black Thunder are on the same wavelength. As for the other two...",
		"l Close Friends vs. Husband and Wife, huh? That's rather different.",
		"h Coworkers vs. Superior and Subordinate are similar, but... I'll have to say the meaning is rather different.",
		"hide Hosts",
		"show Red bottom center with fadeIn",
		"y Friends...",
		"b Eh? Ah... well, y'know. It's true that we're married, but I think of you as my friend first and foremost so... sorry.",
		"y No, no, there's no need to apologize. I understand, really. I'm the same.",
		"y They're both correct, so it can't be helped if we put different answers.",
		"b Y-yeah, that's right.",
		"hide Red",
		"show White bottom center with fadeIn",
		"a Superior and subordinate... well, it's not wrong.",
		"x Ah, well, I guess this kind of discrepency can't be helped. They're more or less the same in my eyes. Personally, I think the judges are bit too picky on this.",
		"l You two don't consider each other friends?",
		"a No.",
		"x Of course not.",
		"l ... how sad.",
		"hide White",
		function () {
			storage.score.pink += 1;
			storage.score.black += 1;
			return true;
		},
		"jump Q8",
	],

	"Q8": [
		"h Moving right along, we reach our next question.",
		"h 'What do you think of pineapple on pizza?'",
		"b What? A regular question for once!? Impossible.",
		"s This question feels familiar for some reason...",
		"l Surprisingly has little to do with relationships, for once.",
		"h No, no, no, I believe this is rather vital question over which many wars have been fought over.",
		"l Has it though? Have there really?",
		"h Anyways, contestents. Please go ahead and tell us your thoughts.",
		"hide Hosts",
		"show Pink bottom center with fadeInRight",
		"s It's good.",
		"r It's great.",
		"hide Pink with fadeOutLeft",
		"show Red bottom center with fadeInRight",
		"b I don't care.",
		"y What's a pizza? What's a pineapple?",
		"hide Red with fadeOutLeft",
		"show Green bottom center with fadeInRight",
		"e It's fine.",
		"c I don't mind it.",
		"hide Green with fadeOutLeft",
		"show White bottom center with fadeInRight",
		"x I dislike it.",
		"a I wouldn't like it.",
		"hide White with fadeOutLeft",
		"show Hosts bottom center with fadeInLeft",
		"h A very wide range of answers this time. How fascinating.",
		"h But without opening the floor to argument, it seems that most pairs are in agreement as to their preference.",
		"l One of them seems rather confused about the question, though.",
		"y S-sorry. I'm not quite familiar with the terms.",
		"h Well, I guess that's one way of saying she has no opinion, which is essentially Ben's answer, so let's give them the point.",
		"hide Hosts",
		"show Pink bottom center with fadeInRight",
		"s What a nostalgic question.",
		"r Yes. It makes me remember some good times.",
		"hide Pink with fadeOutLeft",
		"show Red bottom center with fadeInRight",
		"b Sorry, I forgot you don't know much about our food here. I should've filled you in beforehand.",
		"y No, it's okay. Everything's rather confusing, but I'm sure you went through the same thing in my world.",
		"b Um, after this, would you like to get some pizza? I don't know if you'll like it though.",
		"y Really? That'd be great. I'm looking forward to it.",
		"hide Red with fadeOutLeft",
		"show Green bottom center with fadeInRight",
		"e Ah, speaking of which, do you eat pizza often, Candis?",
		"c Mn, I sometimes get some with Lesi and Karissa and Lior at times. You should join us once in a while.",
		"e N-no, I'll have to pass. I don't think I have the right to intrude in such a feminine gathering...",
		"hide Green with fadeOutLeft",
		"show White bottom center with fadeInRight",
		"x Hm? I noticed you said you 'wouldn't' like it. Have you never tried it, sir?",
		"a Not really. To begin with, I don't really like that kind of food.",
		"a Well, if it's a gourmet place, I might try it out.",
		"x Really? Ah, I recently found a nice Italian place near by. Shall we go try it out one of these days?",
		"a Well, I don't mind.",
		"x Great. Then it's a promise!",
		"hide White with fadeOutLeft",
		"show Hosts bottom center with fadeInLeft",
		"h Huh? That's weird. This is supposed to a divisive topic that sews discord, so why has the atmosphere relaxed and everyone's bonding?",
		"l I think your desire for chaos has backfired horribly.",
		"h Tch, fine. Let's quickly move on to the next question!",
		function () {
			storage.score.pink += 1;
			storage.score.black += 1;
			storage.score.red += 1;
			storage.score.white += 1;
			return true;
		},
		"jump Q9"

	],

	"Q9": [
		"h 'If your partner began getting really close to another member of the opposite sex, how would you react?'",
		"l Wow, you are just determined to sow the seeds of conflict, aren't you?",
		"h I thirst for blood!",
		"h Now then, contestents. What are your answers?",
		"hide Hosts",
		"show Pink bottom center with fadeInRight",
		"s Hm, I think the only mature thing to do is not pay it too much heed. She has her own life too, y'know.",
		"r Likewise. I might get a little... concerned, but in the end, he should be able to get along whomever he likes.",
		"hide Pink with fadeOutLeft",
		"show Red bottom center with fadeInRight",
		"b Well, y'know. I wouldn't plan to interfere or anything. I don't want to control her life, after all.",
		"y To be honest... I think I'd be somewhat worried. I don't want to bother him, but still... I think I'd have trouble sleeping at night...",
		"hide Red with fadeOutLeft",
		"show Green bottom center with fadeInRight",
		"e Hmm... I think I'd do my best to support Candis, no matter what she does. That's what a good friend should do, right?",
		"c Actually, I'd be rather glad. I think Ernest could use more friends too.",
		"hide Green with fadeOutLeft",
		"show White bottom center with fadeInRight",
		"a I don't really care. It's her personal business.",
		"x Well, I'm a rather mature individual too. I believe things can be settled simply. So, if I saw someone else getting intimate with sir, then...",
		"x MURDER HER!!!",
		"a Shiori, no.",
		"x Shiori YES!!!",
		"hide White with fadeOutLeft",
		"show Hosts bottom center with fadeInLeft",
		"h Some very interesting answers this time around. What do you think Miss Elliwyn?",
		"l Hm, the Pink Team seems rather in sync in their personal life policy while the Black Team are rather unanimous in their support for each other.",
		"l The Red Team, on the other hand, is a bit unbalanced. It seems like Ben's trying to keep away from being too clingy as much as possible, while Yingying's seeking more certainty in their relationship. ",
		"l And the White Team's just a mess.",
		"x Kill Everyone!!!",
		"a Shiori, stop!",
		"h Well then, I guess the Pink and Black Teams get another point. Let's move on, before a certain someone goes on a frenzy.",
		function () {
			storage.score.pink += 1;
			storage.score.black += 1;
			return true;
		},
		"jump Q10"
	],

	"Q10": [
		"hide Hosts",
		"show h IMG bottom center with fadeIn",
		"h Now then, at last we reach the final question of this competition.",
		"h Even if one team may seem in the lead right now, there's still a chance for a major comeback as this last question will be worth 3 points.",
		"h As a special bonus, though, we will allow the viewers at home to choose the topic for the final question.",
		"h The rules will be the same as the rest of the round in which a mutual answer will lead to a correct answer.",
		"h Those who want to support a certain team may want to pick a topic they believe will have the highest chance of their team getting right.",
		"h Otherwise, you may want to pick a topic that personally amuses you. Do as you wish.",
		"h So then, honored viewers, please choose the final question!",
		{"Choice":{
			"Dialog": "n Which topic should the final question be about?",
			"Pink":{
				"Text": "Love",
				"Do": "jump Q10_A"
			},
			"Red":{
				"Text": "Marriage",
				"Do": "jump Q10_B"
			},
			"White":{
				"Text": "Sex",
				"Do": "jump Q10_C"
			}
		}}
	],

	"Q10_A": [
		"h Alright, the votes are in. I shall now announce the final question worth 3 points.",
		"h 'Are you in love with your partner?'",
		"ev PFFFFFFTTTTTTT!?!?",
		"b Oi, are you trying to kill us!?",
		"h Oh, what's wrong? Are you embarassed? How cute.",
		"b Idiot! That's not something you can joke about.",
		"h Don't look at me. This is what the audience voted for. Please handle it appropriately.",
		"b Eughh...",
		"h Now then. Please go ahead and get those confessions roaring. I shall watch in delight.",
		"b ... I am so killing him after this.",
		"hide h",
		"show Pink bottom center with fadeInRight",
		"s ...",
		"r ...",
		"s N-no. Risa's my trusted friend, but right now I wouldn't say that we're in love or anything...",
		"r R-right. My answer is also no.",
		"hide Pink with fadeOutLeft",
		"show Red bottom center with fadeInRight",
		"b God... I... I don't know.",
		"b Shut up. Leave me alone.",
		"y I'm also not sure how I feel...",
		"hide Red with fadeOutLeft",
		"show Green bottom center with fadeInRight",
		"c Um, Ernest is my friend so... unfortunately, I have to say no.",
		"e My answer is ... yes, I am in love with Candis. Well, everyone already knew that.",
		"hide Green with fadeOutLeft",
		"show White bottom center with fadeInRight",
		"a No. I don't-",
		"x Yes, I do.",
		"a Huh?",
		"x After all, I love all humans. Everyone one of them is precious to me.", 
		"a Ah. Of course. I should've known.",
		"x What's wrong? Were you hoping for something else?",
		"a N-no, just a misunderstanding. Don't be mistaken.",
		"hide White with fadeOutLeft",
		"show h IMG bottom center with fadeInLeft",
		"h Hm, hm, I see a lot of amusing blushes all around. Ah, what a satisfying question.",
		"h Let's see... It seems that the Pink and Red teams got it right. So then they'll be getting 3 points. ",
		function () {
			storage.score.pink += 3;
			storage.score.red += 3;
			return true;
		},
		"jump R0"
	],

	"Q10_B": [
		"h Alright, the votes are in. I shall now announce the final question worth 3 points.",
		"h 'Do you intend to get married in the future?'",
		"a Ah, this is...",
		"r A surprisingly simple question.",
		"h Well, I think it's a rather important question to ask. So then, what are everyone's thoughts?",
		"hide h",
		"show Pink bottom center with fadeInRight",
		"s I mean... I guess eventually it'll have to happen. So my answer is 'yes'.",
		"r ... I don't know. It's something I think that's a little too early to say.",
		"hide Pink with fadeOutLeft",
		"show Red bottom center with fadeInRight",,
		"b I'm already married to begin with, so there's no use answering this.",
		"y Right. We're already spouses.",
		"hide Red with fadeOutLeft",
		"show Green bottom center with fadeInRight",
		"e As a magus, I'd think that it'd eventually have to happen, so I'll say 'yes'.",
		"c I haven't really given it much thought. I'm really not sure.",
		"hide Green with fadeOutLeft",
		"show White bottom center with fadeInRight",
		"x Yes. I believe that marriage is a responsibility that everyone should fulfill.",
		"a No. I think marriage can be a wonderful thing, but I personally have no such plans.",
		"hide White with fadeOutLeft",
		"show h IMG bottom center with fadeInLeft",
		"h How surprising. A lot of disagreements on this topic.",
		"h Or perhaps it's not that shocking. These kinds of questions tend to be quite divisive.",
		"h So then, it seems that the only ones who matched are the Red Team. As expected of the actually married couple, this one was right up their alley.",
		function () {
			storage.score.red += 3;
			return true;
		},
		"jump R0"
	],

	"Q10_C": [
		"h Alright, the votes are in. I shall now announce the final question worth 3 points.",
		"h 'Are you willing to have sexual intercourse with your partner?'",
		"ev PFFFFFFTTTTTTT!?!?",
		"b Oi, are you trying to kill us!?",
		"h Oh, what's wrong? Are you embarassed? How cute.",
		"b Idiot! That's not something you can joke about.",
		"h Don't look at me. This is what the audience voted for. Please handle it appropriately.",
		"b Eughh...",
		"h Now then. Please go ahead and get those answers roaring. I shall watch in delight.",
		"b ... I am so killing him after this.",
		"hide h",
		"show Pink bottom center with fadeInRight",
		"r Eh? Ah, I... Uh...",
		"s ...",
		"r ...",
		"s W-well, I think my answer is pretty clear. I am willing to if a situation were to make it necessary.",
		"r Nomikata, you... I... um...",
		"r No, I can't. I'm sorry, I have to say no.",
		"hide Pink with fadeOutLeft",
		"show Red bottom center with fadeInRight",
		"y Um, well... I wouldn't mind it. Or rather, I'm sort of looking forward to it...",
		"b ... shit.",
		"b My answer has to be... no. I just can't. Sorry.",
		"hide Red with fadeOutLeft",
		"show Green bottom center with fadeInRight",
		"c I-I... I'm going to have to say no.",
		"c I think that sort of thing... is something that should be special. So I can't.",
		"e Mmm... well, if I'm being honest with myself, I think I can't deny my thoughts.",
		"e I think, were the situation to present itself, I'd say yes. S-sorry, Canids.",
		"c I-it's okay. It can't be helped. You're a guy after all...",
		"e S-sorry...",
		"hide Green with fadeOutLeft",
		"show White bottom center with fadeInRight",
		"a No.",
		"x No way.",
		"a Never.",
		"x I'd rather kill him.",
		"a That's... not a very convincing comparison when you say it.",
		"x T-the point stands. It's never ever happening. NEVER!",
		"hide White with fadeOutLeft",
		"show h IMG bottom center with fadeInLeft",
		"h Ah, what delicious awkwardness. I'm glad that was the chosen question.",
		"b You're a devil, you know that.",
		"h Demon God actually, but point taken.",
		"h Anyways, it seems like only one team managed to match this time around.",
		"h Congratulations to the White Team who finally found something to agree upon, even if it's their unwillingness to fuck each other.",
		function () {
			storage.score.white += 3;
			return true;
		},
		"jump R0"

	],

	"R0": [
		"h Well then, that was the final question. After quite the wild ride, we've finally reached the end of this contest.",
		"h It's been a hard fought fight, but at the end of it all, there can only be one winner.",
		"h At last, let us tally up and announce the points.",
		"h First off, Team Pink Chocolate finishes with {{score.pink}} points.",
		"h Team Red Dragon: {{score.red}} points.",
		"h Team Black Thunder: {{score.black}} points",
		"h And finally, Team White Winter has {{score.white}} points.",
		"h Which means that the final winner of the Holy Grail Best Pair Contest is... ",
		"hide h",
		{"Conditional": {
			"Condition": function(){
				return storage.score.pink > storage.score.red && storage.score.pink > storage.score.black && storage.score.pink > storage.score.white;
			},
			"True": "jump Win_Pink",
			"False": "..."
			
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.score.red > storage.score.pink && storage.score.red > storage.score.black && storage.score.red > storage.score.white;
			},
			"True": "jump Win_Red",
			"False": "... ..."
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.score.black > storage.score.red && storage.score.pink < storage.score.black && storage.score.black > storage.score.white;
			},
			"True": "jump Win_Black",
			"False": "... ... ..."
		}},
		{"Conditional": {
			"Condition": function(){
				return storage.score.white > storage.score.red && storage.score.white > storage.score.black && storage.score.pink < storage.score.white;
			},
			"True": "jump Win_White",
			"False": "... ... ... ...."
		}},
		"jump Win_Tie"

	],

	"Win_Pink": [
		"scene Booth with fadeIn",
		"show Pink bottom center with fadeIn",
		"h Team Pink Chocolate!",
		"r W-we did it? We won?",
		"s Hm. Well, I expected nothing less.",
		"s I suppose this just confirms that we're the Best Pair.",
		"r Yeah. We really showed the strength of our bond!",
		"h Congratulations, you two. You truly proved the world that you're the Best Pair of Questverse.",
		"h You are the winners of this Holy Grail War. Please receive your trophy.",
		"s Thank you very much. We'll be getting our wish now.",
		"r I still can't believe it. We finally won a Holy Grail.",
		"s Me too. I'm honestly ecstatic. We can finally make our wish come true.",
		"r We can get anything we want. This is amazing.",
		"h Yes, rejoice. Your dream date can finally happen.",
		"r Yeah, finally our dream date will ha-",
		"r Wait, what?",
		"s Hold on...",
		"h Hm? Did I not mention?",
		"h This Holy Grail's a special White Day Version. It can only grant your wish for a perfect date and nothing else.",
		"s ...",
		"r ...",
		"ev ...",
		"ev SAY THAT FIRST, YOU IDIOT!!!",
		"jump Epilogue_Pink"
	],

	"Epilogue_Pink": [
		"hide Pink",
		"scene London with fadeIn",
		"n Epilogue:",
		"n After the battle, the two of them used the White Day Holy Grail to enjoy an expensive, but local date in familiar London, ending the day simply watching a movie together while cuddled under a blanket.",
		"n In the end, nothing beat being home and simply enjoying each other's company as they always had.",
		"n There was no need for anything extravagent. The simple pleasures of life that they sought were all they needed.",
		"n As long as they were together...",
		"end"
	],

	"Win_Red": [
		"scene Booth with fadeIn",
		"show Red bottom center with fadeIn",
		"h Team Red Dragon!",
		"b Yosha! We did it!",
		"y W-wow. We actually did it. We won, dear!",
		"b This is crazy. I didn't actually think we'd win but... Ha! See that? I can win Holy Grail Wars too!",
		"y Wooooooo~~~!",
		"h Congratulations, you two. You truly proved the world that you're the Best Pair of Questverse.",
		"h You are the winners of this Holy Grail War. Please receive your trophy.",
		"b I-I can't believe this. We really won. I... I'm not dreaming, am I?",
		"y No, we really got first place. We're the Best Pair.",
		"b Y-yeah, we are. Our bond was the strongest!",
		"y What should we use the Grail for?",
		"b I- I don't know. I didn't think we'd get this for.",
		"b The Root? Should I wish to reach the Root?",
		"b No, wait. What do you want, Yingying?",
		"y I'm okay with whatever you are. Please use it to accomplish your goals.",
		"b Eh? Is that okay? T-then I'll... ah, I don't know. I'm gonna have to think about it.",
		"h Don't worry, you can take your time to decide. Whatever dream date you want is up to you.",
		"b Alright. Whatever dream date we want is-",
		"b Hold on. What?",
		"y Ehhh?",
		"h Hm? Did I not mention it before?",
		"h This Holy Grail's a special White Day Version. It can only grant your wish for a perfect date and nothing else.",
		"b ...",
		"y ...",
		"ev ...",
		"ev SAY THAT FIRST, YOU IDIOT!!!",
		"jump Epilogue_Red"
	],

	"Epilogue_Red": [
		"hide Red",
		"scene Paris with fadeIn",
		"n Epilogue:",
		"n In the end, the two of them used the Holy Grail to wish for the honeymoon of their dreams.",
		"n A romantic trip to Paris, the City of Love, that most could only ever dream of.",
		"n Atop the Eiffel Tower, watching over the night-time cityscape, they reaffirmed their vows. Though this may have been like a dream, their bonds would continue to grow in reality.",
		"n Happily Ever After. Till death do them apart...",
		"end"
	],

	"Win_Black": [
		"scene Booth with fadeIn",
		"show Green bottom center with fadeIn",
		"h Team Black Thunder!",
		"e Ah. No way.",
		"c W-we won? We actually won?",
		"h That's right. Congratulations, you two. You've won this Holy Grail War.",
		"h You've proved that you two are truly the Best Pair of Questverse and deserve this Holy Grail.",
		"c Wow. I can't- I'm not- I don't know what to say.",
		"e This is unbelievable. We actually got a Holy Grail.",
		"e W-what should we wish for? I don't even know.",
		"c Ahh, this is too much. I have so many thoughts right now.",
		"h Hahaha, take your time. You should seriously consider what kind of dream date you want to wish for.",
		"e R-right. We need to think seriously about what kind of dream date we-",
		"e Huh?",
		"c Ara?",
		"h Hm? Did I not mention it before?",
		"h This Holy Grail's a special White Day Version. It can only grant your wish for a perfect date and nothing else.",
		"e ...",
		"c ...",
		"ev ...",
		"ev SAY THAT FIRST, YOU IDIOT!!!",
		"jump Epilogue_Black"
	],

	"Epilogue_Black": [
		"hide Green",
		"scene America with fadeIn",
		"n Epilogue:",
		"n In the end, the two of them decided to use the Holy Grail to go on a grand tour of the States filled with romantic pursuits and wonderous adventures.",
		"n Of course, they weren't alone as all of Canda's friends tagged along. The whole thing became a rowdy ruckus from start to finish.",
		"n But such things were nice too. Even if they weren't alone, the time they spent together would become a beautiful memory.",
		"n What happens next... need not be said.",
		"end"
	],

	"Win_White": [
		"scene Booth with fadeIn",
		"show White bottom center with fadeIn",
		"h Team White Winter!",
		"a We won?",
		"x Amazing. We actually did it, sir. We're the Best Pair.",
		"a How surprising... I honestly didn't think we stood a chance.",
		"x Oh, don't be like that. We proved that our bond is the strongest in the world.",
		"a I have my doubts about that, but I suppose I can't argue with our victory.",
		"h That's right. The two of you have rightfully won this Holy Grail.",
		"h Rejoice as you've proven that you two truly are the Best Pair of Questverse.",
		"a So this is the Holy Grail...",
		"x Finally. It's been so long, but I've finally obtained the Holy Grail. My life's mission is complete.",
		"x I'm sure Lord Shirou will be ecstatic once we bring this back to him.",
		"x With this we could even save all of humanity.",
		"a Right... we could. That's... maybe good.",
		"h Hahaha, now, now, no need to be hasty. Take your time deciding what kind of dream date you want to wish for.",
		"a That's right. We should carefully consider what kind of dream date we should-",
		"a Hm?",
		"x Huh?",
		"h Hm? Did I not mention it before?",
		"h This Holy Grail's a special White Day Version. It can only grant your wish for a perfect date and nothing else.",
		"a ...",
		"x ...",
		"ev ...",
		"ev SAY THAT FIRST, YOU IDIOT!!!",
		"jump Epilogue_White"
	],

	"Epilogue_White": [
		"hide White",
		"scene London with fadeIn",
		"n Epilogue:",
		"n In the end, the two of them brought the Holy Grail home and stored it away to use when they got the chance.",
		"n Busy with work, though, such an opportunity never arrived.",
		"n After that arduous battle, the White Day Holy Grail remained unused till the rest of time...",
		"end"
	],

	"Win_Tie": [
		"wait 500",
		"show h IMG bottom center with fadeIn",
		"h Yet to be decided.",
		"h It seems that we have a tie on our hands, here. How surprising.",
		"s So what happens now?",
		"h I suppose we have no choice but to move towards a tie-breaker round.",
		"h This will be the true final battle to determine this contest.",
		"c Um...",
		"h Hmm? Is there a problem, Miss Etherauletta?",
		"c Um... where did Lesi go?",
		"h Huh?",
		"h Now that you mention it... she suddenly dissapeared. Did she get bored and go home?",
		"h Huh? Wait. No, it's can't be...",
		"h Ahh! I knew it! The Holy Grail's gone!",
		"hide h",
		"h That devil stole it and ran away!",
		"vibrate 100",
		"ev EEEHHHHHH!?!?!?",
		"c Oh, Lesi...",
		"scene rgb(0,0,0) with fadeIn",
		"show l IMG bottom center with fadeIn",
		"l Hehehe, those fools never expected a thing.",
		"l Did they really think I'd just obediently play the role of commentator? My goal was to obtain the Holy Grail myself, all along.",
		"l And now, nobody can stop me!",
		"l MUAHAHAHAHAHA!!!",
		"n And so, Lestari Elliwyn with the Holy Grail began her first steps on the path to World Domination.",
		"n Thus began the conquest of Maou Lestari.",
		"n But that's a story for another time...",
		"end"
		
	],

	"R4": [
		"h As a change of pace, would you like to take over the proceedings, Miss Elliwyn?",
		"l Eh? Ah, sure. I'll do what I can.",
		"l Well, let's see... the next round is this.",
		"l What's his deal? Answer Guessing Quiz! Yay~!",
		"y Hm? Isn't this the same as the first one?",
		"l Um, that's correct. This time will be the same format. However, it will be the ladies's turn to guess their partner's answers.",
		"s How unoriginal.",
		"b You guys ran out of ideas, didn't you?",
		"h Yes, please refrain from heckling the hosts. All of your complaints can be directed entirely at zikari.",
		"l Then, what do you think about this, Hayama? Do you expect any difference from the previous round?",
		"l Well, I don't think there's that much difference between the men and the women, but...",
		"h The ones guessing this time have already experienced being the answerer, so perhaps that previous knowledge will aid them in understanding how their partner will think.",
		"l So you're saying that they might have an easier time getting the correct answer?",
		"h Yes. I believe this round will be a big chance to rack up points that will be key to the overall victory.",
		"l Any tips or advice for the contestents?",
		"h My advice would be... if you are ever stuck on a question, think about how he would answer if his mother asked him.",
		"l That's... an interesting theory.",
		"h It is actually a tactic I've used many times based on well-known psychological facts.",
		"h Young men are always thinking about their mothers. After all, it was not too long ago that they originated from their mother. So then, they will subconsciously answer questions as if their mother was there.",
		"l ... is it just me or is your character suddenly different?",
		"l Anyways, ignoring that weird tangent, let's move on with the first question.",
		"jump Q20"
	],










};
