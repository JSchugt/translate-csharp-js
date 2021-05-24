const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
]

console.log("All Place Names");

names.forEach(name => {
    console.log(name);
})

console.log("")

const theNames = names.filter(name => {

    if (!name.search("The")) {
        return name;
    }
});

console.log("'The' Place Names");
theNames.forEach(name => {
    console.log(name)
})