const fact1Content = [
    '<p class="inline bold">Do windmills give stable energy?</p><button class="inline button factbuttonnot1"> -</button><p>Yes. When installed correctly, the wind generator will generate electricity 365 days a year.</p>',
];
const fact1Contentnot = [
    '<p class="inline bold">Do windmills give stable energy?</p><button class="inline button factbutton1">+</button>',
];
const fact2Content = [
    '<p class="inline bold">What is the working lifespan of a windmill?</p><button class="inline button factbuttonnot2"> -</button><p>With proper installation and timely maintenance, the wind generator will work up to 30 years.</p>',
];
const fact2Contentnot = [
    '<p class="inline bold">What is the working lifespan of a windmill?</p><button class="inline button factbutton2">+</button>',
];
const fact3Content = [
    '<p class="inline bold">How loud is the wind generator?</p><button class="inline button factbuttonnot3"> -</button><p>In an operating mode, the wind turbine reaches 25 dB. For comparison, a wall clock is ticking at a volume of 30 dB.</p>',
];
const fact3Contentnot = [
    '<p class="inline bold">How loud is the wind generator?</p><button class="inline button factbutton3">+</button>',
];
const fact4Content = [
    '<p class="inline bold">Is a windmill safe for the environment?</p><button class="inline button factbuttonnot4"> -</button><p>Absolutely. During operation, not a single type of fuel is used, therefore, there are zero emissions from the wind generator.</p>',
];
const fact4Contentnot = [
    '<p class="inline bold">Is a windmill safe for the environment?</p><button class="inline button factbutton4">+</button>',
];
function showFact1() {
    const factContainer = document.querySelector('.fact1');
    factContainer.innerHTML = fact1Content;
    document.querySelector('.factbuttonnot1').addEventListener('click', showFact1not);
}
function showFact1not() {
    const factContainer = document.querySelector('.fact1');
    factContainer.innerHTML = fact1Contentnot;
    document.querySelector('.factbutton1').addEventListener('click', showFact1);
}


function showFact2() {
    const factContainer = document.querySelector('.fact2');
    factContainer.innerHTML = fact2Content;
    document.querySelector('.factbuttonnot2').addEventListener('click', showFact2not);
}
function showFact2not() {
    const factContainer = document.querySelector('.fact2');
    factContainer.innerHTML = fact2Contentnot;
    document.querySelector('.factbutton2').addEventListener('click', showFact2);
}
function showFact3() {
    const factContainer = document.querySelector('.fact3');
    factContainer.innerHTML = fact3Content;
    document.querySelector('.factbuttonnot3').addEventListener('click', showFact3not);
}
function showFact3not() {
    const factContainer = document.querySelector('.fact3');
    factContainer.innerHTML = fact3Contentnot;
    document.querySelector('.factbutton3').addEventListener('click', showFact3);
}
function showFact4() {
    const factContainer = document.querySelector('.fact4');
    factContainer.innerHTML = fact4Content;
    document.querySelector('.factbuttonnot4').addEventListener('click', showFact4not);
}
function showFact4not() {
    const factContainer = document.querySelector('.fact4');
    factContainer.innerHTML = fact4Contentnot;
    document.querySelector('.factbutton4').addEventListener('click', showFact4);
}
document.querySelector('.factbutton1').addEventListener('click', showFact1);
document.querySelector('.factbutton2').addEventListener('click', showFact2);
document.querySelector('.factbutton3').addEventListener('click', showFact3);
document.querySelector('.factbutton4').addEventListener('click', showFact4);


