var a=0;
var b=0;
var c=0;
function m1() {
  document.getElementById('output').innerHTML='<h1>Location: The Hold</h1><p>You sit alone in the darkness, your vision blocked by a blindfold over your face. The only sound you can hear is a great thrumming, as though you\'re on a train, its great steel wheels striking against the tracks. You hear voices from afar, the whispering impossible to comprehend. You struggle to get out. Realizing simple dexterity will not cut it, you reach into your pocket, looking for something that may help...</p><button onclick="m2()">Dynamite</button><button onclick="m3()">Rock back</button><button onclick="m4()">Pocketknife Excalibir</button><button onclick="m5()">Portal Gun</button>'; 
}
function m2() {
//document.body.style.color = "#e11";
//var elements = document.getElementsByClassName('output');
//for (var i in elements) {
  //if (elements.hasOwnProperty(i)) {
    //elements[i].className = 'output2';
//  }
//}
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You complete idiot! How did you think that was going to turn out? Or did you just decide to cook yourself alive as a joke? Well, let me congratulate you! This is not the worst ending in the game. So, congrats, you\'r not the stupidest person to ever play this game. Do you want to know why? Well, it turns out that when you so humourously went up in sparks and smoke, there just so happened to be a few aliens passing by in the corridor when you went up like a fireworks display! So congratulations, you managed to go down in a literral blaze of glory!</p><p>Body count: 5</p>';

}
function m3() {	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Didn\'t your mother ever tell you not to lean back in chairs? I hear its quite dangerous. You could fall and break something. Especially if... oh I don\'t know, YOUR HANDS ARE TIED BEHIND YOUR BACK?!?</p><p>Body Count: 1</p>';
}
function m5() {
	document.getElementById('output').innerHTML='<h1>Location: Engines</h1><p>You pull the portal gun from your pocket and fire it the only direction you can, straight down! You hear a loud crash, a whirring sound, and then your falling. As you plumet to your death, your blindfold and bonds slip off, as you weigh more than them and are now falling faster (Cause that makes complete sense!).  However, you are far from safe. Not only are you falling at break-neck speeds towards a bloody demise of the floor below, but you seem to have also fallen into the engine room, and your worried that anything easily flamable will automatically burst into flame from the heat.</p><button onclick="m6()">Bungee</button><button onclick="m7()">Antigravity</button><button onclick="m8()">Parachute</button><button onclick="m9()">Spring Boots</button>';
}
function m6() {	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Congratulations. You pulled out a Bungee Chord. Such a great idea, right? Well, it would have been, IF YOU\'D REMEMBERED TO TIE THE DANG THING TO SOMETHING BEFORE FALLING. Now, all you have is a nice piece of rope to cling to as you become a little bloody stain on the ground far below.</p><p>Body Count: 1</p>';
}
function m7() {	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You mash the Antigravity button, and then you feel yourself slow down... and then start falling upwards. You fly up, out of the engine room... and right into the hard metal cieling of the Hold, becoming a red splotch on the cieling. Wow, you\'re so inconsiderate. Couldn\'t you have died on the floor where it would be easier for the poor Janitor to clean you up?</p>';
							}
function m8() {	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Remember that whole sentence up above where I mentioned the whole thing about flamable objects. Well, yah. You just had to pull a giant sail of lightweight cloth out of your pack. I know you think you know where this is going, but your wrong, it\'s far worse. not only do you burn up in the air, but your corpse stays in the air just long enough for the large engines to suck up your chard corpse and chew it down into fuel. Then, now fuel, your remains are turned into fuel for the ships guns, becuase the aliens are running low. Finally, two years later, the aliens get into a space battle, and fire their cannons, which your remains now power. And, because of that extra power, thirty two people die from that lazer blast. Way to go, jerk.</p><p>Body Count: 33</p>';
							}
function m9() {
	
	document.getElementById('output').innerHTML='<h1>Location: Engine Room Floor</h1><p>Turns out those spring thingys are actually quite loud. Even though you do make it to the ground safely, the sounds of your sproinging up and down have alerted the alien mechanics to your presence. and you can hear them coming. You need to think quickly in order to escape this horrible situation.</p><button onclick="m10()">Hide in Engines</button><button onclick="m11()">Cardboard Box</button><button onclick="m12()">Cloaking Device</button><button onclick="m13()">Pokeball</button>';
}
function m10() {	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Turns out death by incineration is quite painful. But don\'t worry, they didn\'t find you!</p><p>Body Count: 1</p>';
							}
function m11() {	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Did you know cardboard boxes kind of stand out in spaceship engine rooms? Also, did you know that these aliens have never seen a cardboard box before? Congratulations, your such a good person, showing these aliens things they\'ve never seen before! How nice. You also taught them that Cardboard boxes, like human bodies, don\'t react to well to lazer fire...</p><p>Body Count: 1</p>';
							 }
function m13() {	document.getElementById('output').innerHTML='<h1>Location: Engine Room Floor</h1><p>You fling the Pokeball at a nearby alien. It screams as it is sucked into the Pokeball, now yours. All the other aliens are so traumatized by seeing their friend and comrade consumed by a tennis ball, that they are stunned. Make another choice.</p><button onclick="m10()">Hide in Engines</button><button onclick="m11()">Cardboard Box</button><button onclick="m12()">Cloaking Device</button>';
	a=1;
							}
function m12() {
	document.getElementById('output').innerHTML='<h1>Location: Engine Room Floor</h1><p>You pull out the cloaking device and click the button, cloaking yourself. The aliens run past the room, completely oblivious to your presence. However, one alien stays behind to guard the room. You need to decide quickly, do you fight, or do you hide?</p><button onclick="m14()">Crowbar</button><button onclick="m15()">Hadouken</button><button onclick="m16()">Black Hole Bomb</button><button onclick="m17()">Hide</button>';
}
function m16() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>... Do I really need to explain why you died?</p>Body Count: 1023</p>';
	
}
function m14() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Yah! Die heavily armored alien with a lazer rifle! Die! My Crowbar is far superior to any of your futuristic weaponry!</p><p>Body Count: 1</p>';
}
function m15() {
	document.getElementById('output').innerHTML='<h1>Location: Hallway</h1><p>You jump out from your hiding place and mash the computer keys. A ball of blue fire forms in your hands and you throw it at the guard. The DM shouts, roll it hit! You get a nat-twenty, and deal double damage! The enemy falls, and you get twenty exp! You flee the room. The DM tells you your alignment is now chaotic evil. You flip off the DM. As a result, and alien patrol rushes around the corner ahead. What do you do?</p><button onclick="m18()">Jedi Mind Trick</button><button onclick="m19()">Ludicrious Speed!</button><button onclick="m20()">Crash Bomb</button><button onclick="m21()">Crash Bandicoot</button>';
}
function m21() {
document.getElementById('output').innerHTML='<h1>Game Over</h1><p>I..wha..I just... WHAT? How on earth did you think summoning a ficticious marsupial was going to save you against lazer fire? And guess what? The Marsupial isn\'t even added to your body count, as it took off towards the nearest wooden crate, leaving you to perish! YAY!</p><p>Body Count: 1</p>';
}
function m20() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Did you know Crash Bombs are delayed reactions? Yep, it takes roughly five seconds for a Crash Bomb to detonate after being fired! So, basically, you shot a metal top in their general direction, they shot lazers in your general direction, and then that metal top detonated in both your general directions. So, YAY! Higher body count.</p><p>Body Count: 6</p>';
}
function m19() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>It\'s time to get Sciency! It\'s also time to slow this down. As you can see, as you begin to accelerate, you are now moving faster than the air around you. This means that the air cannot get out of the way, and begins to chemically fuse with the molecules in your face, as the air molecules are continually forced to bombard your unprotected head. Then, as the molecules fuse, and more energy is released, a plasma ball begins to form around your head, as that excess energy is absorbed into the air around you, creating plasma and fire. Now, this ball of plasma and fire expands, as you are still accelerating, and still creating even more friction in the air. At this point, the ball of plasma is as big as the ship itself, having consumed all available oxygen. Then it goes to work on the people within the space ship. That means you, and all your little alien buddies. So, long story short, BOOOOOM!!!!</p><p>Body Count: 1024</p>';
}
function m18() {
	document.getElementById('output').innerHTML='<h1>Location: Escape Pods</h1><p>Apparently, those Aliens were looking for a different human. With your luck, you manage to make it all the way to the escape pods without a problem. However, your luck runs out there. Just as your stepping into an escape pod, a small platoon of aliens burst into the landing bay area, all their rifles trained on you. You\'re so close, merely seconds away from victory. A happy ending. However, the aliens are a little less than happy with that. One lifts a large cylindrical rocket launcher and fires it, leaving you only a few seconds to react.</p><button onclick="m22()">Dodge</button><button onclick="m23()">Rocket Launcher</button><button onclick="m24()">Pokeball</button><button onclick="m25()">Jacket!</button>';
}
function m22() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You leap out of the way of the oncoming rocket in an amazing display of acrobatics and dexterity. And then you turn around and watch in slow motion as the rocket sails calmy right into the escape pod and then detonates, leaving you stranded, surrounded by aliens, in the middle of the spaceship you were working so hard to escape from. What fun!</p><p>Body Count:1</p>';
}
function m23() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>... You do realize that by firing that rocket, the blast range is twice as large, right?</p><p>Body Count: 6</p>';
}
function m25() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>HOW THE FUDGE WAS THAT SUPPOSED TO HELP!?!</p><p>Body Count:2 (+ 1 Jacket)</p>';
}
function m24() {
	document.getElementById('output').innerHTML='';
	if (a != 1) {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>A wild rocket appears! You use a Pokeball. The Rocket escapes! Need I say more...?</p><p>Body Count:2</p>';
	} else {		document.getElementById('output').innerHTML='<h1>Location: Escape Pods</h1><p>You fling the Pokeball at the ground and yell "Alien, I choose you!!!" A perplexed alien bursts out from the ball, directly in the rockets path. The Alien barely has time to widen its eyes as it is engulffed in flames from the rocket\'s detonation, shielding you from harm. You dive into the pod and hit the eject button as you listen to the aliens begin to cry over their fallen (and obliterated) comerade. And with that, you blast off into space...</p><button onclick="m26()">Recieve Ending Score</button>';
	}
}
function m26() {
	document.getElementById('output').innerHTML='<h1>Ending Achieved: Escaped Convict (Neutral Path)</h1><p>Final Body Count: 2</p><p>Killing the alien guarding the Engine Room with the Hadouken (+1 Body)</p><p>Capturing an alien in a Pokeball and then heartlessly using it as a Meat Shield. (+1 Body)</p><p>Ending Note: And so you escape, driving off into the sunset like a wierd cowboy in one of those really old, really AWFUL westerns. (Hey hey, no need to get upset. Just callen it like I \'sees it.) Anyway, you do escape, but you did alert the aliens to your presence as you were escaping. So, who knows. Thanks to your slopiness, you might get captured again. Maybe we\'ll need a sequel... ESCAPE FROM THE SPACESHIP 2: THE UMPIRE STRIKES BACK! And then we\'ll change the name of this one to ESCAPE THE SPACESHIP: A NEW POPE. What\'s that? You say I\'m infringing on copyrighted material? I don\'t know what your talking about...</p><p>Secret Code Letter: A</p>';
}
function m17() {
document.getElementById('output').innerHTML='<h1>Location: Dark Corridor</h1><p>You curl into a little ball within the cloaking field and fall fast asleep. After a little while, you wake up to find the Engine room deserted. You get up, and sneak out into the Hallway. No one is there. You\'re now a bit worried. You begin to run down the corridor, searching for a way out. Suddenly, you hear footsteps coming. An Alien Patrol!</p><button onclick="m27()">Mushroom</button><button onclick="m28()">Bowling Ball</button><button onclick="m29()">Nearest Door</button><button onclick="m30()">Animatronic Suit</button>';
}
function m27() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You pop the Mushroom into your mouth, and suddenly you begin to grow, shoooting upwards, almost doubling in size (also, you start to feel a little high...). However, the Corridor wasn\'t constructed with someone of your bodily proportions in mind, so double in size, whack your head on the roof, and pass out. Hey, look on the bright side! You died high! YAY!</p><p>Body Count:1</p>';
}
function m28() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>How on Earth did you think a bowling ball would help you against an armored platoon of bloodthirsty aliens? Oh well, you do manage to clock one of them in the head with your weapon of choice before you\'re overwhelmed. But hey, guess what? You\'ve introduced the aliens to bowling! You truly are a great human diplomat!</p><p>Body Count:2</p>';
}
function m30() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Fun Fact: Large Stuffed Bear Costumes are not lazer proof. The more you know!</p><p>Body Count:1 (+ 1 Animatronic Suit)</p>';
}
function m29() {
	document.getElementById('output').innerHTML='<h1>Location: Mess Hall</h1><p>You duck into the nearest door, and breath a sigh of relief. Then you turn around. In your haste, you seem to have stumbled into the aliens mess hall. Thirty aliens in full combat armor all sit around, eating their food and talking, currently oblivious to your presence. However, that won\'t last very long. You need to find a way out of this mess...</p><button onclick="m31()">Nuke</button><button onclick="m32()">Shotgun</button><button onclick="m33()">Fire Flower</button><button onclick="m34()">Sneak Past</button>';
}
function m31() {
	if (a=1) {
	 	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>I can\'t belive you thought that would actually work...</p><p>Body Count:1023</p>';
} else {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>I can\'t belive you thought that would actually work...</p><p>Body Count:1024</p>';
}
}
function m32() {	document.getElementById('output').innerHTML='<h1>Location: Mess Hall</h1><p>You pull out the Shotgun and begin to fire upon the aliens. Chaos ensues. Aliens flee left and right, caught off guard. You even notice a large pixelated dog dragging the aliens bodies to you and laying them at your feet. One of the aliens manages to shoot you. However, you don\'t seem to die. INstead, a tiny little number in the top of your screen just goes down by one. Finally, all thirty aliens lie dead. However, one of them managed to sound the alarms.</p><button onclick="m35()">Teleporter</button><button onclick="m36()">Radio for Help</button><button onclick="m37()">Fez and Bowtie</button><button onclick="m38()">Morph Ball</button>';
}
function m33() {
document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Pro Tip: Metal Armor isn\'t flammable</p><p>Body Count:1</p>';
}
function m35() {	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Beam me up, Scottie! Scottie? Scottie!?! "Sorry sir, we can\'t beam you up out of their because _____________ (Insert Stupid Plot Device Here)"</p><p>Body Count:33</p>';
}
function m37() {	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>As cool as Fezzes and Bowties are, they are not lazer proof...</p><p>Body Count:33</p>';
}
function m38() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You curl into a ball and roll under the table, You hear aliens flood into the room, lazers fire, and then silence. The aliens must still be in the room with you. You wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you wait. And you starve.</p><p>Body Count:33</p>';
}
function m36() {
document.getElementById('output').innerHTML='<h1>Location: Mess Hall</h1><p>You pull out an old radio and flip through the channels. You manage to find three. However, now you need to decide which one to call, becuase you only have time for one.</p><button onclick="m39()">Police Box</button><button onclick="m40()">Star Ship Enterprise</button><button onclick="m41()">Toad Brigade</button>';
}
function m40() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Captain\'s log: Stardate: 1973. We picked up a distress signal today. Something about a guy stuck on a spaceship. However, we picked it up while I was monologuing this log in, and he wouldn\'t shut up, so we had to mute him so I could finish this entry. Anyway, on to other matters...</p><p>Body Count:1</p>';
}
function m41() {
	document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Amphibians don\'t speak English, it turns out. </p><p>Body Count:1</p>';
}
function m39() {
	document.getElementById('output').innerHTML='<h1>Location: The Tardis</h1><p>There\'s a whooshing noise, and suddenly a magical police box materializes around you. And this thing is lazer proof!</p><button onclick="m42()">Recieve Ending</button>';
}
function m42() {
		document.getElementById('output').innerHTML='<h1>Ending Achieved: Tardis (Bad Ending)</h1><p>Body Count: 32</p><p>Shooting the Aliens with the Duck Hunt Gun (+ 32 Bodies)</p><p>So... you end up technically escaping the spaceship, so we have to count this as a canon ending. However, it turns out you don\'t have the TARDIS key, so... you\'re stuck. But you did escape the spaceship... Mission Accomplished...?</p><p>Secret Code Letter: i</p>';
}
function m34() {
	document.getElementById('output').innerHTML='<h1>Location: Mess Hall</h1><p>You begin to sneak past the aliens sitting in the Mess Hall. However, one of the Aliens succeeds his perception check, and notices you. All the aliens draw their rifles. It\'s time to act!</p><button onclick="m43()">Speed Shoes</button><button onclick="m44()">Airbending</button><button onclick="m45()">Master Sword</button><button onclick="m46()">Cleaning Cabnet</button>';
}
function m44() {
		document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Turns out it\'s really hard to block lazers with air...</p><p>Body Count:1</p>';
}
function m45() {
		document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Sorry. You can\'t wield the Master Sword. You don\'t have thirteen hearts yet.</p><p>Body Count:1</p>';
}
function m43() {
		document.getElementById('output').innerHTML='<h1>Location: Landing Bay</h1><p>Turns out when they say that you gotta "go fast", they weren\'t kidding. You dash right through the door and out onto the landing bay balcony. You stare out at space longingly. You\'re so close! Now all you need to do is find a way out.</p><button onclick="m47()">Warp Star</button><button onclick="m48()">Chaos Emeralds</button><button onclick="m49()">Gun Ship</button><button onclick="m50()">In-line Skates</button>';
}
function m50() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You put on some In-line skates and start to roll around.  You attempt to grind a rail, only to immediately fall off.  Turns out rail grinding isn\'t nearly as easy as it looks.  The radio doesn\'t even work in space so the one thing that you could have had going is rendered mute.</p><p>Body Count:1</p>';
}
function m47() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Congratulations, that was actually a pretty great idea. The Warp Star moves at light speed and moves out of the way of anything coming at it. You would escape, and the aliens wouldn\'t be able to stop you, due to the speed at which you would be moving. There\'s only one slight problem that you didn\'t take into account when you chose this option...</p><p>YOU CAN\'T BREATHE IN SPAAAAAAAAAAAAAACE</p><p>Body Count:1</p>';
}
function m48() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You blast off at the speed of light. Turns out that\'s pretty dang fast. You crash into the nearest planet, causing an extinction event unlike anything ever seen before. But hey, at least your hair was golden when you died!</p><p>Body Count: 7 Billion</p>';
}
function m46() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Did you know that Amonia and Bleach are poisonous when combined? Oh well, now you do.</p><p>Body Count:33</p>';
}
function m49() {
			document.getElementById('output').innerHTML='<h1>Location: Gunship</h1><p>You jump into the nearest gunship and blast off. The aliens in the hold, unprepared, can do nothing to stop you as you fly away.</p><button onclick="m51()">Recieve Ending</button>';
}
function m51() {
			document.getElementById('output').innerHTML='<h1>Ending Achieved: Pacifist (Good Ending)</h1><p>Body Count: 0</p><p>You fly away, safe from the Aliens, now with a spaceship of your own. So congratulations. Here\'s the Happy Ending.</p><p>Secret Code Letter: d</p>';
}
function m4() {
	document.getElementById('output').innerHTML='<h1>Location: The Hold</h1><p>You flick out the pocketknife and begin to cut the bonds, one by one. You feel a little bad about blunting the greatest sword in history\'s edge on some bindings, but the feeling passes. Finally, with your hands freed, you pull off your blindfold. Your sitting in a large metal room with one door. There is a deep thrum below you, most likely from the engines. Two aliens stand, backs to you, in the room. You need to take out those aliens if you are to escape.</p><button onclick="m55()">Machine Gun</button><button onclick="m56()">Land Mine</button><button onclick="m57()">Lawyer</button><button onclick="m58()">Mirror</button>';
}
function m55() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Ricochet Definition:</p><p>Verb: When a bullet, shell, or other projectile, rebounds off a surface.</p><p>Body Count:3</p>';
}
function m56() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You do realize that for a land mine to activate someone needs to step on it?</p><p>Body Count:1</p>';
}
function m57() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>As annoying and terrifying as lawyers are, they are not lazer proof, it turns out.</p><p>Body Count:2</p>';
}

function m58() {
	document.getElementById('output').innerHTML='<h1>Location: The Hold</h1><p>Mirror Mirror on the Wall... Will this kill me?</p><p>Apparently not, for as you hold up the mirror, both aliens fire their rifles. Fun fact: Lazers are light based, meaning they rebound off of mirrors. So the two aliens vaporize eachother. However, because this was due to your actions, we\'re still including their deaths in your body count. However, your victory is short lived, as the sound of lazer fire has alerted nearby guards to your presence. A platoon of aliens appear in the doorway!</p><button onclick="m59()">Into the Vents</button><button onclick="m60()">Tank</button><button onclick="m61()">Force Lightning</button><button onclick="m62()">Chaos Spear!</button>';
}
function m60() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Ever heard of the law of conservation of mass? Allow me to introduce a new topic to you. The law of conservation of freaking space. Big things don\'t fit in small things. Genius right? Like, for example, if you tried to fit a tank inside a tiny holding cell.</p><p>Body Count:8</p>';
}
function m62() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Turns out screaming at the top of your lungs what your about to do right before you do it is a really really bad idea.</p><p>Body Count:3</p>';
}
function m61() {
	document.getElementById('output').innerHTML='<h1>Location: The Brig</h1><p>Did you know that lightning works really well against aliens in heavy metal armor? Well, if you did, congratulations, that\'s pretty smart. And if you were the other ninety-percent of people who chose this option because they other ones sounded unreliable, well, at least you learned something new! You zap the alien patrol, their bodies crumpling a desintegration beneath your lightning attack. As their bodies fall to the floor, you burst out into the hallway, finally free of your holding cell. However, the aliens aren\'t to happy about this. A voice blares over the speakers "Attention. Prisoner escape. All doors on lock down!" And as that horrible voice blares, metal doors slide down all around you. You need to escape, and fast!</p><button onclick="m63()">Time Stop</button><button onclick="m64()">WaveDash</button><button onclick="m65()">Walk Calmly</button><button onclick="m66()">Judo Roll</button>';
}
function m63() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Did you know that by stopping time, you freeze yourself too? Yah. It\'s a thing.</p><p>Body Count:11</p>';
}
function m64() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Have you ever tried to change your momentum and direction mid-air? Trust me, it\'s harder than it looks...</p><p>Body Count:11</p>';
}
function m66() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You roll under the door with the skill of a Judo Master. Only problem is the roll involves a lot of spinning, making you incredibly dizzy, and unprepared for the alien platoon waiting on the other side of the doors.</p><p>Body Count:11</p>';
}
function m65() {
	document.getElementById('output').innerHTML='<h1>Location: The Brig Control Room</h1><p>You calmly saunter through the door like the total bad-ass you always knew you could be. However, you are unprepared for the alien waiting for you on the other side of the door. One grabs you by the neck and holds it\'s lazer rifle to the side of your head. You have a feeling that if you don\'t do something soon, the Janitor may be the next person to be called into this room, to clean up the bloody mess.</p><button onclick="m67()">Devine Intervention</button><button onclick="m68()">Skunk</button><button onclick="m69()">KaMeHaMeHA!</button><button onclick="m70()">Force Field</button>';
}
function m70() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Did you know Force Fields protect people standing next to you too? Isn\'t that great?</p><p>Body Count:11</p>';
}
function m69() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Looks like you took to long preparing the attack and saying it\'s name. The aliens just blew your head off cause they were sick of your voice!</p><p>Body Count:11</p>';
}
function m68() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Aliens don\'t have noses. You do.</p><p>Body Count:11 (+ 1 Skunk)</p>';
}
function m67() {
	document.getElementById('output').innerHTML='<h1>Location: The Hallway</h1><p>You pray to the creator of the game. And the creator of the game hears your pleas! (Wasn\'t that convenient?) The Aliens gun jams. The Alien pulls it back from your head to examine it. Sudennly, the gun explodes, launching the alien against a nearby crank. (Wasn\'t that Convenient?) But it turns out that crank was the crank to all the other prisoners cells in the brig! Alarms sound as ever cell in the prison breaks open and out poor the thousand of deranged aliens and humans held within the brigs walls. As chaos ensues, you manage to sneak out and down the hallway. there, you see a side passageway leading to a set of stairs, However, as you begin to climb them, an alien platoon decends upon you!</p><button onclick="m71()">High Jump</button><button onclick="m72()">Sling Shot</button><button onclick="m73()">Antimatter Rifle</button><button onclick="m74()">Pikachu</button>';
}
function m71() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Ever heard of those wonderful things called ceilings?</p><p>Body Count:214 (+1 Hole in the ceiling)</p>';
}
function m72() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Never Fear! I, the great player, will slay you incrediby overpowered, heavily armed soldiers with my dinky little sling shot! Wait, what? Your armor is immune to acorns? Damn.</p><p>Body Count:214</p>';
}
function m73() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Time to get sciency(er). Antimatter, as we refer to it, is actually very much like matter. The only difference is that the molecules in Antimatter have their charges flipped. This means that the nucleus of these atoms is of negative charge, while the electrons rotating around their nucleus\'s are actually positrons. Hence the name "anti", as anti is the latin root for oppisite. Now, normally, this little charge flip isn\'t so much of a problem, unless, of course, the molecule of antimatter is forced to collide with posimatter, or the matter we are used to seeing. The result is a nightmare, as all energy contained within the atoms breaks free, and all the mass within the explosion is blasted away, leaving only its energy. The resulting explosion will decimate anything within miles around. For a rough estimate of how much destruction you have just caused, an antimatter shot the size of a bread box creates an explosion the size of the freakin moon. So... yah. Cool Fireworks Bro!</p><p>Body Count:1024</p>';
}
function m74() {
	document.getElementById('output').innerHTML='<h1>Location: The Bridge</h1><p>You reach into your pocket and pull out... a rat? With nothing better to do, you fling the yellow rodent at the aliens with a throw that would make quarterbacks proud. The resulting carnage not only chills you to the very core, but also shorts out all the power in the surrounding area. Luckily, nearby, you hear a clicking and a whir, and a nearby area lights up. You dash into the room, eager to escape from the darkness. Only, as you dash into the room, you hear a mechanical voice. "Drop your weapons and surrender, human! Any final requests?" The ships A.I. has found you, and you probably have twenty seconds before the A.I. uses the security systems to erradiate you. Luckily, the A.I. can most likely hear you. Time to pull some last minute awesome stuff!</p><button onclick="m75()">Ask for Pi</button><button onclick="m76()">EMP Bomb</button><button onclick="m77()">Potted Plant</button><button onclick="m78()">Computer Virus</button>';
}
function m76() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Nice Job! A.I.\'s work on Electromagnetic impulses. You know what also works on Electromagnetic impulses? You!</p><p>Body Count:257</p>';
}
function m75() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>A mechanical arm sprouts from the wall and hands you a nice fluffy pastry. Then the whole hallway slams shut on you. Turns out that pi and pie sound the same when you say them out loud!</p><p>Body Count:256</p>';
}
function m78() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Turns out to upload a computer virus, you kind of need to have a place to upload it to.</p><p>Body Count:256</p>';
}
function m77() {
	document.getElementById('output').innerHTML='<h1>Location: The Bridge</h1><p>You pull out a potted plant from your pocket and kindly ask the A.I. to water it. The A.I. tells you to wait approximately three thousand two hundred and twenty two minutes  for a watering appendage to be installed in the hallway. You drop the plant and run. And dash out onto the command deck of the ship! You stand on a large platform overlooking all of the alien pilots in their seats below you! All around you, alien pilots turn to look at you. This is it. From here you can kill every single on of the aliens from this one spot. It\'s time to finish this!</p><button onclick="m79()">Final Smash</button><button onclick="m80()">Majora\'s Mask</button><button onclick="m81()">Foresight</button><button onclick="m82()">d20 Dice</button>';
}
function m80() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You pull a grotesque mask from your pocket and place it on your face. Suddenly the person you were, your personality, your beliefs, are all gone. The piece of flesh that stands now before the alien pilots is just that. A puppet. An empty thing being pulled by some other being\'s will. Some of the aliens attempt to flee. Others attempt to fight. Lazers rip through the puppets flesh, but nothing stops it. Letting loose a gutteral cry, the creature raises up its arms, as though to call to something from beyond the heavens. There is a massive crack as the entire ship ruptures, splitting in two, freezing and suffacating everyone on board. And floating among the graveyard of bodies... the puppet lives.</p><p>Body Count:1023</p>';
}
function m81() {https://drive.google.com/drive/my-drive
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Turns out seeing your death before you die can be somewhat distracting.</p><p>Body Count:214</p>';
}
function m82() {
	var c= Math.floor(Math.random(19))+1;
	if (c <= 19) {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Time stops. You pull a tiny golden metal d20 out of your pocket and stare at it. You flip it in the air. It seems to float in the air forever. Then, with a resounding clunk, it hits the ground. You don\'t even get time to stare at it, as lazer fire rips you apart...</p><p>Body Count:214</p>';
} else {
	document.getElementById('output').innerHTML='<h1>Location: The Bridge</h1><p>Time stops. You pull a tiny golden metal d20 out of your pocket and stare at it. You flip it in the air. It seems to float in the air forever. Then, with a resounding clunk, it hits the ground. Suddenly, there is a brilliant flash of light. Time Restarts. Your standing on a grassy field. You look up, and notice the Spaceship. High in the sky, the spaceship floats, it\'s metal hull reflecting the sun\'s light. Suddenly it shakes and explodes, a brilliant fireworks display hanging, suspended in the sky. You look around you, and then back up at the Spaceship.</p><p>"What the Fu-"</p><button onclick="m83()">Recieve Ending<button>';
}
}
function m83() {
	document.getElementById('output').innerHTML='<h1>Ending Achieved: WTF Ending (Good Ending)</h1><p>Body Count:256</p><p>Using the Mirror in the Holding Cell (+2 Bodies)</p><p>Using the chain lightning against the alien platoon (+8 Bodies)</p><p>Allowing an army of hostile probably psychotic prisoners to escape (+213 Bodies)</p><p>Ordering Pikachu to attack within a metal spaceship (+42 Bodies)</p><p>WHAT THE FUDGE? Congratulations. This is the secret ending. You are the only one in literally hundereds of people that will have the chance to see this screen. Anyway, what exactly happened back there... the world may never know.</p><p>Secret Code: a</p>';
}
function m79() {
		document.getElementById('output').innerHTML='<h1>Location: The Bridge</h1><p>Explosions! Death! Carnage! Excitement...? Your blast of destructive energy tears through the bridge, destroying everything in its path. Sadly, the cockpit screen is technically "in it\'s path". The windshield shatters, and all the air floods out of the cockpit sucking you out of the spaceship. You watch as the remains of the massive battleship plunges towards Earth. There is silence. And then a massive explosion shakes the planet below...</p><button onclick="m85()">Recieve Ending</button>';
}
function m85() {
		document.getElementById('output').innerHTML='<h1>Ending Achieved: Extinction Ending (Bad Ending)</h1><p>Body Count:7,000,001,023</p><p>Using the Mirror in the Holding Cell (+2 Bodies)</p><p>Using the chain lightning against the alien platoon (+8 Bodies)</p><p>Allowing an army of hostile probably psychotic prisoners to escape (+213 Bodies)</p><p>Ordering Pikachu to attack within a metal spaceship (+42 Bodies)</p><p>Destroying the Bridge, and letting the air escape (+767 Bodies)</p><p>Letting the Spaceship fall to Earth (+7,000,000,000 Bodies)</p><p>Geez, dude. Talk about anger issues. You just killed literally everyone in the game. That\'s right, every single person. Including yourself. Your slowly suffacating. There\'s enough air to keep you going for a few more seconds, just enough for this to be considered, "Escaping the Spaceship"! Then your going to die, and burn up on atmospheric reentry.</p><p>Secret Code Letter: n</p>';
}
function m59() {
		document.getElementById('output').innerHTML='<h1>Location: The Vents</h1><p>As the alien patrol turns the corner, you scramble for the vent duct nearby. You manage to through yourself into the vent just in time, as arks of lazer fire light up the room behind you. You begin to crawl through the ventilation, desperate to escape your attackers. Naturally, the aliens are not to happy with your current stroke of luck. As you attempt to flee, you here a clanging. Looking back, you see the aliens have thrown some sort of bomb down into the duct behind you!</p><button onclick="m86()">Grenade</button><button onclick="m87()">Cut the Wires</button><button onclick="m88()">Ignore it</button><button onclick="m89()">Chuck it</button>';
}
function m86() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Did you really think that was going to work?</p><p>Body Count:3</p>';
}
function m87() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You cut a wire. Turns out you just cut the wire to the timer, keeping the bomb from exploding. So..yah. Do I really need to explain what happens next?</p><p>Body Count:3</p>';
}
function m89() {
		document.getElementById('output').innerHTML='<h1>Location: The Vents</h1><p>You crawl back through the vent and kick the bomb with all your might. The bomb sails out of the vents and out into the holding cell. You turn and scoot as far as you can. A loud explosion shakes the whole ship. Red lights begin to blare and flash, and a loud wail of a siren. Finally, after ages of crawling in the darkness, you see a bright light up ahead. Another vent exit. As you get close, however, you see a shadow pass in front of the vent. Then another. Then back again. It appears that the aliens know where you are...</p><button onclick="m90()">Dire Wolf</button><button onclick="m91()">Distract</button><button onclick="m92()">Invisibility</button><button onclick="m93()">Cat</button>';
}
function m88() {
	c+=1;
		document.getElementById('output').innerHTML='<h1>Location: The Vents</h1><p>You crawl away. Finally, after ages of crawling in the darkness, you see a bright light up ahead. Another vent exit. As you get close, however, you see a shadow pass in front of the vent. Then another. Then back again. It appears that the aliens know where you are...</p><button onclick="m90()">Dire Wolf</button><button onclick="m91()">Distract</button><button onclick="m92()">Invisibility</button><button onclick="m93()">Cat</button>';
}
function m90() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>I always wanted to be dog food! You\'re so lucky!!</p><p>Body Count:10</p>';
}
function m91() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You chuck a pebble out from within the vent. Well, it turns out pebbles aren\'t exactly common on spaceships...</p><p>Body Count:10</p>';
}
function m92() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You do realize you still need to open the grate, right?</p><p>Body Count:10</p>';
}
function m93() {
			document.getElementById('output').innerHTML='<h1>Location: The Entry Hall</h1><p>You pull out of your pocket a mewling cat. It sits in your warm arms, purring for a long while. Then you heartlessly chuck it out the vent shaft door. You hear the sounds of aliens screaming, lazer fire, and the howling of the little cat. The sounds recede into the distance as the cat flees and the aliens give chase, finally, you sneak out into the hallway. You glance left, then right. Nothing. You begin to move down the silent corridor, carful not to make any noise. Suddenly you hear a hiss behind you. You pivot just in time to see one of the aliens from the patrol, eye goujed out, leap at you!</p><button onclick="m94()">Danger Wrap</button><button onclick="m95()">Deflect</button><button onclick="m96()">Power Pellet</button><button onclick="m97()">Gravity Gun</button>';
}
function m94() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>I can\'t believe you actually chose this option. Either you knew what it was and just decided to take a shot at it, or you were desperate and none of the other options sounded good. So, for those of you who don\'t know what a Danger Wrap is, allow me to explain. The Danger Wrap is not, itslef, a weapon, instead it is a drone. When activated, the drone rises into the air, until it comes into contact with anything solid. It the proceeds self destruct, so that no one may capture it. Why it has these specific things programmed into it, we do simply not know. If you do, please call 1800-666-4296.</p><p>Body Count:12 (+1 Cat)</p>';
}
function m96() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Your mouth isn\'t THAT big.</p><p>Body Count:12 (+1 Cat)</p>';
}
function m95() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You can deflect arrows. You can deflect swords. You can deflect shrapnel. You know what you can\'t deflect? Two hundred pounds of hostile alien, that\'s what!</p><p>Body Count:12 (+1 Cat)</p>';
}
function m97() {
	if (c == 1) {
					document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Your blasted bakcwards by the force of the explosion. Blasted right back into a huge gaping hole. Darn it, looks like a bomb exploded in the vents somewhere, and blew open this part of the ship. If only some had stopped it!</p><p>Body Count:12 (+1 Cat)</p>';
	} else {
			document.getElementById('output').innerHTML='<h1>Location: The Vents</h1><p>Okay, time for some science trivia before we get back to te game. Basically how gravity works is that third dimensional objects cause indents in the fourth dimension. If that doesn\'t make any sense, allow me to try to create an accurate representation of what gravity is. So, you have a picnic blanket strung tawt between two tables. THen, you drop a bowling ball onto that blanket. Because of how much mass is in the ball, it creates an indent in the blanket. Then, any other objects dropped on the blanket of lower mass with roll towards the bowling ball. This is essentially how gravity works, except that the blanket is the fourth dimension of SpaceTIme, and the bowling ball is an object in the third dimension. This is why the Gravity Gun is such a deadly weapon. It creates a small, almost infinetly dense pocket of air for less than a second. Why this is so bad is that anything standing directly in front of the weapon will feel the force of a black hole for one split second. This is because the incredibly dense marble of air is creating a huge rupture in the fourth dimension, tearing and shredding anything in front of it. That is why, when you pull the trigger, there is a flash of light, a horrible howling sound, and then everything within ten feet of the alien is torn into shreds. However, another biproduct of the black hole was the noise, alerting all the aliens in the area to your presence. As you stumble to your feet after the blast, you hear the clip clop of metal boots, as alien patrol after alien patrol rounds the corner, their rifles trained on you.</p><button onclick="m98()">Meteor Storm</button><button onclick="m99()">Companion Cube</button><button onclick="m100()">Duck</button><button onclick="m101()">Diamond Sword</button>';
}
}
function m98() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Warning: Things seen on the menu screen may be larger than they first appear.</p><p>Body Count:1024 (+1 Cat)</p>';
}
function m99() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You pull out a companion cube, and immediatly find yourself infatuated with it. So infatuated, you are completely oblivious to the lazer fire heading towards your face.</p><p>Body Count:13 (+1 Cat and +1 Companion Cube)</p>';
}
function m101() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You draw a glorious diamond sword. Then you realize to use it, you actually need to hit someone. Dude, why\'d you bring a sword to a gun fight?</p><p>Body Count:13 (+1 Cat)</p>';
}
function m100() {
			document.getElementById('output').innerHTML='<h1>Location: The Entry Hall</h1><p>You duck as lazer fire arcs above you. You hear screams as aliens fall, slain by their own comrades. For several moments, chaos engulfes the hallway. Then, a deep voice echoes through the hallway. "Stop!" You glance up. The crowd parts as a huge alien in a sweeping red cloak walks forward, his hands glowing red with eldritch energy. It turns and looks at you. "You have been a curse upon our people for far too long, {Insert Name}. It is time to meet your end." The figure begins to float into the air. "Any last words before I blast your stupid carcass into dust?"</p><input id="force"><button onclick="m102()">Z-Saber</button><button onclick="m103()">Finger Guns</button><button onclick="m104()">Zergling Swarm</button><button onclick="m105()">Bad Puns</button><button onclick="m106()">Answer</button>';
}
function m103() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You point at him and begin waving your hands around. He stares at you blankly for several long minutes. Then, you promptly desintigrate.</p><p>Body Count:72 (+1 Cat)</p>';
}
function m104() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>He can fly. Zerglings can\'t. And neither can you.</p><p>Body Count:72 (+1 Cat)</p>';
}
function m105() {
			document.getElementById('output').innerHTML='<h1>Game Over</h1><p>Alien diplomat, you are not.</p><p>Body Count:72 (+1 Cat)</p>';
}
function m102() {
			document.getElementById('output').innerHTML='<h1>Location: The Throne Room</h1><p>You draw a glowing green lazer sword as the alien emporer rises into the air. You dodge left, then right, as fire rains down around you. Suddenly the alien leader dives at you, hands smoking with power. You jump into the air and spin the blade in a circle, rising as you spin. The blow lands squarely in the heart of the emporer. He screams, and falls to the ground. There is silence, and then all the aliens bow before you.</p><button onclick="m107()">Recieve Ending</button>';
}
function m107() {
			document.getElementById('output').innerHTML='<h1>Ending Achieved: Crusade Ending (Neutral Ending)</h1><p>Body Count:72 (+1 Cat)</p><p>Use the Mirror to deflect the lazers (+2 Bodies)</p><p>Kick the bomb back, blowing up an alien platoon (+9 Bodies)</p><p>Fire a Black hole into an alien(+1 Body)</p><p>Duck (+69 Bodies)</p><p>Heartlessly sacrifice a poor cat (+1 Cat)</p><p>Herospin the Emperor to death (+1 Body)</p><p>All Hail the new Emporer! Congratulations, you have made it to the first ending of the game. Originally, I programmed merely this ending in. Now, however, there are a total of seven endings in the game. Try to find them all, and you might uncover a secret.</p>';
}
function m106() {
	var force = document.getElementById('force').value;
	if (force !== 'Aidan') {
					document.getElementById('output').innerHTML='<h1>Game Over</h1><p>You offend him. He repays you. The End!</p><p>Body Count:72 (+1 Cat)</p>';
	} else {
		document.getElementById('output').innerHTML='<h1>Location: Behind the Scenes</h1><p>You say "Aidan"! Suddenly, the alien stops walking towards you. "What?" He glares at you. "That wasn\'t in the script, dude!" The alien throws up his hands a stalks off the set. Suddenly, a bunch of men burst out of nowhere, dragging cameras and lighting. You glares at you. "Damn you! Now we have to shoot this scene all over again!" You shrug. All the aliens sigh and stand up, grumbling and complaining about how uncomfortable the make-up feels. And finally, your left alone on stage, as the lights go out...</p><button onclick="m0()">Recieve Ending</button>';
	}
}
function m0() {
	document.getElementById('output').innerHTML='<p>Wow. So... that\'s it. Either you got all the endings and pieced my name together, or you\'re a cheating little bastard. Either way, congratulations! I can\'t believe you got here. And, as your reward, allow me to give you the complete chronicles of every reference in the game!  (Courtesy of John Smith V)</p><li>Half-Life (Crowbar, Gravity Gun)</li><li>Street Fighter (Hadouken)</li><li>Portal (Portal Gun, Companion Cube)</li><li>Metroid (Morph Ball, Gunship)</li><li>Sonic the Hedgehog (Chaos Emeralds, Chaos Spear, Speed Shoes)</li><li>Dragon Ball (Kamehameha)</li><li>Smash Bros (Final Smash, Wavedash)</li><li>The Legend of Zelda (Master Sword, Majora\'s Mask)</li><li>Super Mario (Fire Flower, Mushroom, Toad Brigade)</li><li>Metal Gear (Cardboard Box)</li><li>Ace Attorney (Lawyer)</li><li>Arthurian Legends (Excalibur)</li><li>Fleeing the Compound (Distract)</li><li>Advance Wars (Tank, Rocket Launcher)</li><li>Kirby (Warp Star, High Jump)</li><li>Jet Set Radio (In-Line Skates)</li><li>Pokemon (Pokeball, Pikachu)</li><li>Minecraft (Diamond Sword)</li><li>FNAF (Animatronic Suit)</li><li>Crash Bandicoot (Crash Bandicoot)</li><li>Spaceballs (Ludicrous Speed)</li><li>Star Wars (Force Lightning, Jedi Mind Trick)</li><li>Star Trek (Teleporter, Enterprise)</li><li>Mega Man (Crash Bomb, Black Hole Bomb, Danger Wrap)</li><li>Mega Man Zero (Z-Saber)</li><li>Doctor Who (Tardis, Bowtie and Fez)</li><li>D&D and Pathfinder (D20, Foresight, Meteor Storm)</li><li>Random (Jacket, Potted Plant, A.i.d.a.n.)</li><li>Animial Crossing (Slingshot)</li><li>Pac-Man (Power Pellet)</li><li>Tetris (Tetrimino)</li><li>Star Fox (Smart Bomb)</li><li>Overwatch (Deflect)</li><li>StarCraft (Zergling Swarm)</li>';
}