const clockElement = document.getElementById("clock");

function displayTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (hours === 0) {
    hours = 12;
  }

  // Default Meridien
  let meridien = "AM";

  // 12 Hours Format
  if (hours > 12) {
    hours = hours - 12;
    meridien = "PM";
  }

  // Check if hours, minutes, and seconds are single digits
  // If so, then display a '0' in front of them
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const time = `${hours}:${minutes}:${seconds} ${meridien}`;
  clockElement.textContent = time;

  // Update time every second
  setTimeout(displayTime, 1000);
}

displayTime();

// On Load
clock.addEventListener("load", displayTime);
