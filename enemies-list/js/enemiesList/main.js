// Put your code here
const Enemy = {
    FirstName: "",
    LastName: "",
    Offenses: [""],
    IsReallyHated: true,
}
console.log("My Enemies List!")
console.log("----------------")



const GetEnemies = () => {
    // Make a list of Enemy objects
    //  How would you create a collection of enemy objects in JavaScript?
    const enemies = [
        {
            FirstName: "Joshua",
            LastName: "Flowers",
            Offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
            ],
            IsReallyHated: true
        },
        {
            FirstName: "Darth",
            LastName: "Vader",
            Offenses: [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"
            ],
            IsReallyHated: false
        },
        {
            FirstName: "Betty",
            LastName: "Rudelady",
            Offenses: [
                "Phone calls in the theater",
                "Phone calls on the bus",
                "Phone calls in line at the grocery store",
                "Poor conversationalist"
            ],
            IsReallyHated: true
        },
        {
            FirstName: "Leon",
            LastName: "Peck",
            Offenses: [
                "Keeps giving me a hotplate"
            ],
            IsReallyHated: false
        }
    ]

    return enemies;
}

const enemies = GetEnemies()


enemies.forEach(enemy => {
    console.log(`${enemy.FirstName} ${enemy.LastName} ${enemy.IsReallyHated ? "Really, really dislike!" : ""}`)
})