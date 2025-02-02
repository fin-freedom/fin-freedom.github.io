var slider = document.getElementById("range-slider");
var output = document.getElementById("selected-value");

// Встановлення початкового значення для обраного числа
output.innerHTML = "$"+parseInt(slider.value).toLocaleString('en-US');

slider.oninput = function() {
    // Форматування обраного значення
    output.innerHTML = "$"+parseInt(this.value).toLocaleString('en-US');

    const val = slider.value;
    const min = slider.min ? slider.min : 0;
    const max = slider.max ? slider.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    output.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`; 
};
