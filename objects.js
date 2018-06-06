var playlist = new Object({artist: "song"});

<<<<<<< HEAD
function updatePlaylist(playlist, artistName, songTitle) {
=======
var updatePlaylist = function(playlist, artistName, songTitle) {
>>>>>>> 75b8ca6d836e04ad344abefe1c46982b7b7612df
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
<<<<<<< HEAD
  delete playlist[artistName];
=======
  delete playlist.[artistName];
>>>>>>> 75b8ca6d836e04ad344abefe1c46982b7b7612df
  return playlist;
}