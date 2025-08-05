import firstLetterData from './data/firstLetter.js';
import secondLetterData from './data/secondLetter.js';
import thirdLetterData from './data/thirdLetter.js';

const input = document.getElementById('vinInput');
const firstRes = document.getElementById('firstRes');
const secondRes = document.getElementById('secondRes');
const thirdRes = document.getElementById('thirdRes');

input.addEventListener('input', getVin);

function getVin() {
    const value = input.value?.toLowerCase();

    firstRes.innerText = firstLetterData[value[0]] || '';
    secondRes.innerText = secondLetterData[value.slice(0, 2)] || '';
    thirdRes.innerText = thirdLetterData[value.slice(0, 3)] || thirdLetterData[value.slice(0, 2)] || '';
}
