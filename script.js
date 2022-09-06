const change = document.querySelector('#change');
const move = document.querySelector('#move');
const dating = document.querySelector('#dating');

change.addEventListener('click', clickChangeButton)
move.addEventListener('mouseover', changePositionMoveButton)

function clickChangeButton() {
  if (change.innerText == 'Sim') {
    move.setAttribute('style', 'display: none');
    change.setAttribute('style', 'display: none');
    dating.innerText = 'EEEEEBA, VOCÊ DISSE SIM!';
    return;
  }
  change.innerText = 'Sim';
  move.setAttribute('style', 'display: block');
}

function changePositionMoveButton() {
  const vertical = Math.floor(Math.random() * window.screen.availHeight) + 1;
  const horizontal = Math.floor(Math.random() * window.screen.availWidth) + 1;
  move.setAttribute('style', `top: ${vertical}px; left: ${horizontal}px; display: block`);
}