
function items(...arr: string[])
{
    console.log("\nSandwich ordered with : ", ...arr)
}

items("Lettuce")

items("Cucumber","Ketchup","Jalapeno")

items("Mayonise","Sausages")

