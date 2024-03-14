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

//GO BACK button
let visitedUrls = []; // Array to store visited URLs

// Function to navigate back
function goBack() {
  if (visitedUrls.length > 1) {
    visitedUrls.pop(); // Remove the current URL
    const previousUrl = visitedUrls.pop(); // Get the previous URL
    window.location.href = previousUrl; // Navigate to the previous URL
  } else {
    const firstVideoMessageElement =
      document.getElementById("firstVideoMessage");
    firstVideoMessageElement.textContent =
      "This is the first video you selected XD";
  }
}

// Function to add a visited URL to the list
function addVisitedUrl(url) {
  visitedUrls.push(url);
}
