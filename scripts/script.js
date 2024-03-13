let navButtons = document.querySelectorAll('.x');
let sections = document.querySelectorAll('section');

console.log(navButtons);
console.log(sections);

navButtons.forEach((link, index) => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        sections[index].scrollIntoView({behavior: 'smooth'});
    })
})

function toggleActive(event) {
    event.preventDefault();
    var links = document.querySelectorAll('.nav-bar a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
}

let buttonOne = document.querySelector('.btn1');
let buttonTwo = document.querySelector('.btn2');
let contact = document.querySelector('.contact');
let weare = document.querySelector('.project');

buttonOne.addEventListener('click', function(event) {
    event.preventDefault();
    contact.scrollIntoView({behavior: 'smooth'});
})

buttonTwo.addEventListener('click', function(event) {
    event.preventDefault();
    weare.scrollIntoView({behavior: 'smooth'});
})