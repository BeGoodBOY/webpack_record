import {file, parse} from './globals.js'

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //确认this指向window
  // this.alert('this is window');
  // parse();
  return element;
}

document.body.appendChild(component());
// npm webpack