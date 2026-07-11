//DINO FACT GENERATOR
const facts = [
    "The T-Rex in Jurassic Park was 40 feet long and weighed 7-8 tons.",
    "Velociraptors in the film are actually based on Deinonychus - real raptors were turkey-sized!",
    "The T-Rex roar was created from baby elephant, alligator, and tiger sounds.",
    "Spinosaurus was larger than T-Rex and killed one in Jurassic Park III.",
    "The Dilophosaurus in the film had a frill and could spit venom - fiction added for drama.",
    "Compsognathus were venomous in The Lost World - also fictional.",
    "The 'ripple in the water cup' scene was made by pulling a guitar string under the car.",
    "The T-Rex animatronic weighed 9 tons and was 40 feet long.",
    "Real velociraptors had feathers, unlike the movie versions.",
    "Pteranodons are not dinosaurs - they're flying reptiles called pterosaurs.",
    "Brachiosaurus was the first dinosaur seen in Jurassic Park.",
    "Robert Muldoon's last words 'Clever girl' are one of the most famous quotes in cinema.",
    "The kitchen scene with the raptors was inspired by a nightmare the screenwriter had.",
    "Jurassic Park (1993) cost $63 million to make and grossed over $1 billion.",
    "The Spinosaurus sail is unique among dinosaurs - no other dinosaur had a similar feature."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factText = document.getElementById('factText');
    if (factText) {
        factText.innerHTML = '<i class="fas fa-lightbulb"></i> ' + facts[randomIndex];
    }
}

//DROPDOWN CONTROLS 
//Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-toggle').forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }
});

//Close other dropdowns when opening one
document.querySelectorAll('.dropdown-toggle').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.querySelectorAll('.dropdown-toggle').forEach(function(otherCheckbox) {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

// ===== TYPEWRITER EFFECT FOR HERO TITLE =====
function typewriterEffect(element, text, speed = 100, callback) {
    let i = 0;
    element.textContent = '';
    element.classList.remove('typing-complete');
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Typing complete
            element.classList.add('typing-complete');
            if (callback) callback();
        }
    }
    
    type();
}

// Start typewriter when page loads
document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.getElementById('typewriter-title');
    if (titleElement) {
        const fullText = 'Welcome to Jurassic Park';
        typewriterEffect(titleElement, fullText, 100);
    }
});


// Hamburger menu toggle
function toggleHamburger() {
  const nav = document.querySelector('.banner-nav');
  nav.classList.toggle('hamburger-open');
}

// Close hamburger when clicking outside (optional)
document.addEventListener('click', function(event) {
  const nav = document.querySelector('.banner-nav');
  const hamburger = document.querySelector('.hamburger-icon');
  
  if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
    nav.classList.remove('hamburger-open');
  }
});


// Mutual exclusive audio - stops other tracks when one plays
document.addEventListener('DOMContentLoaded', function() {
  const audioPlayers = document.querySelectorAll('.styled-audio');
  
  audioPlayers.forEach(function(player) {
    player.addEventListener('play', function() {
      audioPlayers.forEach(function(otherPlayer) {
        if (otherPlayer !== player) {
          otherPlayer.pause();
        }
      });
    });
  });
});

