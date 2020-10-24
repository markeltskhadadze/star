const figure = document.body
  .appendChild(document.createElement('figure'))
figure.style = `
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background: #009;
`
function createStar () {
  const x = window.innerWidth * Math.random()
  const y = window.innerHeight * Math.random()
  const star = figure.appendChild(document.createElement('p'))
  star.innerText = '*'
  star.style = `
    color: #fff;
    position: fixed;
    left: ${x}px;
    top: ${y}px;
  `
}
figure.addEventListener('star', createStar)
const button = document.body
  .appendChild(document.createElement('button'))
button.innerText = 'New Star'
button.onclick = function (event) {
  figure.dispatchEvent(new Event('star'))
}
