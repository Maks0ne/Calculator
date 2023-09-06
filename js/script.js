'use strict'

let a = '',
  b = '',
  operator = '',
  finish = false,
  result = 0;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['/', '*', '+', '-'];;
const display = document.querySelector('.display p');
const reset = document.querySelector('.button-reset')
const btns = document.querySelector('.buttons')

function clear() {
  a = '';
  b = '';
  operator = '';
  finish = false;
  display.textContent = 0;
};
reset.addEventListener('click', () => {
  clear()
});

function count() {
  btns.addEventListener('click', (e) => {
    if (!e.target.classList.contains('button')) return
    if (e.target.classList.contains('button-reset')) return

    display.textContent = '';
    const key = e.target.textContent

    if (digit.includes(key)) {
      if (b == '' && operator == '') {
        a += key
        display.textContent = a

      } else if (a != '' && b != '' && finish) {
        b = key
        finish = false
        display.textContent = b

      } else {
        b += key
        display.textContent = b
      }
    }
    if (action.includes(key) && operator != '') {
      calc()
      operator = key


    } else if (action.includes(key)) {
      operator = key
      display.textContent = operator
    }


    if (key == '=') {
      calc()
    };
    console.log(a, b, operator);
  });
};
count()

function calc() {

  switch (operator) {
    case '+':
      a = +a + +b;
      break;
    case '-':
      a = +a - +b
      break;
    case '*':
      a = +a * +b
      break;
    case '/':
      if (b == '0') {
        display.textContent = 'Error'
        a = ''
        b = ''
        operator = ''
        return
      }
      a = +a / +b
      break;
  }
  finish = true
  display.textContent = a
}





