import { file, parse } from './globals';

function component() {
  parse();
  console.log(file)
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
