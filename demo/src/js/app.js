import 'babel-polyfill'
import 'coffeekraken-sugar/js/features/all'

const $progress1 = document.querySelector('.progress-bar:first-child')
const $progress2 = document.querySelector('.progress-bar--primary')
setInterval(() => {
  $progress1.setAttribute('value', Math.round(Math.random() * 100))
}, 2000)
setInterval(() => {
  let value = parseInt($progress2.getAttribute('value'))
  if (value >= 100) value = 0
  value += 1
  $progress2.setAttribute('value', value)
}, 200)
