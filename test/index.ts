const box = document.querySelector('.box') as HTMLElement;
const input = document.querySelector('input');
const link = document.querySelector('a');
const p = document.querySelector('.paragraf') as HTMLParagraphElement;
const links = document.querySelectorAll('a');

if (link) {
  link.href = 'https://www.typescriptlang.org';
}

input?.value;

const elem = document.createElement('div');

link?.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Link clicked');
});
