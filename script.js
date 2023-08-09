const progressBar = document.getElementsByClassName('progress-bar')[0];
const intervalId = setInterval(() => {
  const styleCal = getComputedStyle(progressBar);
  const width = parseFloat(styleCal.getPropertyValue('--width')) || 0;
  if (width < 100) {
    progressBar.style.setProperty('--width', width + .1)
  } else {
    clearInterval(intervalId);
  }
}, 5);