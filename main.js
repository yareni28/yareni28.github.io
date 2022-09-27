const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

console.log(keys.length);

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play ();
  }
  let myName = "Yareni";
  const nameSpan = document.getElementById('name');
  nameSpan.textContent = myName;
 


  let myAge = 19;
  const ageSpan = document.getElementById('age');
  ageSpan.textContent = myAge;

  let likesMusic = true;
  let likesMusicText;

  if(likesMusic === true) {
    likesMusicText = 'me fascina bts';
  } else {
    likesMusicText = 'No me gusta la banda';
  }

  const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
  const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];


  const likesMusicSpan = document.getElementById ('likesMusic');
  likesMusicSpan.textContent = likesMusicText;


  document.addEventListener('keydown', (e) => {
    //alert('key Pressed');
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1){
      playNote(whiteKeys [whiteKeyIndex]);
    }

    if (blackKeyIndex > -1){
      playNote(blackKeys [blackKeyIndex]);
    }


  });
  

  