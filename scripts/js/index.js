import * as data from './datas.js';
import * as Select from './select.js';
const selectSuit = document.querySelector('#select_suits');
const selectDurations = document.querySelector('#select_durations');
const selectActivities = document.querySelector('#select_activities');
const priceTotal = document.querySelector('#priceTotal');
let prices;
Select.addOptions(selectSuit, data.suits);
Select.addOptions(selectDurations, data.durations);
Select.addOptions(selectActivities, data.activities);
selectSuit.addEventListener('change', setPrice);
selectDurations.addEventListener('change', setPrice);
selectActivities.addEventListener('change', setPrice);
function setPrice(e) {
    var _a, _b;
    const select = e.target;
    const optionSelected = select.options[select.selectedIndex];
    const priceSpan = (_a = select.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.productFromSelectPriceValue');
    const price = (_b = optionSelected.getAttribute('data-price')) !== null && _b !== void 0 ? _b : '0';
    priceSpan.innerText = price;
    const id = select.id;
    console.log(prices);
}
