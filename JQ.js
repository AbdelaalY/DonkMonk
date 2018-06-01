function setup() {
    createCanvas(500, 500);
    background("#000000");
}

var emergency = 0;
var eventText = "";
var input = [];
var enter = ">";
var did = 0;
var display = "";
var direction = 0;
var nothing = "";
var inv = ["hands"];
var D20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var events = [{
   "name": "A WORG IS HERE","what" : "WORG", "specific" : 10, "weak" : "SWORD"},{
   "name": "A TROLL IS HERE","what" : "what", "TROLL" : 14, "weak" : "AXE"},{
   "name": "OOZE IS HERE","what" : "what", "OOZE" : 18, "weak" : "TORCH"},{
   "name": "A DRAGON IS HERE","what" : "what", "DRAGON" : 24, "weak" : "LANCE"}];
var cmd = [{
   "name": "NORTH","action" : "move", "specific" : "north"},{
   "name": "EAST","action" : "move", "specific" : "east"},{
   "name": "N","action" : "move", "specific" : "north"},{
   "name": "E","action" : "move", "specific" : "east"},{
   "name": "S","action" : "move", "specific" : "south"},{
   "name": "W","action" : "move", "specific" : "west"},{
   "name": "SOUTH","action" : "move", "specific" : "south"},{
   "name": "WEST","action" : "move", "specific" : "west"},{
   "name": "LOOK","action" : "look", "specific" : ""},{
   "name": "HELP","action" : "help", "specific" : ""},{
   "name": "TAKE","action" : "take", "specific" : ""},{
   "name": "DROP","action" : "replace", "specific" : ""},{
   "name": "INVENTORY","action" : "all", "specific" : ""},{
   "name": "ATTACK","action" : "attack", "specific" : ""},{
   "name": "INSPECT","action" : "READ", "specific" : ""},{
   "name": "READ","action" : "READ", "specific" : ""},{
   "name": "BACK","action" : "home", "specific" : ""}];
var item = [{
   "name": "BOOK","action" : "", "specific" : "Yeah, I had no idea what to write in this book"},{
   "name": "HAT","action" : "", "specific" : "It is a large fadora"},{
   "name": "JOBE","action" : "", "specific" : "... ~ JOBE ~ ..."},{
   "name": "SWORD","action" : "", "specific" : "Good aginst WORGs I think"},{
   "name": "HAMMER","action" : "", "specific" : "It's hammer time"},{
   "name": "JEWEL","action" : "", "specific" : "Very valuable jewel"},,{
   "name": "GOLD","action" : "", "specific" : "It's oddly heavy"},{
   "name": "AXE","action" : "", "specific" : "Probably could chop a head off"},{
   "name": "TORCH","action" : "", "specific" : "OOOooOOhHHhhHHhh... It's still on fire"},{
   "name": "LANCE","action" : "", "specific" : "Very sturdy and strong enuf to kill a dragon or something"},{
   "name": "CROWN","action" : "", "specific" : "No head to go with it, I'd say it's yours"},{
   "name": "COIN","action" : "", "specific" : "Heads and Tails"},{
   "name": "FADORA","action" : "", "specific" : "I think it might be confortable"},{
   "name": "TREASURE","action" : "", "specific" : "What else do you need to know, it's treasure"},{
   "name": "KNIFE","action" : "", "specific" : "This is a scary sharp knife"},{
   "name": "PAMPHLET","action" : "", "specific" : "Didn't finish this yet"},{
   "name": "TREE","action" : "", "specific" : "Somehow you picked that up"},{
   "name": "PAINTING","action" : "", "specific" : "Valuable and buitiful"},{
   "name": "SCROLL","action" : "", "specific" : "It says you should kill the dragon with the lance or something"},{
   "name": "TAPESTRY","action" : "", "specific" : "Smoothly weaved"},{
   "name": "Þ","action" : "", "specific" : "This is the letter Þ pronounced Þorn or thorn"},{
   "name": ".","action" : "", "specific" : "cool you stole the period off the sentence"}];
var gameState = "'LOOK' To Begin";
var details = "Type 'HELP' for a list of commands";
var QR = "";
var rooms = [{
  "name":"Wonderful Grove",
  "description":"You stand in a buitiful grove surrounded by trees. To the east you can see a clearing that apears to border a large cave entrence.",
  "north":2,
  "east":6,
  "south":5,
  "west":1,
  "spec":"",
  "event":"",
  "contains":[item[16]]},{
    
  "name":"The Forest",
  "description":"You stand in a forest with trees to every side. It apears as if something big came through here heading west.",
  "north":2,
  "east":0,
  "south":5,
  "west":3,
  "spec":"",
  "event": "",
  "contains":[]},{
    
  "name":"The Forest",
  "description":"You stand in a forest with trees to every side.",
  "north":5,
  "east":6,
  "south":0,
  "west":1,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"The Deep Forest",
  "description":"You stand in a deep dark forest with trees to every side.",
  "north":"null",
  "east":1,
  "south":"null",
  "west":"null",
  "spec":"encounter",
  "event":0,
  "contains":[item[1],item[1]]},{
    
  "name":"Gates of Hell",
  "description":"You are dead and you stand before the Gates of Hell",
  "north":"null",
  "east":"null",
  "south":"null",
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name": "The Forest",
  "description":"You stand in a forest with trees to every side.",
  "north":0,
  "east":6,
  "south":2,
  "west":1,
  "spec":"",
  "event":"",
  "contains":[item[17]]},{
    
  "name":"6",
  "description":"",
  "north":2,
  "east":7,
  "south":5,
  "west":0,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"7",
  "description":"",
  "north":"null",
  "east":9,
  "south":"null",
  "west":6,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"8",
  "description":"",
  "north":"null",
  "east":18,
  "south":9,
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"9",
  "description":"",
  "north":8,
  "east":12,
  "south":10,
  "west":7,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"10",
  "description":"",
  "north":9,
  "east":13,
  "south":11,
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"11",
  "description":"",
  "north":10,
  "east":12,
  "south":14,
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"12",
  "description":"",
  "north":"null",
  "east":15,
  "south":11,
  "west":9,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"13",
  "description":"",
  "north":"null",
  "east":16,
  "south":14,
  "west":10,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"14",
  "description":"",
  "north":13,
  "east":21,
  "south":11,
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"15",
  "description":"",
  "north":"null",
  "east":"null",
  "south":16,
  "west":12,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"16",
  "description":"",
  "north":15,
  "east":"null",
  "south":"null",
  "west":13,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"17",
  "description":"",
  "north":18,
  "east":19,
  "south":21,
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"18",
  "description":"",
  "north":"null",
  "east":"null",
  "south":17,
  "west":8,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"19",
  "description":"",
  "north":"null",
  "east":20,
  "south":"null",
  "west":17,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"20",
  "description":"",
  "north":"null",
  "east":"null",
  "south":"null",
  "west":19,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"21",
  "description":"",
  "north":17,
  "east":24,
  "south":23,
  "west":14,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"22",
  "description":"",
  "north":"null",
  "east":"null",
  "south":"null",
  "west":34,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"23",
  "description":"",
  "north":21,
  "east":24,
  "south":27,
  "west":27,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"24",
  "description":"",
  "north":"null",
  "east":25,
  "south":26,
  "west":23,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"25",
  "description":"",
  "north":"null",
  "east":"null",
  "south":29,
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"26",
  "description":"",
  "north":24,
  "east":33,
  "south":32,
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"27",
  "description":"",
  "north":22,
  "east":28,
  "south":30,
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"28",
  "description":"",
  "north":"null",
  "east":32,
  "south":"null",
  "west":27,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"29",
  "description":"",
  "north":25,
  "east":"null",
  "south":33,
  "west":32,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"30",
  "description":"",
  "north":27,
  "east":31,
  "south":"null",
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"31",
  "description":"",
  "north":"null",
  "east":32,
  "south":34,
  "west":30,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"32",
  "description":"",
  "north":28,
  "east":29,
  "south":36,
  "west":31,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"33",
  "description":"",
  "north":29,
  "east":"null",
  "south":37,
  "west":26,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"34",
  "description":"",
  "north":30,
  "east":35,
  "south":"null",
  "west":22,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"35",
  "description":"",
  "north":"null",
  "east":"null",
  "south":"null",
  "west":34,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"36",
  "description":"",
  "north":32,
  "east":37,
  "south":"null",
  "west":31,
  "spec":"",
  "event":"",
  "contains":[]},{
    
  "name":"37",
  "description":"",
  "north":33,
  "east":"null",
  "south":"null",
  "west":36,
  "spec":"",
  "event":"",
  "contains":[]}
];

var currentRoom = rooms[0];
var currentEvent = "";


function keyPressed(){
   if (keyCode == 8) {
     input = shorten(input);
   } else if (keyCode == 13) {
     search(0,0); 
   } else {
    input.push(key);
   }
   display = join(input, nothing);
}

function search(when,how) {
  QR = "";
  did = 0;
  for (i=when;i<=(input.length-1);i++){
    if (input[i] == " "){
      //search
      if (how == 0) {
        for (j=0;j<=(cmd.length-1);j++){
          if (QR == cmd[j].name) {
            does(cmd[j],i);
            did++;
          }
        }
      } else if (how == 1){
        for (k=0;k<=(item.length-1);k++){
          if (QR == item[k].name) {
            takeItem(item[k]);
            did++;
          }
        }
      } else if (how == 4){
        for (k=0;k<=(inv.length-1);k++){
          if (QR == inv[k].name) {
            gameState = inv[k].name;
            details = inv[k].specific;
            did++;
          }
        }
      } else if (how == 2){
        for (j=0;j<=(inv.length-1);j++){
          if (QR == inv[j].name) {
            return inv[j];
            did++;
          }
        }
      } else if (how == 3){
        for (j=0;j<=(events.length-1);j++){
          if (QR == events[j].what) {
            return events[j];
            did++;
          }
        }
      }
      QR = "";
    } else {
      QR = QR + input[i];
    }
  }
  if (how == 0) {
    for (j=0;j<=(cmd.length-1);j++){
      if (QR == cmd[j].name) {
        does(cmd[j],i);
        did++;
      }
    }
  } else if (how == 1){
    for (j=0;j<=(item.length-1);j++){
      if (QR == item[j].name) {
        takeItem(item[j]);
        did++;
      }
    }
  } else if (how == 4){
    for (j=0;j<=(inv.length-1);j++){
      if (QR == inv[j].name) {
        gameState = inv[j].name;
        details = inv[j].specific;
        did++;
      }
    }
  } else if (how == 2){
    for (j=0;j<=(inv.length-1);j++){
      if (QR == inv[j].name) {
        return inv[j];
        did++;
      }
    }
  } else if (how == 3){
    for (j=0;j<=(events.length-1);j++){
      if (QR == events[j].what) {
        return events[j];
        did++;
      }
    }
  }
  if (did < 1){
     gameState = "I don't understand " + display;
     details = "";
     input = [];
     display = "";
     return "null";
  }
}

function fight(ev) {
  if(ev.spec != "win"){
    eventText = ev.name;
    emergency = 5;
    currentEvent = ev;
    enter = " !";
  }
}

function win(){
  currentRoom.event = "";
  eventText = "";
  emergency = 0;
  look();
  enter = ">";
}

function takeItem(what) {
  if(direction == 0) {
    for (h=0;h<=(currentRoom.contains.length-1);h++){
      if(what.name == currentRoom.contains[h].name){
        inv.push(what);
        gameState = ("a " + what.name + " has been added to your inventory");
        if(currentRoom.contains.length !== 1){
          currentRoom.contains.splice(h,1);
        } else {
          currentRoom.contains =[];
        }
        details = "";
        return;
      }
    }
  } else if(direction == 1) {
    for (p=0;p<=(inv.length-1);p++){
      if(what.name == inv[p].name){
        currentRoom.contains.push(what);
        gameState = ("a " + what.name + " has been dropped");
        inv.splice(p,1);
        details = "";
        return;
      }
    }
  }
  gameState = "i don't see a " + what.name;
}


function does(what,when) {
  if(emergency == 5){
    if(what.action == "move"){
      if(random([1,2,3]) == 1){
        move(what);
        eventText = "";
        emergency = 0;
        look();
        if (currentRoom.spec == "encounter"){
          fight(events[currentRoom.event]);
        }
      }  else {
        currentRoom = rooms[4];
        eventText = "DEATH";
        emergency = 0;
        look();
        enter = "-";
      }
      currentEvent = "";
    } else if(what.action == "attack") {
      var roll = random(D20);
      var who = search(0, 3);
      if(who == "null"){
        gameState = "Attack what?";
      } else if(who.what !== currentEvent.what){
        gameState = "I don't see a " + who.what;
      } else if(who.what == currentEvent.what){
        var weapon = search(when, 2);
        if(weapon == "null"){
          gameState = "Attack " + who.what + " with what?";
          details = "I don't have one of those!";
        } else if(weapon.name != currentEvent.weak){
          if(roll == 20){
            win();
            details += " you defeated the " + who.what + " with a critical hit";
          } else if(roll > currentEvent.specific){
            win();
            details += " you defeated the " + who.what;
          } else if(roll == currentEvent.specific){
            win();
            details += " you just barely defeated the " + who.what;
          } else if(roll > (currentEvent.specific - 5)){
            gameState = "You missed, but you dodged " + who.what + "'s counter attack";
          } else if(roll <= (currentEvent.specific - 5)){
            currentRoom = rooms[4];
            eventText = "DEATH";
            emergency = 0;
            look();
            enter = "-";
          }
        } else if(weapon.name == currentEvent.weak){
          if(roll == 20){
            win();
            details += " you defeated the " + who.what + " with a critical hit";
          } else if(roll > (currentEvent.specific-5)){
            win();
            details += " you defeated the " + who.what;
          } else if(roll = (currentEvent.specific-5)){
            win();
            details += " you just barely defeated the " + who.what;
          } else if(roll > ((currentEvent.specific-5) - 5)){
            gameState = "You missed, but you dodged " + who.what + "'s counter attack";
          } else if(roll <= ((currentEvent.specific-5) - 5)){
            currentRoom = rooms[4];
            eventText = "DEATH";
            emergency = 0;
            look();
            enter = "-";
          }
        }
      }
    } else{
      gameState = "you can't " + what.action + "right now, your fighting";
    }
  } else {
    if(what.action == "move"){
      move(what);
      if (currentRoom.spec == "encounter"){
        fight(events[currentRoom.event]);
      }
    } else if(what.action == "READ") {
      if (when == 0){
        gameState = "what should I look at?";
      } else {
        search(when,4);
      }
    } else if(what.action == "take") {
      direction = 0;
      if (when == 0){
        gameState = "take what?";
      } else {
        search(when,1);
      }
    } else if(what.action == "home") {
      
    } else if(what.action == "replace") {
      direction = 1;
      if (when == 0){
        gameState = "replace what?";
      } else {
        search(when,1);
      }
    } else if(what.action == "look") {
      look(what,when);
    } else if(what.action == "help") {
      gameState = "HELP";
      details = "North, East, \nSouth, West, \nTake, Drop, \nLook, Inventory, \nRead, Inspect, \nAttack, Help";
    } else if(what.action == "all") {
      var have = "";
      gameState = "your inventory";
      for (i=1;i<=(inv.length-1);i++){
        have += ("\n" + inv[i].name);
      }
      details = have;
    } 
  }
  input = [];
  display = "";
}

function look(what,when) {
  gameState = currentRoom.name;
  if(currentRoom.contains.length > 1){
    var lump = "";
    for (g=0;g<(currentRoom.contains.length-1);g++){
      lump += (" a " + currentRoom.contains[g].name + ",");
    }
    lump += ("and a " + currentRoom.contains[currentRoom.contains.length-1].name);
    details = (currentRoom.description + ". In this room there is " + lump);
  } else if(currentRoom.contains.length == 1){
    details = (currentRoom.description + ". In this room there is a " + currentRoom.contains[0].name);
  } else {
    details = currentRoom.description;
  }
}


function move(what) {
    if(what.specific == "north"){
      if(currentRoom.north != "null") { currentRoom = rooms[currentRoom.north];
        does(cmd[8],0); 
      } else {
        gameState = "there is no way north";
      }
    } else if(what.specific == "east"){
      if(currentRoom.east != "null") { currentRoom = rooms[currentRoom.east];
        does(cmd[8],0); 
      } else {
        gameState = "there is no way east";
      }
    } else if(what.specific == "south"){
      if(currentRoom.south != "null") { currentRoom = rooms[currentRoom.south];
        does(cmd[8],0); 
      } else {
        gameState = "there is no way south";
      }
    } else if(what.specific == "west"){
      if(currentRoom.west != "null") { currentRoom = rooms[currentRoom.west];
        does(cmd[8],0);
      } else {
        gameState = "there is no way west";
      }
    }
}

function draw(){
  background("#000000");
  fill("#222222");
  rect(0, 450, 500, 50);
  textSize(20);
  fill("#dddddd");
  text(enter, 10, 485);
  text(display, 25, 485);
  text(gameState, 50,50);
  fill("#999999");
  text(details, 50,80,450,300);
  fill("#ff9999");
  text(eventText, 50,150,450,300);
}