
let current_users = ['Ali', 'Samir', 'Shakir', 'Bashir', 'Sarim']

let new_users = ['Zubair', 'Samir', 'Shakir', 'Zahid', 'Basit'] 

let check = false

for (let i = 0; i < new_users.length; i++)
{
    for(let j =0; j < current_users.length; j++)
    {
        check = new_users[i] === current_users[i-j]

        if(!check)
        {
            console.log(new_users[i], " username is available.")
            j = new_users.length;
        }
        else if(check)
        {
            console.log(new_users[i], " will need to enter a new username.")
            j = new_users.length; 
        
        }

        
    }
    
     
}