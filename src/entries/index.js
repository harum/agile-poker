import pokerCards from '../javascript/pokerCards';
import '../javascript/registerServiceWorker';

import '../stylesheet/style.scss';

function component() {
  return pokerCards();
}

document.getElementById('app').appendChild(component());
