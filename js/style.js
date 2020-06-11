"use strict";

///Age
var answers = prompt("How old are you?");

if (answers > 23) {
    confirm("Because you're " + answers + ", you are older than me.")
} else if (answers < 23){
    confirm("Because you're " + answers + ", you are younger than me.")
} else if (answers === 23){
    confirm("Because you're " + answers + ", we are the same age.")
}


///Sport
var sport = prompt("Did I play Division I basketball?").toLowerCase();

if (sport === "yes"){
    confirm("YOU ARE CORRECT! I played at Central Connecticut State University on a full ride scholarship.")
} else if (sport === "no") {
    confirm("Wrong, I got a full ride to Central Connecticut State University.")
}


///Dad
var dad = prompt("Did my dad play in the NFL?").toLowerCase();

if (dad === "yes") {
    confirm("YOU ARE CORRECT! 10th overall pick in '92 to the Seahawks.")
} else if (dad === "no") {
    confirm("Sorry, he actually did for the Seahawks and the Lions.")
}


///Brother
var bro = prompt("Did I break one leg?").toLowerCase();

if (bro === "no") {
    confirm("YOU ARE CORRECT! Broke both, bet you didn't expect that!")
} else if (bro === "yes") {
    confirm("Sorry, I broke two, haha tricked ya.")
}


///Coding
var coding = prompt("Have I been coding for two years?").toLowerCase();

if (coding === "no") {
    confirm("YOU ARE CORRECT!")
} else if (coding === "yes") {
    confirm("Sorry, I just started in March 2020.")
}


///Birthday
var bday = prompt("Was I born on March 19, 1997?").toLowerCase();

if (bday === "yes") {
    confirm("YOU ARE CORRECT!")
} else if (bday === "no") {
    confirm("Sorry, I was born on March 19, 1997.")
}


///Favorite Number
for(i = 0; i < 4; i++){

    var answer = prompt("Can you guess my favorite number? Here's a hint it's between 10 and 52.");

    var i;
    var b = (answer > 33 && answer < 43)
    var c = (answer < 53 && answer > 43)

        if (answer === "43") {
            confirm("YOU GOT IT! 43 is my jersey number!")
            break;
        } else if (answer = b){
            confirm("Almost, you guessed within 10 LESS than my number.")
        } else if (answer = c){
            confirm("Almost, you guessed is within 10 MORE than my number.")
        } else {
            confirm("Please try again, you guessed wrong.")
        } 
        
}
        confirm("The correct answer is 43, that's my jersey number!")



        