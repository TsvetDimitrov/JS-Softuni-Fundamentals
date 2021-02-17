// Define a class Song, which holds the following information about songs: typeList, name and time.
// You will receive the input as an array.
// The first element n will be the number of songs. Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", and the the last element will be Type List / "all".
// Print only the names of the songs which are from that Type List / All songs. 


function songs(input){
    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let n = Number(input.shift());
    let songs = [];

    for(let i = 0; i < n; i++){
        let inputLine = input.shift();
        let [type, name, time] = inputLine.split("_");
        songs.push(new Song (type, name, time));
    }


    let searchType = input.shift();

    if(searchType === "all"){
        printSongs(songs);
    }else{
        let searchedSongs = songs.filter((s) => s.type === searchType);
        printSongs(searchedSongs);
    }

    function printSongs(songs){
        for (const song of songs) {
            console.log(song.name);
        }
    }
}


songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    );
