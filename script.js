const change1 = document.querySelector('#change1');
const change2 = document.querySelector('#change2');
const move = document.querySelector('#move');
const dating = document.querySelector('#dating');

change1.addEventListener('click', clickChangeButton)
change2.addEventListener('click', clickChangeButton)
move.addEventListener('mouseover', changePositionMoveButton)

function clickChangeButton() {
  if (change2.innerText == 'Não') {
    move.setAttribute('style', 'display: none');
    dating.innerText = 'NEM EU! KKKKKKKKKKKKKKKKKKK';
    return;
  }
  change2.innerText = 'Não';
  move.setAttribute('style', 'display: block');
}

function changePositionMoveButton() {
  const vertical = Math.floor(Math.random() * window.screen.availHeight) + 1;
  const horizontal = Math.floor(Math.random() * window.screen.availWidth) + 1;
  move.setAttribute('style', `top: ${(vertical-30)}px; left: ${(horizontal-100)}px; display: block`);
}
