// Define the make_album function and creating object
function make_album(artist_name: string , album_tittle : string , tracks? : number){
      let album: {artist: string , tittle : string, tracks? :number} = {
         artist : artist_name, 
         tittle: album_tittle,
      };

      if (tracks !==  undefined ){
         album.tracks = tracks;
      }

      return album;
}

// Calling  three functions and creating three variables with different values

let album1 = make_album("Asad" , "Album tittle 1");

let album2 = make_album("Hassan" , "Album tittle 2");

let album3 = make_album("Hussain" , "Album tittle 3" , 17);

// print values of our project created by function

console.log(album1);

console.log(album2);

console.log(album3);


