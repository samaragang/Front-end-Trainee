// set the date to countdown to (year, month - 1, day, hour, minute, second)
let countDownDate = new Date(2023, 04, 31, 00, 00, 00).getTime();

let countdown = setInterval(function () {

    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Countdown is over!";
    }
}, 1000);


// form
const form = document.getElementById('subscription-form');
const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-button');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const popupMessage = document.getElementById('popup-message');
const popupDescription = document.getElementById('popup-description');
const popupCloseButton = document.getElementById('popup-close-button');
const popupCancelButton = document.getElementById('popup-cancel-button');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validateEmail(emailInput.value)) {
        popupMessage.innerText = 'Invalid email';
        popupDescription.innerText = 'Please enter a valid email address';
        showPopup();
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'process-form.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if (xhr.status === 200) {
            popupMessage.innerText = 'Success!';
            popupDescription.innerText = 'You have successfully subscribed to the email newsletter';
        } else {
            popupMessage.innerText = 'Error subscribing';
            popupDescription.innerText = 'Please try again later';
        }
        showPopup();
    };
    xhr.send(JSON.stringify({ email: emailInput.value }));
});

popupCloseButton.addEventListener('click', hidePopup);
popupCancelButton.addEventListener('click', hidePopup);

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showPopup() {
    popup.style.display = 'block';
}

function hidePopup() {
    popup.style.display = 'none';
}



//accordion 
const headers = document.querySelectorAll('.accordion__header');
let activeBlock = null;

headers[0].classList.add('active');
headers[0].nextElementSibling.classList.add('show');
activeBlock = headers[0];

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        if (activeBlock !== header && activeBlock !== null) {
            activeBlock.classList.remove('active');
            activeBlock.nextElementSibling.classList.remove('show');
        }
        header.classList.add('active');
        content.classList.add('show');
        activeBlock = header;
    });
});

// add class on scroll
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('all-events');
    window.addEventListener('scroll', () => {
      const elementTop = titleElement.getBoundingClientRect().top;
      const elementBottom = titleElement.getBoundingClientRect().bottom;
      if (elementTop < window.innerHeight && elementBottom >= 0) {
        titleElement.classList.add('animate__fadeInDown');
      } 
    });
  });