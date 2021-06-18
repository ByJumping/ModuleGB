import render, { renderDates } from './common.js';
import { diffDates } from "./date.js";

const form = document.querySelector('#form-date');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const date1 = e.target.elements.date1.value;
    const date2 =e.target.elements.date2.value;

    if (!date1 || !date2) {
        render ('Введите оба значения');
        return;
    }

    render ('');
    const result = diffDates(date1, date2);
    renderDates(result)



})