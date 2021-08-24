import * as data from './datas.js';
import * as Select from './select.js';
const normalPrice = 50000;
const promoPrice = 19990;
const basePrice = promoPrice || normalPrice;
const selectSuit = document.querySelector('#select_suits');
const selectDurations = document.querySelector('#select_durations');
const selectActivities = document.querySelector('#select_activities');
const priceTotal = document.querySelector('#priceTotal');
const tabIds = ['select_suits', 'select_durations', 'select_activities'];
const getIndexId = (id) => tabIds.indexOf(id);
let tabPrices = new Array(3);
const formatPrice = (number) => (number / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });
const sumPrices = () => tabPrices.reduce((sum, value) => sum + value, basePrice);
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
    const price = parseInt((_b = optionSelected.getAttribute('data-price')) !== null && _b !== void 0 ? _b : '0', 10);
    tabPrices[getIndexId(select.id)] = price;
    priceSpan.innerText = formatPrice(price);
    priceTotal.innerText = formatPrice(sumPrices());
}
const productPriceNormal = document.querySelector('.productPriceNormal');
const productPricePromo = document.querySelector('.productPricePromo');
productPriceNormal.innerText = formatPrice(normalPrice);
productPricePromo.innerText = formatPrice(promoPrice);
priceTotal.innerText = formatPrice(promoPrice);
const btn_submit = document.querySelector('#btn_submit');
const sound = new Audio('./sounds/hum.mp3');
const addToCart = () => {
    sound.play();
};
btn_submit === null || btn_submit === void 0 ? void 0 : btn_submit.addEventListener('click', addToCart);
const images = document.querySelectorAll('.productImage');
const thumbs = document.querySelectorAll('.productThumb');
const changeImage = (index) => {
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
