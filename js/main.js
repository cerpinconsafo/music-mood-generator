/*

UPDATING THIS TO RUN DIFFERENTLY, BUT COMMITTING THE FIRST ITERATION OF THE PROJECT FOLDER.

//on page load, only show MOOD buttons/list
//on click, will dynamically populate 'vidArea' in HTML with embedded YOUTUBE code
    //depending on the button (mood) clicked, a different URL variable from the moodArray can be inserted into the embed code (I THINK)
*/
//
//
//

//globals IKNOW I KNOW WILL REFACTOR

const moodTagline = document.getElementById("moodTagline");
const embed =  document.getElementById("embed");
//
//
//

//button variables

const phonkBut = document.querySelector('#phonkBut')
const chillBut = document.querySelector('#chillBut')
const zoneBut = document.querySelector('#zoneBut')
const gameBut = document.querySelector('#gameBut')
const miamiBut = document.querySelector('#miamiBut')
const heavyBut = document.querySelector('#heavyBut')
const mindBut = document.querySelector('#mindBut')
const fourBut = document.querySelector('#fourBut')
//
//
//

//event listeners

phonkBut.addEventListener('click', phonkVids);
chillBut.addEventListener('click', chillVids);
zoneBut.addEventListener('click', zoneVids);
gameBut.addEventListener('click', gameVids);
miamiBut.addEventListener('click', miamiVids);
heavyBut.addEventListener('click', heavyVids);
mindBut.addEventListener('click', mindVids);
fourBut.addEventListener('click', fourVids);
//
//
//

// functions

function removePreviousMoodText() {
    moodTagline.innerText= "";
};

function phonkVids() {   

    console.log("pressed the Phonk button") 
    removePreviousMoodText()
    moodTagline.innerText += 
    "Yaooooo, Check out this Phonky shiiiii...";   

    let url = "https://www.youtube-nocookie.com/embed/Ax4Y5n4f5K8?&autoplay=1";
    embed.src=url;   
};

 function chillVids() {
    console.log("pressed the chill button") 
    removePreviousMoodText()
    moodTagline.innerText += 
    "Straight chillin...MEGA chillin...";   

    let url = "https://www.youtube-nocookie.com/embed/xgirCNccI68?&autoplay=1";
    embed.src=url;  
};

function zoneVids() {
    console.log("pressed the zone button") 
    removePreviousMoodText()
    moodTagline.innerText += 
    "On a futuristic dystopian ride through nostlagic voids";   

    let url = "https://www.youtube-nocookie.com/embed/F9L4q-0Pi4E?&autoplay=1";
    embed.src=url;  
};

function gameVids() {
    console.log("pressed the game button") 
    removePreviousMoodText()
    moodTagline.innerText += 
    "Retro Gamin', but for your ears";   

    let url = "https://www.youtube-nocookie.com/embed/DJ_wEoW8Qcg?&autoplay=1";
    embed.src=url;
};

function miamiVids() {
    console.log("pressed the game button") 
    removePreviousMoodText()
    moodTagline.innerText += 
    "That 'Cruising in a drop down the Miami strip' Vibe";   

    let url = "https://www.youtube-nocookie.com/embed/DJ_wEoW8Qcg?&autoplay=1";
    embed.src=url;
};
function heavyVids() {
    console.log("pressed the heavyAF button") 
    removePreviousMoodText()
    moodTagline.innerText += 
    "Head Bangin energy";   

    let url = "https://www.youtube-nocookie.com/embed/SZ2WrN93vno?&autoplay=1";
    embed.src=url;
};
function mindVids() {
    console.log("pressed the mind melt button") 
    removePreviousMoodText()
    moodTagline.innerText += 
    "Expand Your M I N D";   

    let url = "https://www.youtube-nocookie.com/embed/zjJB_dMuEtY?&autoplay=1";
    embed.src=url;
};
function fourVids() {
    console.log("pressed the four to floor button") 
    removePreviousMoodText()
    moodTagline.innerText += 
    "Get Ready To Move Your Body, BBY!";   

    let url = "https://www.youtube-nocookie.com/embed/bk6Xst6euQk?&autoplay=1";
    embed.src=url;
};
