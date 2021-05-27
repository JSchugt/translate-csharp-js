using System;
using System.Linq;
using System.Collections.Generic;


List<guest> getGuests()
{
    Dictionary<String, List<guest>> tableset = new Dictionary<string, List<guest>>();
    List<guest> guestList = new List<guest>{
        new guest(
            "Marilyn Monroe",
            "entertainer",
            "(1926 - 1962) American actress, singer, model"
        ),
        new guest(
            "Abraham Lincoln",
            "politician",
            "(1809 - 1865) US President during American civil war"
        ),
        new guest(
            "Martin Luther King",
            "activist",
            "(1929 - 1968)  American civil rights campaigner"
        ),
        new guest(
            "Rosa Parks",
            "activist",
            "(1913 - 2005)  American civil rights activist"
        ),
        new guest(
            "Peter Sellers",
            "entertainer",
            "(1925 - 1980) British actor and comedian"
        ),
        new guest(
            "Alan Turing",
            "computer scientist",
            "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"
        ),
        new guest(
            "Admiral Grace Hopper",
            "computer scientist",
            "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"
        ),
        new guest(
            "Indira Gandhi",
            "politician",
            "(1917 - 1984) Prime Minister of India 1966 - 1977"
        )};
    return guestList;
}
Console.WriteLine(getGuests()[0].name);


tables room = new tables();
foreach (guest item in getGuests())
{
    if (room.table1.Contains(item))
    {
        room.table2.Add(item);
    }
    else
    {
        room.table1.Add(item);
    }
}
Console.WriteLine("Table 1");

foreach (guest item in room.table1)
{
    Console.WriteLine($"{item.name} ({item.occupation}) {item.bio}");
}
Console.WriteLine("Table 2");
foreach (guest item in room.table2)
{
    Console.WriteLine($"{item.name} ({item.occupation}) {item.bio}");
}
public class guest
{
    public guest(string name, string occupation, string bio)
    {
        this.name = name;
        this.occupation = occupation;
        this.bio = bio;
    }
    public string name;
    public string occupation;
    public string bio;
}

public class tables
{
    public List<guest> table1 = new List<guest>();
    public List<guest> table2 = new List<guest>();
}


