console.log("Let's roll some dice, baby!");
console.log("---------------------------");


// Function to "roll" a die
//  Generates a random number between 1 and 6
//  Constructs a new Die object with the random number as it's value

// This class is used to define a "die" object (a single "dice")
//  Each die will have a value. This value is the number that the
//  die "landed on" when it was rolled.
const Die = (Value) => {
    let dieString = "unk"
    switch (Value) {
        /* "case 1:" is like the following "if" statement
        if (this.Value == 1) {
            dieString = "\u2680";
        }
        */
        case 1:
            dieString = "\u2680"; // These \uXXXX values are fancy unicode characters
            break;
        case 2:
            dieString = "\u2681";
            break;
        case 3:
            dieString = "\u2682";
            break;
        case 4:
            dieString = "\u2683";
            break;
        case 5:
            dieString = "\u2684";
            break;
        case 6:
            dieString = "\u2685";
            break;
    }

    return dieString;
}

const Roll = () => {
    let dieValue = Math.floor(Math.random() * 6) + 1;
    return dieValue;
}


for (let i = 0; i < 10; i++) {
    let die1 = Roll();
    let die2 = Roll();

    let message = `${Die(die1)} + ${Die(die2)} == ${die1 + die2}`;
    if (die1 == die2) {
        message += " DOUBLES!";
    }

    console.log(message);
}

