
/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


 

/* ----- TYPING EFFECT ----- */
//  var typingEffect = new Typed(".typedText",{
//     strings : ["Designer","Youtuber","Developer"],
//     loop : true,
//     typeSpeed : 100, 
//     backSpeed : 80,
//     backDelay : 2000
//  })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
//  const sr = ScrollReveal({
//         origin: 'top',
//         distance: '80px',
//         duration: 2000,
//         reset: true     
//  })

// /* -- HOME -- */
// sr.reveal('.featured-text-card',{})
// sr.reveal('.featured-name',{delay: 100})
// sr.reveal('.featured-text-info',{delay: 200})
// sr.reveal('.featured-text-btn',{delay: 200})
// sr.reveal('.social_icons',{delay: 200})
// sr.reveal('.featured-image',{delay: 300})


// /* -- PROJECT BOX -- */
// sr.reveal('.project-box',{interval: 200})

// /* -- HEADINGS -- */
// sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
// const srLeft = ScrollReveal({
//   origin: 'left',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// })

// srLeft.reveal('.about-info',{delay: 100})
// srLeft.reveal('.contact-info',{delay: 100})

// /* -- ABOUT SKILLS & FORM BOX -- */
// const srRight = ScrollReveal({
//   origin: 'right',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// })

// srRight.reveal('.skills-box',{delay: 100})
// srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  console.log(nw[i].innerText);
  setTimeout(function() {
		nw[i].className = nw[i].innerText !== '' ? 'letter in' : '';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

