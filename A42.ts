
let magicians2 = ["David Blane", "David Copperfield", "Chris Angel"]

function show_magicians2(Array)
{
    magicians2.forEach(element => {
        console.log(element)
    });
}

function make_great()
{
    for(let i=0; i< magicians2.length; i++)
    {
        magicians2[i] = "The Great " + magicians2[i]
    }
}

show_magicians2(magicians2)

make_great()

show_magicians2(magicians2) 