import _ from 'lodash';
import './style.css';
import nice from './nice.png';
import data from './data.xml';


function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var image = new Image();
  image.src = nice;

  element.appendChild(image);
  console.log(data);
  return element;
}

document.body.appendChild(component());
// 在javascript模块中 import 一个css文件需要添加style-loader和css-loader
// 图片使用file-loader