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
var bday = prompt("Did I play Division I basketball?").toLowerCase();

if (bday === "yes") {
    confirm("YOU ARE CORRECT!")
} else if (bday === "no") {
    confirm("Sorry, I did with a fullride athletic scholarship.")
}


///Dad
var bday = prompt("Did my dad play in the NFL?").toLowerCase();

if (bday === "yes") {
    confirm("YOU ARE CORRECT!")
} else if (bday === "no") {
    confirm("Sorry, he actually did for the Seahawks and the Lions.")
}


///Brother
var bday = prompt("Do I have three brother?").toLowerCase();

if (bday === "no") {
    confirm("YOU ARE CORRECT!")
} else if (bday === "yes") {
    confirm("Sorry, I only have two brothers.")
}


///Coding
var bday = prompt("Have I been coding for two years?").toLowerCase();

if (bday === "no") {
    confirm("YOU ARE CORRECT!")
} else if (bday === "yes") {
    confirm("Sorry, I just started in March 2020.")
}


///Birthday
var bday = prompt("Was I born on March 19, 1997?").toLowerCase();

if (bday === "yes") {
    confirm("YOU ARE CORRECT!")
} else if (bday === "no") {
    confirm("Sorry, I was born on March 19, 1997.")
}


// Favorite Number
for(i = 0; i < 4; i++){

    var answer = prompt("Can you guess my favorite number? Here's a hint it's between 10 and 52.");

    var i;
    var b = (answer > 33 && answer < 43)
    var c = (answer < 53 && answer > 43)

        if (answer === "43") {
            confirm("YOU GOT IT! 43 is my jersey number!")
        } else if (answer = b){
            confirm("Almost, you guessed within 10 LESS than my number.")
        } else if (answer = c){
            confirm("Almost, you guessed is within 10 MORE than my number.")
        } else {
            confirm("Please try again, you guessed wrong.")
        }
}
            confirm("The correct answer is 43, that's my jersey number!")