const fact1Content = [
    '<p class="inline">Do windmills give stable energy?</p><button class="inline button factbuttonnot"> -</button><p>Yes. When installed correctly, the wind generator will generate electricity 365 days a year.</p>',
];
const fact1Contentnot = [
    '<p class="inline">Do windmills give stable energy?</p><button class="inline button factbutton1">+</button>',
];

function showFact1() {
    const factContainer = document.querySelector('.fact1');
    factContainer.innerHTML = fact1Content;
    document.querySelector('.factbuttonnot').addEventListener('click', showFact1not);
}
function showFact1not() {
    const factContainer = document.querySelector('.fact1');
    factContainer.innerHTML = fact1Contentnot;
    document.querySelector('.factbutton1').addEventListener('click', showFact1);
}
document.querySelector('.factbutton1').addEventListener('click', showFact1);


