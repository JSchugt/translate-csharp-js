using System;
using System.Linq;
using System.Collections.Generic;
int getRandomInt(int min, int max)
{
    Random num = new Random();
    int res = num.Next(min, max - 1);

    return res;
}
void main()
{

    List<string> insults = new List<string>{
            "You look like what morning breath smells like.",
    "If you tried to give me cpr I would probably throw myself back under water",
    "I am not a fan of you",
    "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
    "I'd rather walk than be on the same plane as you",
    "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
    "Do you have to be so...like that?"
    };
    List<int> indexes = new List<int>() { };

    while (indexes.Count < 3)
    {
        int canidate = getRandomInt(0, insults.Count);
        if (!indexes.Contains(canidate))
        {
            indexes.Add(canidate);
        }
    }
    foreach (int item in indexes)
    {
        Console.WriteLine(insults[item]);
    }
}


main();