let guests5 = ["Ammi", "Sabeen", "Anabia"]

console.log(guests5[0], "! You are invited to dinner.")

console.log(guests5[1], "! You are invited to dinner.")

console.log(guests5[2], "! You are invited to dinner. \n\n")

console.log(guests5[0], "can't make to the dinner. \n\n")

guests5 = ["Nammi", "Sabeen", "Anabia"]

console.log(guests5[1], "! You are invited to dinner.")

console.log(guests5[2], "! You are invited to dinner.")

console.log("\n\nWe found a bigger dinner table.")

guests5.unshift('Ammi')

guests5.splice(2,0,"Addi")

guests5.push("Mami")

console.log(guests5[0], "! You are invited to dinner.")
console.log(guests5[1], "! You are invited to dinner.")
console.log(guests5[2], "! You are invited to dinner.")
console.log(guests5[3], "! You are invited to dinner.")
console.log(guests5[4], "! You are invited to dinner.")
console.log(guests5[5], "! You are invited to dinner.\n\n")

console.log(guests5.length, "people are invited to dinner.")