'use strict';
const btnsOpenModal1 = document.querySelector('.show-modal-1');
const btnsOpenModal2 = document.querySelector('.show-modal-2');
const btnCloseModal1 = document.querySelector('.close-modal-1');
const btnCloseModal2 = document.querySelector('.close-modal-2');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const overlay = document.querySelector('.overlay');

btnsOpenModal1.addEventListener('click', function () {
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnsOpenModal2.addEventListener('click', function () {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnCloseModal1.addEventListener('click', function () {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
});

btnCloseModal2.addEventListener('click', function () {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
});

//To close the modal window on a keypress "esc"
//The paramater passed is to check which key was pressed which can be viewed in the console log
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal1.classList.contains('hidden')) {
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
  } else if (e.key === 'Escape' && !modal2.classList.contains('hidden')) {
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
