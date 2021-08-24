import * as data from './datas.js';
import * as Select from './select.js';

const selectSuit = document.querySelector('#select_suits') as HTMLSelectElement;
const selectDurations = document.querySelector('#select_durations') as HTMLSelectElement;
const selectActivities = document.querySelector('#select_activities') as HTMLSelectElement;

Select.addOptions(selectSuit, data.suits);
Select.addOptions(selectDurations, data.durations);
Select.addOptions(selectActivities, data.activities);