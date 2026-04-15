const progress = new Progress(document.getElementById('progressBlock'));

document.getElementById('valueInput').addEventListener('input', (e) => {
  progress.setValue(e.target.value);
});

document.getElementById('animateCheck').addEventListener('change', (e) => {
  progress.setAnimate(e.target.checked);
});

document.getElementById('hideCheck').addEventListener('change', (e) => {
  progress.setHidden(e.target.checked);
});