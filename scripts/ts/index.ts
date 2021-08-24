import * as data from './datas.js';
import * as Select from './select.js';

const selectSuit = document.querySelector('#select_suits') as HTMLSelectElement;
const selectDurations = document.querySelector('#select_durations') as HTMLSelectElement;
const selectActivities = document.querySelector('#select_activities') as HTMLSelectElement;

const priceTotal = document.querySelector('#priceTotal') as HTMLSpanElement;

declare interface IPrices {
    select_suits?: number,
    select_durations?: number,
    select_activities?: number,
}

let prices:IPrices;

Select.addOptions(selectSuit, data.suits);
Select.addOptions(selectDurations, data.durations);
Select.addOptions(selectActivities, data.activities);

selectSuit.addEventListener('change', setPrice);
selectDurations.addEventListener('change', setPrice);
selectActivities.addEventListener('change', setPrice);

function setPrice(e: Event) {
    const select = e.target as HTMLSelectElement;
    const optionSelected = select.options[select.selectedIndex];
    const priceSpan = select.parentElement?.querySelector('.productFromSelectPriceValue') as HTMLSpanElement;
    const price = optionSelected.getAttribute('data-price') ?? '0';
    priceSpan.innerText = price;
    const id = select.id as IPrices;
    // prices[select.id] = parseInt(price, 10);
    // prices.select_suits = parseInt(price, 10);
    console.log(prices);
}
