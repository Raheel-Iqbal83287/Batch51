
type album = {
    artist: string;
    album_title: string;
    count: number;
}

//let music_album : album

let music_album1 : album;

let music_album2 : album

let music_album3 : album

interface Dictionary {
    [key: string]: any,
}

function make_album(artist:string,album_title:string,count?:any) : any
{
    music_album1 = {
        artist: this.artist,
        album_title: this.album_title,
        count: this.count
        
    }

    music_album2 = {
        artist: this.artist,
        album_title: this.album_title,
        count: this.count
    }

    music_album3 = {
        artist: this.artist,
        album_title: this.album_title,
        count: this.count
    }

    let dictionary1: Dictionary = {}

    dictionary1['artist'] = music_album1.artist;
    dictionary1['album_title'] = music_album1.album_title;
    if(count != undefined)
    {
        dictionary1['count'] = music_album1.count;
    }

    let dictionary2: Dictionary = {}

    dictionary2[artist] = music_album2.artist;
    dictionary2[album_title] = music_album2.album_title;
    dictionary2[count] = music_album2.count;

    let dictionary3: Dictionary = {}

    dictionary3[artist] = music_album3.artist;
    dictionary3[album_title] = music_album3.album_title;
    dictionary3[count] = music_album3.count;

    //return (music_album1||music_album2||music_album3)

    return dictionary1
    
}

console.log(make_album("Bon Jovi","Home coming"))

console.log(make_album("Madonna","Precious",5))



