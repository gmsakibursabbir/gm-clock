// Cloud property
VANTA.CLOUDS({
  el: "#main",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
});

//document
// let myDocument = document.documentElement;
// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   if (btn.textContent == "Go Fullscreen") {
//     if (myDocument.requestFullscreen) {
//       myDocument.requestFullscreen();
//     } else if (myDocument.msRequestFullscreen) {
//       myDocument.msRequestFullscreen();
//     } else if (myDocument.mozRequestFullScreen) {
//       myDocument.mozRequestFullScreen();
//     } else if (myDocument.webkitRequestFullscreen) {
//       myDocument.webkitRequestFullscreen();
//     }
//     btn.textContent = "Exit Fullscreen";
//   } else {
//     if (document.exitFullscreen) {
//       document.exitFullscreen();
//     } else if (document.msexitFullscreen) {
//       document.msexitFullscreen();
//     } else if (document.mozexitFullscreen) {
//       document.mozexitFullscreen();
//     } else if (document.webkitexitFullscreen) {
//       document.webkitexitFullscreen();
//     }
//     btn.textContent = "Go Fullscreen";
//   }
// });

// Clock funtion here
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const formatSwitch = document.getElementById("formatSwitch");

function updateTime() {
  const now = new Date();

  // Get time values
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Set AM or PM for 12-hour format
  let ampm = "";
  if (hours >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  ampm.style = "font-size: 2rem";

  // Convert to 12-hour format
  if (hours > 12) {
    hours -= 12;
  } else if (hours == 0) {
    hours = 12;
  }

  // Add leading zeros
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  // Update the time element
  if (formatSwitch.checked) {
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  } else {
    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  // Update the date element
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  dateElement.textContent = `${day}, ${month} ${date}, ${year}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Switch between 12-hour and 24-hour format
formatSwitch.addEventListener("change", updateTime);
