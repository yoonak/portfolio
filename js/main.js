

//sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

const parallax = document.querySelector('.parallax');
// M.Parallax.init(parallax, {});

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: true,
    transition: 500,
    interval: 6000
    });


//nav bar 
const navBar = document.querySelector('#nav-mobile');
const navList = navBar.querySelectorAll('li a')

navList.forEach(el => {
    el.addEventListener('click', function() {
        navBar.querySelector('.activePage').classList.remove('activePage')
        el.classList.add('activePage');
    });
});

//typing effects
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    //type method
    type() {
        //Current index of Word
        const current = this.wordIndex % this.words.length;
        //Get full text of current word
        const fullTxt = this.words[current];
    
        //Check if deleting is
        if (this.isDeleting) {
            //Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            //Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }
        //Insert txt into txtElement
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

        //type speed
        let typeSpeed = 100;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        //If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            //make pause at end 
            typeSpeed = this.wait;
            //Set delete to true 
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt == '') {
            this.isDeleting = false;
            //Move to next word
            this.wordIndex++;
            //Pause before start typing
            typeSpeed = 400;
        }

        setTimeout(() => this.type(), typeSpeed)
    }
}


//Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
    const txtElement = document.querySelector('.typing')
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait')
    //Init TypeWriter
    new TypeWriter(txtElement, words, wait)
}

// const texts = ['Am a Full-stack web developer with design skills.', 'Like to learn new for me.', 'Enjoy to solve problems.']
// let count = 0;
// let index = 0;
// let currentText = "";
// let letter = "";

// (function type() {
//     if (count == texts.length) {
//         count = 0;
//     }
//     currentText = texts[count];
//     letter = currentText.slice(0, index++);

//     document.querySelector('.typing').textContent = letter;
//     if (letter.length === currentText.length) {
//         count++;
//         index = 0;
//     }
//     setTimeout(type, 120)
 
// })();

