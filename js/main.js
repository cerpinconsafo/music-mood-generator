// Arrays containing available videos for each MOOD BUTTON
const urls = {
  phonkBut: ["UtlwUJpJchA", "9n4yKwRnCTE", "T6w7MABthn4", "goWhGZGl0Qo"],
  chillBut: [
    "rPjez8z61rI",
    "jfKfPfyJRdk",
    "lP26UCnoH9s",
    "JqLIV9QzYt8",
    "DTdtjXRq5KM",
    "zKkV12wiimg",
    "dJTUe_WDgro",
  ],
  zoneBut: [
    "F9L4q-0Pi4E",
    "4PdDI2swEaw",
    "9FllUz2Xm68",
    "fBhz9bNmnJk",
    "RIwvpw7B26U",
    "gfo2BhaUr6A",
    "g_As36EVimY",
  ],
  gameBut: [
    "DJ_wEoW8Qcg",
    "15bZlN0LrFg",
    "x6_7AmbgYsg",
    "3ag0EQKvqmc",
    "m8v2zBK_OE4",
    "f-Ic9feSwcg",
    "kGTDtAqruEs",
    "jatmXfImeq8",
    "bHUvykXL8Og",
  ],
  miamiBut: ["85bkCmaOh4o", "D3xKNk5WqJ8", "WI4-HUn8dFc", "BfPWJij5e98"],
  heavyBut: ["MA2YTm7qjnE"],
  mindBut: ["zjJB_dMuEtY"],
  fourBut: ["bk6Xst6euQk"],
};

// Tagline Text to display for each mood
const moodTagLines = {
  phonkBut: "Yaooooo, Check out this Phonky shiiiii...",
  chillBut: "Straight chillin...MEGA chillin...",
  zoneBut: "On a futuristic dystopian ride through nostalgic voids.",
  gameBut: "Retro Gamin', no controller breakin'",
  miamiBut: "That 'Cruising in a drop down the Miami strip' Vibe",
  heavyBut: "Let the Heavy flow through you...",
  mindBut: "Expand Your M I N D",
  fourBut: "Get Ready To Move Your Body, BBY!",
};

let previousIndex = {};
let visitedUrls = []; // Array to store visited video IDs

// Event Listener for mood button click
document
  .querySelectorAll(".videoButton")
  .forEach((button) => button.addEventListener("click", selectRandomVideo));

function selectRandomVideo(event) {
  console.log("Button clicked:", event.target.id);
  const buttonId = event.target.id;
  const videoIds = urls[buttonId];

  // No videos for this button
  if (!videoIds) return;

  // Check to avoid getting the same video result
  if (!previousIndex.hasOwnProperty(buttonId)) {
    previousIndex[buttonId] = null;
  }
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * videoIds.length);
  } while (videoIds.length > 1 && randomIndex === previousIndex[buttonId]);

  previousIndex[buttonId] = randomIndex;

  const videoId = videoIds[randomIndex];
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?&autoplay=1`;

  // Update the iframe's src attribute directly
  document.getElementById("embed").src = embedUrl;

  // Update mood tagline
  document.getElementById("moodTagLine").textContent = moodTagLines[buttonId];

  // Add the selected video ID to visitedUrls and manage the Previous Video button visibility
  addVisitedUrl(videoId);
}

// Function to add a visited video ID to the list and manage the Previous Video button visibility
function addVisitedUrl(videoId) {
  visitedUrls.push(videoId);

  const previousVideoBut = document.getElementById("previousVideoBut");
  if (visitedUrls.length > 1) {
    previousVideoBut.style.display = "inline-block";
  } else {
    previousVideoBut.style.display = "none";
  }
}

// Function to navigate back to the previous video
function previousVideo() {
  if (visitedUrls.length > 1) {
    visitedUrls.pop(); // Remove the current URL
    const previousVideoId = visitedUrls[visitedUrls.length - 1]; // Get the previous video ID
    const embedUrl = `https://www.youtube-nocookie.com/embed/${previousVideoId}?&autoplay=1`;
    document.getElementById("embed").src = embedUrl; // Navigate to the previous video
  } else {
    // Optional: Display a message or hide the button if there's no previous video
    document.getElementById("firstVideoMessage").textContent =
      "This is the first video you selected XD";
  }
}

// Ensure the previousVideo function is correctly tied to your Previous Video button's onclick event in your HTML.
