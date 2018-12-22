import _ from 'lodash';

function component() {
  const element = document.createElement('pre');

  element.innerHTML = _.join(['index', 'page'], ' ')

  return element;
}

document.body.appendChild(component());
