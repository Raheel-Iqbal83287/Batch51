

let magicians3 = ["David Blane", "David Copperfield", "Chris Angel"]

let copyArr : string[]

function show_magicians3(Array, Array2)
{
    Array.forEach(element => {
        console.log(element)
    });

    Array2.forEach(element => {
        console.log(element)
    });
}

function make_great2(Array) : Array<string>
{
    for(let i=0; i< Array.length; i++)
    {
        Array[i] = "The Great " + Array[i]
    }
    
    return Array
}

copyArr = make_great2(magicians3.slice())

show_magicians3(magicians3,copyArr)

