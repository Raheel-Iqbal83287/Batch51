
function make_shirts(size=38,message="I love TypeScript")
{
    if(size >= 36 && size <=38)
    {
        console.log("T-shirt size :",size,". Message :", message)
    }
    else
    {
        console.log("T-shirt size :",size,". Message : It is fun to learn.", )
    }
}

make_shirts()
make_shirts(36)
make_shirts(34)
make_shirts(14)

