const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
};

// setInterval(() => {
//     document.body.style.backgroundColor = makeRandColor();
// }, 1000);

// const buttons = document.querySelectorAll("button");

// for (let button of buttons) {
//     button.addEventListener("click", function () {
//         const r = Math.floor(Math.random() * 255);
//         const g = Math.floor(Math.random() * 255);
//         const b = Math.floor(Math.random() * 255);
//         newColor = `rgb(${r},${g},${b})`;
//         button.style.backgroundColor = makeRandColor();
//     });
// }

// undefined;
