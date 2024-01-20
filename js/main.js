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

    let url = "https://www.youtube-nocookie.com/embed/dv5yx1g5j6E?&autoplay=1";
    embed.src=url;   
};

 function chillVids() {
    console.log("pressed the chill button") 
    removePreviousMoodText()
    moodTagline.innerText += 
    "Straight chillin...MEGA chillin...";   
    let url = "https://www.youtube-nocookie.com/embed?v=rPjez8z61rI?&autoplay=1";
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
    
    let url = "https://www.youtube-nocookie.com/embed/85bkCmaOh4o?&autoplay=1";
    embed.src=url;
};

function heavyVids() {
    console.log("pressed the heavyAF button") 
    removePreviousMoodText()
    moodTagline.innerText += 
    "Head Bangin energy";   

    let url = "https://www.youtube-nocookie.com/embed/MA2YTm7qjnE?&autoplay=1";
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
// solomun/kaytranada videos wont embed, need other options
    let url = "https://www.youtube-nocookie.com/embed/bk6Xst6euQk?&autoplay=1";
    embed.src=url;
};


//  new functions need to implement this, more dry

// <!-- HTML: -->
// <!-- Buttons with different onclick events for different video arrays -->
// <button onclick="playRandomVideo('playlist1')">Play Random Video (Playlist 1)</button>
// <button onclick="playRandomVideo('playlist2')">Play Random Video (Playlist 2)</button>

// <!-- JavaScript: -->

// const playRandomVideo = (playlist) => {
//     // Define multiple arrays of YouTube video links
//     const playlists = {
//         'playlist1': [
//             'https://www.youtube.com/watch?v=video1a',
//             'https://www.youtube.com/watch?v=video2a',
//             'https://www.youtube.com/watch?v=video3a',
//             // Add more video links for playlist1
//         ],
//         'playlist2': [
//             'https://www.youtube.com/watch?v=video1b',
//             'https://www.youtube.com/watch?v=video2b',
//             'https://www.youtube.com/watch?v=video3b',
//             // Add more video links for playlist2
//         ],
//         // Add more playlists as needed
//     };

//     // Check if the specified playlist exists
//     if (playlists.hasOwnProperty(playlist)) {
//         // Get the array of video links for the specified playlist
//         const videoLinks = playlists[playlist];

//         // Get a random index from the list
//         const randomIndex = Math.floor(Math.random() * videoLinks.length);

//         // Get the selected video link
//         const selectedVideo = videoLinks[randomIndex];

//         // Open the selected video link in a new tab
//         window.open(selectedVideo, '_blank');
//     } else {
//         console.error('Invalid playlist specified.');
//     }
// };

