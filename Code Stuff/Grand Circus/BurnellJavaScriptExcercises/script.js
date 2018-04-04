// for loop
function forLoop() {
    var greeting = "Enter A Number";
    var num = prompt(greeting);
    var sum = 0;

    for (i = 1; i <= num; i++) {
        sum += i;
    }
    console.log("The sum of your number is:" + sum);
}

// do while loop

function doWhileLoop() {
    var wordsArray = [];
    var word = "";
    var x = prompt("do you want to play a game?");

    do {
        word = prompt("enter a word");
        wordsArray.push(word);
        x = prompt("do you want to play again");
    } while (x !== "no");
    console.log(wordsArray);
}
// while loop

function whileLoop() {
    var namePrompt = prompt("would you like to print your name?");
    var i = 1;
    if (namePrompt == "yes") {
        var name = prompt("what is your name");
    }
    var ans = "hello, my name is " + name;
    console.log(ans);
    var again = prompt("would you like to print your name again?");
    while (again !== "no") {
        again = prompt("would you like to print this again?");
        var exp = "!".repeat(i);
        var fullName = ans + exp;
        console.log(fullName);
        i++;
    }
}

// exercise 4
// if, else if, else

function ifElse() {
    var morning = "Since it is morning, you should be eating breakfast. We suggest eggs and toast";
    var noon = "Since it is noon, you should be eating lunch. We suggest a salad";
    var evening = "Since it is evening, you should be eating dinner. We suggest chicken and rice.";

    var x = prompt("What time of day is it? morning, noon, or evening?");
    var y = x.toLowerCase();
    console.log(y);
    if (y == "morning") {
        console.log(morning);
    } else if (y == "noon") {
        console.log(noon);
    } else {
        console.log(evening);
    }
}

// exercise 4
// Switch Statment (just because)

function switchStatement() {
    var x = prompt("What time of day is it? morning, noon, or evening?");
    switch (x.toLowerCase()) {
        case "morning":
            morning = "Since it is morning, you should be eating breakfast. We suggest eggs and toast";
            console.log(morning);
            break;
        case "noon":
            noon = "Since it is noon, you should be eating lunch. We suggest a salad";
            console.log(noon);
            break;
        case "evening":
            evening = "Since it is evening, you should be eating dinner. We suggest chicken and rice.";
            console.log(evening);
    }
}