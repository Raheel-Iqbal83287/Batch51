
type Cars =
{
    manufacturer: string;
    model: string;
    args: string[];
}

let carr : Cars

function infoCar(man,mod,...arg:string[]): Cars
{
    let car : Cars = {
        manufacturer: man,
        model: mod,
        args: arg,
    }

    return car
}

carr = infoCar("Toyota","1987","ddfdf","sfd")

console.log(carr)

