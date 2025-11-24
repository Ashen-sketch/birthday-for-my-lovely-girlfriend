// Password
// CHANGE YOUR PASSWORD HERE
const correctPassword = "29112008";

const screen = document.getElementById("password-screen");
const box = document.getElementById("password-box");
const btn = document.getElementById("password-btn");

// When button clicked
btn.addEventListener("click", checkPassword);

// When pressing ENTER
box.addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkPassword();
});

function checkPassword() {
    if (box.value === correctPassword) {
        screen.style.display = "none";  // hide password screen
        document.getElementById("main-box").style.display = "flex"; // SHOW MAIN BOX
        confettiPop();                   // optional confetti
    } else {
        box.style.animation = "shake 0.3s";
        setTimeout(() => box.style.animation = "", 300);
    }
}



// Cute shake animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(style);

// Simple confetti
function confettiPop() {
    for (let i = 0; i < 30; i++) {
        const piece = document.createElement("div");
        piece.style.position = "fixed";
        piece.style.bottom = "0";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.width = "10px";
        piece.style.height = "10px";
        piece.style.background = `hsl(${Math.random() * 360},100%,70%)`;
        piece.style.animation = "fly 1s ease-out forwards";
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 1000);
    }
}

const flyAnim = document.createElement("style");
flyAnim.innerHTML = `
@keyframes fly {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-200px); opacity: 0; }
}`;
document.head.appendChild(flyAnim);



// Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(t => {
t.addEventListener('click', () => {
tabs.forEach(x => x.classList.remove('active'));
contents.forEach(c => c.classList.remove('active'));
t.classList.add('active');
document.getElementById(t.dataset.target).classList.add('active');
});
});


// Image full screen
function setupFullscreenImages() {
    const fullscreen = document.getElementById("img-fullscreen");
    const fsImg = fullscreen.querySelector("img");

    document.querySelectorAll('.pic-grid img').forEach(img => {
        img.addEventListener('click', () => {
            fsImg.src = img.src;        
            fullscreen.style.display = "flex"; 
        });
    });

    fullscreen.addEventListener('click', () => {
        fullscreen.style.display = "none";
    });
}

// Call this function after DOM loads
setupFullscreenImages();



// Music Player
function playPause(id) {
  const audio = document.getElementById(id);

  // Pause all other audios
  const audios = document.querySelectorAll('audio');
  audios.forEach(a => {
    if (a.id !== id) {
      a.pause();
    }
  });
  

  // Play or pause the clicked audio
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
function skipForward(id) {
  const audio = document.getElementById(id);
  audio.currentTime += 10;
  if (audio.currentTime > audio.duration) {
    audio.currentTime = audio.duration;
  }
}

function skipBackward(id) {
  const audio = document.getElementById(id);
  audio.currentTime -= 10;
  if (audio.currentTime < 0) {
    audio.currentTime = 0;
  }
}
// Update the progress bar as the song plays
const audios = document.querySelectorAll('audio');
audios.forEach(audio => {
  audio.addEventListener('timeupdate', () => {
    const progressBar = document.getElementById('progress' + audio.id.slice(-1));
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percent + '%';
  });
});

// Jump to a position when clicking the progress bar
function setProgress(event, id) {
  const audio = document.getElementById(id);
  const container = event.currentTarget;
  const clickX = event.offsetX;
  const width = container.clientWidth;
  audio.currentTime = (clickX / width) * audio.duration;
}

const audio = document.getElementById(id);
  if (audio.currentTime = audio.duration) {
    audio.currentTime = 0;
  }


// Confetti animation (simple)
function confettiPop() {
  
    const count = 50; // more pieces
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
        const piece = document.createElement("div");
        piece.style.position = "fixed";

        // Start from center
        piece.style.left = centerX + "px";
        piece.style.top = centerY + "px";

        // BIGGER confetti
        const size = Math.random() * 25 + 40; // 20–65px
        piece.style.width = size + "px";
        piece.style.height = size + "px";

        // BRIGHTER colors
        piece.style.background = `hsl(${Math.random() * 360}, 100%, 80%)`;

        piece.style.borderRadius = "6px";

        // MORE SPREAD OUT explosion
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 350 + 350; // explosion radius 150–700px
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        piece.style.setProperty("--x", x + "px");
        piece.style.setProperty("--y", y + "px");

        // Animation
        piece.style.animation = "firework-explode 1.2s ease-out forwards";

        document.body.appendChild(piece);

        setTimeout(() => piece.remove(), 1500);
    }
}