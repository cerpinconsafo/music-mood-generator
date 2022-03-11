/*

UPDATING THIS TO RUN DIFFERENTLY, BUT COMMITTING THE FIRST ITERATION OF THE PROJECT FOLDER.


create 'random mood' buttons

//each button will randomly select from a youtube playlist/livestream to display
    //when one playlist/stream is showing, hide button options
    //show 'TRY ANOTHER FROM THIS MOOD' and 'CHANGE MOOD' button 
        //TRY ANOTHER will pick again from a list of possible playlists/streams


//phonky stuff
    //trapping in japan
        https://www.youtube.com/watch?v=Ax4Y5n4f5K8

        //kaytranada boiler room set https://www.youtube.com/watch?v=-5EQIiabJvk

//mega-chill
    //steezyAF
        https://www.youtube.com/watch?v=xgirCNccI68
    //steezy coffee shop
        https://www.youtube.com/watch?v=-5KAN9_CzSA
    //lofi girl sleep
        https://www.youtube.com/watch?v=DWcJFNfaw9c
    //lofi girl study

//zone out
    //2814 birth of a new day
        https://www.youtube.com/watch?v=F9L4q-0Pi4E
    //2814 rain temple with rain
        https://www.youtube.com/watch?v=-CzO2yqmG9U
    //floral shoppe
        https://www.youtube.com/watch?v=cCq0P509UL4&t=447s
    //telepath angel
        https://www.youtube.com/watch?v=6KU8Iv2QV6k&list=PL-lQgJ3eJ1HveP3tVf4-hnm-NWLekVcEJ&index=29

//retro gaming
    //n64
        https://www.youtube.com/watch?v=DJ_wEoW8Qcg
    //ps1
        https://www.youtube.com/watch?v=lsile6MA2QU
    //snes
        https://www.youtube.com/watch?v=SLgms78JVo0

end comments*/
//
//
//
//button variables
const moodList = document.querySelector('#moodList')
const phonkBut = document.querySelector('#phonkBut')
const chillBut = document.querySelector('#chillBut')
const zoneBut = document.querySelector('#zoneBut')
const gameBut = document.querySelector('#gameBut')
//
//
//
//video section variables 
let video = document.querySelector(".vid");
const phonk = document.querySelector('#phonk');
const chill = document.querySelector('#chill');
const zone = document.querySelector('#zone');
const game = document.querySelector('#game');
// 
// 
// 
//event listeners
phonkBut.addEventListener('click', phonkVids);
chillBut.addEventListener('click', chillVids);
zoneBut.addEventListener('click', zoneVids);
gameBut.addEventListener('click', gameVids);
//
//
//
// functions

//play/pause function
function playPause() {
    
    if (video.paused)
      video.play(); 
    else 
      video.pause();
   }


function phonkVids() {
    
    // phonkBut.classList.add('hidden')
    chill.classList.add('hidden')
    zone.classList.add('hidden')
    game.classList.add('hidden')
    phonk.classList.toggle('hidden')    
    playPause()
};

function chillVids() {
    phonk.classList.add('hidden')
    zone.classList.add('hidden')
    game.classList.add('hidden')
    chill.classList.toggle('hidden') 
};

function zoneVids() {
    phonk.classList.add('hidden')
    chill.classList.add('hidden')
    game.classList.add('hidden')
    zone.classList.toggle('hidden') 
};

function gameVids() {
    phonk.classList.add('hidden')
    chill.classList.add('hidden')
    zone.classList.add('hidden')
    game.classList.toggle('hidden') 
};