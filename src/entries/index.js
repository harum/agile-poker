import '../javascript/registerServiceWorker';
import pokerCards from '../javascript/pokerCards';
import { fibonacciScales } from '../javascript/scales';

import '../stylesheet/style.scss';

function component() {
  return pokerCards(fibonacciScales);
}

document.getElementById('app').appendChild(component());
