import * as data from './datas.js';
import * as Select from './select.js';
const selectSuit = document.querySelector('#select_suits');
const selectDurations = document.querySelector('#select_durations');
const selectActivities = document.querySelector('#select_activities');
Select.addOptions(selectSuit, data.suits);
Select.addOptions(selectDurations, data.durations);
Select.addOptions(selectActivities, data.activities);
