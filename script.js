let plus = document.getElementById(`plus`);

let minus = document.getElementById(`minus`);

let son = document.getElementById(`son`);

let body = document.querySelector(`body`)

let num = 0

plus.addEventListener(`click`, () => {
    num++
    son.innerHTML = num
});
minus.addEventListener(`click`, () => {
    num--
    son.innerHTML = num
});
body.style.display = `flex`
body.style.justifyContent = `center`
body.style.alignItems = `center`
body.style.marginTop = `400px`
plus.style.height = `50px`
plus.style.width = `50px`
plus.style.backgroundColor = `green`
plus.style.border = `none`
minus.style.height = `50px`
minus.style.width = `50px`
minus.style.backgroundColor = `red`
minus.style.border = `none`
son.style.padding = `20px`
son.style.fontSize = `50px`
