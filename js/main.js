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
  zoneBut: ["F9L4q-0Pi4E"],
  gameBut: ["VIDEO_ID_GAME_1"],
  miamiBut: ["VIDEO_ID_MIAMI_1"],
  heavyBut: ["VIDEO_ID_HEAVY_1"],
  mindBut: ["VIDEO_ID_MIND_1"],
  fourBut: ["VIDEO_ID_FOUR_1"],
};

const moodTagLines = {
  phonkBut: "Yaooooo, Check out this Phonky shiiiii...",
  chillBut: "Straight chillin...MEGA chillin...",
  zoneBut: "On a futuristic dystopian ride through nostlagic voids",
  gameBut: "Game on! Feel the energy.",
  miamiBut: "Miami vibes coming your way.",
  heavyBut: "Embrace the intensity of heavy beats.",
  mindBut: "Mindful melodies to soothe your soul.",
  fourBut: "Four different flavors, one unique experience.",
};

let previousIndices = {};

function selectRandomVideo(event) {
  const buttonId = event.target.id;
  const videoIds = urls[buttonId];
  if (!videoIds) return; // No videos for this button

  if (!previousIndices.hasOwnProperty(buttonId)) {
    previousIndices[buttonId] = null;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * videoIds.length);
  } while (videoIds.length > 1 && randomIndex === previousIndices[buttonId]);

  previousIndices[buttonId] = randomIndex;

  const videoId = videoIds[randomIndex];
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?&autoplay=1`;

  // Update the iframe's src attribute directly
  document.getElementById("embed").src = embedUrl;

  // Update mood tagline
  document.getElementById("moodTagLine").textContent = moodTagLines[buttonId];
}

document
  .querySelectorAll(".videoButton")
  .forEach((button) => button.addEventListener("click", selectRandomVideo));
