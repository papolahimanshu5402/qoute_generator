let btn = document.querySelector("#new-qoute");
let qu = document.querySelector(".qoute");
let person = document.querySelector(".person");

const qoutes = [{
    qoute:`sometime people don't deverve second chance, be carefull`,
    person: `Himanshuu` 
},
{
    qoute: ` The cheapest things through which the people play is our feelings and the best part is we allow them to play with it `,
    person: `Himanshuu`
},
{
    qoute: ` The sky of guilt is too havey, na garajta hai, na barasta hai...bas dil ma boojh bann karr beeth jata haii `,
    person : `himanshuuu`
},
{
    qoute: `When u start creating something then coding become really interesting`,
    person:`Himanshuuu`
},
{
    qoute: `Some wounds are not to be healed and should be marked as a permanent sign of what we loss & what cost we pay for it.🙂`,
    person:`himanshuuu`
},
{
    qoute: `"If u wanna fly like a eagle then leave the support of butterflies"`,
    person:`Khan sir`
},
{
    qoute: `Temides of society are more dangerous than the enemy outside the country.`,
    person:`himanshuuu`
},
{
    qoute: `My new life is a cost of Old one.`,
    person:`old friend`
},
{
    qoute: `Ignore me as much as u can....hope it will erase my feelings for you`,
    person:`Himanshuuu`
},
{
    qoute: `people who never understand your silence will never understand your words`,
    person:`unknown`
},
{
    qoute: `We don't need to engage in relationship to love someone`,
    person:`Himanshuuu`
},
{
    qoute: `We all need a atleast one motivation which make us remember every day about the Goals of our life even in worse day of our life.
    `,
    person:`Himanshuu`
},
];

btn.addEventListener('click', function(){

let random = Math.floor(Math.random() * qoutes.length);// 1:28min
    
qu.innerText = qoutes[random].qoute;

person.innerText = qoutes[random].person;

})