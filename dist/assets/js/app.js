/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// set the date to countdown to (year, month - 1, day, hour, minute, second)\r\nlet countDownDate = new Date(2023, 04, 31, 00, 00, 00).getTime();\r\n\r\nlet countdown = setInterval(function () {\r\n\r\n    let now = new Date().getTime();\r\n    let distance = countDownDate - now;\r\n    let days = Math.floor(distance / (1000 * 60 * 60 * 24));\r\n    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r\n    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\r\n    let seconds = Math.floor((distance % (1000 * 60)) / 1000);\r\n\r\n    document.getElementById(\"days\").innerHTML = days;\r\n    document.getElementById(\"hours\").innerHTML = hours;\r\n    document.getElementById(\"minutes\").innerHTML = minutes;\r\n    document.getElementById(\"seconds\").innerHTML = seconds;\r\n\r\n    if (distance < 0) {\r\n        clearInterval(countdown);\r\n        document.getElementById(\"countdown\").innerHTML = \"Countdown is over!\";\r\n    }\r\n}, 1000);\r\n\r\n\r\n// form\r\nconst form = document.getElementById('subscription-form');\r\nconst emailInput = document.getElementById('email-input');\r\nconst submitButton = document.getElementById('submit-button');\r\nconst popup = document.getElementById('popup');\r\nconst popupContent = document.getElementById('popup-content');\r\nconst popupMessage = document.getElementById('popup-message');\r\nconst popupDescription = document.getElementById('popup-description');\r\nconst popupCloseButton = document.getElementById('popup-close-button');\r\nconst popupCancelButton = document.getElementById('popup-cancel-button');\r\n\r\nform.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n\r\n    if (!validateEmail(emailInput.value)) {\r\n        popupMessage.innerText = 'Invalid email';\r\n        popupDescription.innerText = 'Please enter a valid email address';\r\n        showPopup();\r\n        return;\r\n    }\r\n\r\n    const xhr = new XMLHttpRequest();\r\n    xhr.open('POST', 'process-form.php');\r\n    xhr.setRequestHeader('Content-Type', 'application/json');\r\n    xhr.onload = () => {\r\n        if (xhr.status === 200) {\r\n            popupMessage.innerText = 'Success!';\r\n            popupDescription.innerText = 'You have successfully subscribed to the email newsletter';\r\n        } else {\r\n            popupMessage.innerText = 'Error subscribing';\r\n            popupDescription.innerText = 'Please try again later';\r\n        }\r\n        showPopup();\r\n    };\r\n    xhr.send(JSON.stringify({ email: emailInput.value }));\r\n});\r\n\r\npopupCloseButton.addEventListener('click', hidePopup);\r\npopupCancelButton.addEventListener('click', hidePopup);\r\n\r\nfunction validateEmail(email) {\r\n    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n    return emailRegex.test(email);\r\n}\r\n\r\nfunction showPopup() {\r\n    popup.style.display = 'block';\r\n}\r\n\r\nfunction hidePopup() {\r\n    popup.style.display = 'none';\r\n}\r\n\r\n\r\n\r\n//accordion \r\nconst headers = document.querySelectorAll('.accordion__header');\r\nlet activeBlock = null;\r\n\r\nheaders[0].classList.add('active');\r\nheaders[0].nextElementSibling.classList.add('show');\r\nactiveBlock = headers[0];\r\n\r\nheaders.forEach(header => {\r\n    header.addEventListener('click', () => {\r\n        const content = header.nextElementSibling;\r\n        if (activeBlock !== header && activeBlock !== null) {\r\n            activeBlock.classList.remove('active');\r\n            activeBlock.nextElementSibling.classList.remove('show');\r\n        }\r\n        header.classList.add('active');\r\n        content.classList.add('show');\r\n        activeBlock = header;\r\n    });\r\n});\r\n\r\n// add class on scroll\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const titleElement = document.getElementById('all-events');\r\n    window.addEventListener('scroll', () => {\r\n      const elementTop = titleElement.getBoundingClientRect().top;\r\n      const elementBottom = titleElement.getBoundingClientRect().bottom;\r\n      if (elementTop < window.innerHeight && elementBottom >= 0) {\r\n        titleElement.classList.add('animate__fadeInDown');\r\n      } \r\n    });\r\n  });\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;