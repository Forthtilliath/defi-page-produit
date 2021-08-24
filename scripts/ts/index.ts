import * as data from './datas.js';
import * as Select from './select.js';

// Prix en centimes
const normalPrice = 50000;
const promoPrice = 19990;
const basePrice = promoPrice || normalPrice;

//*************************************\
//* MENUS SELECT                       *
//*************************************/

const selectSuit = document.querySelector('#select_suits') as HTMLSelectElement;
const selectDurations = document.querySelector('#select_durations') as HTMLSelectElement;
const selectActivities = document.querySelector('#select_activities') as HTMLSelectElement;
const priceTotal = document.querySelector('#priceTotal') as HTMLDivElement;

const tabIds = ['select_suits', 'select_durations', 'select_activities'];
const getIndexId = (id: string) => tabIds.indexOf(id);

let tabPrices = new Array<number>(3);
const formatPrice = (number: number) =>
    (number / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });
const sumPrices = () => tabPrices.reduce((sum, value) => sum + value, basePrice);

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
    const price = parseInt(optionSelected.getAttribute('data-price') ?? '0', 10);
    tabPrices[getIndexId(select.id)] = price;
    priceSpan.innerText = formatPrice(price);
    priceTotal.innerText = formatPrice(sumPrices());
}

//*************************************\
//* INITIALISATION PRIX                *
//*************************************/

const productPriceNormal = document.querySelector('.productPriceNormal') as HTMLDivElement;
const productPricePromo = document.querySelector('.productPricePromo') as HTMLDivElement;

productPriceNormal.innerText = formatPrice(normalPrice);
productPricePromo.innerText = formatPrice(promoPrice);
priceTotal.innerText = formatPrice(promoPrice);

//*************************************\
//* SUBMIT                             *
//*************************************/

const btn_submit = document.querySelector('#btn_submit');
const sound = new Audio('./sounds/hum.mp3');

const addToCart = () => {
    sound.play();
};

btn_submit?.addEventListener('click', addToCart);

//*************************************\
//* SLIDER                             *
//*************************************/

const images = document.querySelectorAll('.productImage');
const thumbs = document.querySelectorAll('.productThumb');

const changeImage = (index: number) => {
    thumbs.forEach((thumb, i) => {
        thumb.classList.remove('active');
        if (index === i) {
            thumb.classList.add('active');
        }
    });
    images.forEach((image, i) => {
        image.classList.remove('active');
        if (index === i) {
            image.classList.add('active');
        }
    });
};

thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => changeImage(i)));

changeImage(0);

//*************************************\
//* RATING                             *
//*************************************/
