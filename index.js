const cards = [
    ['#cardTitle', 'developer.js'],
    ['#dev', 'developer = {'],
    ['#name', "'Lucky Mali'"],
    ['#role', "'Web Developer'"],
    ['#html', "'HTML'"],
    ['#css', "'CSS'"],
    ['#focus', "'clean UI'"],
    ['#available', 'available']
];

let index = 0;
function typeNext() {
    if(index===cards.length) return;

    const [element,text] = cards[index];
    new Typed(element,{
        strings: [text],
        typeSpeed: 50,
        backSpeed: 60,
        showCursor: false,
        onComplete: ()=>{
            index++
            typeNext();
        }
    });
}
typeNext();