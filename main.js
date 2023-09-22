class MoodPlayer {
    constructor() {
      this.moodTagline = document.getElementById("moodTagline");
      this.embed = document.getElementById("embed");
    }
  
    removePreviousMoodText() {
      this.moodTagline.innerText = "";
    }
  
    playVideo(videoUrl) {
      this.removePreviousMoodText();
      this.moodTagline.innerText = videoUrl.tagline;
      this.embed.src = videoUrl.url;
    }
  }
  
  class MoodButton {
    constructor(id, tagline, url) {
      this.button = document.querySelector(id);
      this.tagline = tagline;
      this.url = url;
    }
  
    addClickListener(player) {
      this.button.addEventListener("click", () => {
        player.playVideo({ tagline: this.tagline, url: this.url });
      });
    }
  }
  
  // Create a MoodPlayer instance
  const moodPlayer = new MoodPlayer();
  
  // Create MoodButton instances for different moods
  const moodButtons = [
    new MoodButton('#phonkBut', "Yaooooo, Check out this Phonky shiiiii...", "https://www.youtube-nocookie.com/embed/dv5yx1g5j6E?&autoplay=1"),
    new MoodButton('#chillBut', "Straight chillin...MEGA chillin...", "https://www.youtube.com/embed/j4sJkuOPUP8&autoplay=1"),
    new MoodButton('#zoneBut', "On a futuristic dystopian ride through nostalgic voids", "https://www.youtube-nocookie.com/embed/F9L4q-0Pi4E?&autoplay=1"),
    new MoodButton('#gameBut', "Retro Gamin', but for your ears", "https://www.youtube-nocookie.com/embed/DJ_wEoW8Qcg?&autoplay=1"),
    new MoodButton('#miamiBut', "That 'Cruising in a drop down the Miami strip' Vibe", "https://www.youtube-nocookie.com/embed/85bkCmaOh4o?&autoplay=1"),
    new MoodButton('#heavyBut', "Head Bangin energy", "https://www.youtube-nocookie.com/embed/MA2YTm7qjnE?&autoplay=1"),
    new MoodButton('#mindBut', "Expand Your M I N D", "https://www.youtube-nocookie.com/embed/zjJB_dMuEtY?&autoplay=1"),
    new MoodButton('#fourBut', "Get Ready To Move Your Body, BBY!", "https://www.youtube-nocookie.com/embed/bk6Xst6euQk?&autoplay=1"),
  ];
  
  // Add click listeners for MoodButtons
  moodButtons.forEach((button) => {
    button.addClickListener(moodPlayer);
  });
  