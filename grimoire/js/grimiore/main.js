console.log("Do you believe in magic?");
console.log("------------------------");

const SpellBook = {
    Title: "",
    Spells: [""]
}

const Spell = {
    Name: "",
    IsEvil: true,
    EnergyReqired: 0.0,
}

const GetAllSpells = () => {
    let allSpells = [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyReqired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyReqired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyReqired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyReqired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyReqired: 2921.5
        }
    ];

    return allSpells;
}
const MakeEvilSpellBook = (allSpells) => {
    let evilBook = {
        Title: "",
        Spells: [""]
    }
    evilBook.Title = "Evil Book";
    for (let i = 0; i < allSpells.length; i++) {
        if (allSpells[i].IsEvil) {

        }
        evilBook.Spells.push(allSpells[i])

    }
    return evilBook;
}


const MakeGoodSpellBook = (allSpells) => {
    let goodBook = {
        Title: "",
        Spells: [""]
    }
    goodBook.Title = "Good Book";
    for (let i = 0; i < allSpells.length; i++) {
        if (!allSpells[i].IsEvil) {

            goodBook.Spells.push(allSpells[i])
        }

    }
    return goodBook;
}


const DisplaySpellBook = (book) => {
    console.log(book.Title);
    book.Spells.forEach(element => { console.log(element.Name) })
}
let allSpells = GetAllSpells();
let goodBook = MakeGoodSpellBook(allSpells);
let evilBook = MakeEvilSpellBook(allSpells);
DisplaySpellBook(goodBook);
console.log();
DisplaySpellBook(evilBook);








