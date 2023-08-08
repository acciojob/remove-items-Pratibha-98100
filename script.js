let colorSelect = document.getElementById('colorSelect');
// console.log(colorSelect);

function removeColor() {
    let optionValue = colorSelect.value;
    // console.log(optionValue);
    let options = document.getElementsByTagName('option');
    // console.log(options[3].value);

    for (let option of options) {
        if (option.value === optionValue) {
            // console.log(option.value);
            option.remove();
        }
    }
}