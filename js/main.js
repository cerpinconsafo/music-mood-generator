// //  newer JS
//still need to update ALL buttons again and make sure each video will work, currently having trouble with TRAPPIN IN JAPAN, and trying to see if its that video alone or what

const urls = {
  phonkBut: ["UtlwUJpJchA", "9n4yKwRnCTE", "T6w7MABthn4", "goWhGZGl0Qo"],
  chillBut: [
    "rPjez8z61rI",
    "jfKfPfyJRdk",
    "lP26UCnoH9s",
    "JqLIV9QzYt8",
    "DTdtjXRq5KM",
  ],
  zoneBut: ["F9L4q-0Pi4E", "4PdDI2swEaw", "9FllUz2Xm68"],
  gameBut: ["DJ_wEoW8Qcg"],
  miamiBut: ["85bkCmaOh4o"],
  heavyBut: ["MA2YTm7qjnE"],
  mindBut: ["zjJB_dMuEtY"],
  fourBut: ["bk6Xst6euQk"],
};

const moodTagLines = {
  phonkBut: "Yaooooo, Check out this Phonky shiiiii...",
  chillBut: "Straight chillin...MEGA chillin...",
  zoneBut: "On a futuristic dystopian ride through nostlagic voids.",
  gameBut: "Retro Gamin', no controller breakin",
  miamiBut: "That 'Cruising in a drop down the Miami strip' Vibe",
  heavyBut: "Let the Heavy flow through you...",
  mindBut: "Expand Your M I N D",
  fourBut: "Get Ready To Move Your Body, BBY!",
};

let previousIndex = {};

function selectRandomVideo(event) {
  console.log("Button clicked:", event.target.id);
  const buttonId = event.target.id;
  const videoIds = urls[buttonId];
  if (!videoIds) return; // No videos for this button

  if (!previousIndex.hasOwnProperty(buttonId)) {
    previousIndex[buttonId] = null;
  }
  console.log("Embed URL:", embedUrl); // Check the generated embed URL
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * videoIds.length);
  } while (videoIds.length > 1 && randomIndex === previousIndex[buttonId]);

  previousIndex[buttonId] = randomIndex;

  const videoId = videoIds[randomIndex];
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?&autoplay=1`;
  console.log("Embed URL:", embedUrl); // Check the generated embed URL

  // Update the iframe's src attribute directly
  document.getElementById("embed").src = embedUrl;

  // Update mood tagline
  document.getElementById("moodTagLine").textContent = moodTagLines[buttonId];
}

document
  .querySelectorAll(".videoButton")
  .forEach((button) => button.addEventListener("click", selectRandomVideo));
