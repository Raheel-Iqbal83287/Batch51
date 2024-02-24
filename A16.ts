let guests3 = ["Ammi", "Sabeen", "Anabia"]

console.log(guests3[0], "! You are invited to dinner.")

console.log(guests3[1], "! You are invited to dinner.")

console.log(guests3[2], "! You are invited to dinner. \n\n")

console.log(guests3[0], "can't make to the dinner. \n\n")

guests3 = ["Nammi", "Sabeen", "Anabia"]

console.log(guests3[1], "! You are invited to dinner.")

console.log(guests3[2], "! You are invited to dinner.")

console.log("\n\nWe found a bigger dinner table.")

guests3.unshift('Ammi')

guests3.splice(2,0,"Addi")

guests3.push("Mami")

console.log(guests3[0], "! You are invited to dinner.")
console.log(guests3[1], "! You are invited to dinner.")
console.log(guests3[2], "! You are invited to dinner.")
console.log(guests3[3], "! You are invited to dinner.")
console.log(guests3[4], "! You are invited to dinner.")
console.log(guests3[5], "! You are invited to dinner.")

