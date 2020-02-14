var symbol = document.getElementById("outputHiragana");

//w/o ten-ten yet
var romanjiDict = ['a', 'i', 'u', 'e', 'o', 
    'ka', 'ki', 'ku', 'ke', 'ko', 
    'sa', 'shi', 'su', 'se', 'so', 
    'ta', 'chi', 'tsu', 'te', 'to', 
    'na', 'ni', 'nu', 'ne', 'no', 
    'ha', 'hi', 'hu', 'he', 'ho', 
    'ma', 'mi', 'mu', 'me', 'mo', 
    'ya', 'yu', 'yo', 
    'ra', 'ri', 'ru', 're', 'ro', 
    'wa', 'o', 'n',
    "ga", "gi", "gu", "ge", "go",
    "za", "ji", "zu", "ze", "zo",
    "da", "ji", "zu", "de", "do",
    "ba", "bi", "bu", "be", "bo",
    "pa", "pi", "pu", "pe", "po",
    ];

// all hira glyphs
var hiragana = ["あ", "い", "う", "え", "お", 
"か", "き", "く", "け", "こ", 
"さ", "し", "す", "せ", "そ", 
"た", "ち", "つ", "て", "と", 
"な", "に", "ぬ", "ね", "の", 
"は", "ひ", "ふ", "へ", "ほ", 
"ま", "み", "む", "め", "も", 
"や", "ゆ", "よ", 
"ら", "り", "る", "れ", "ろ", 
"わ", "お", "ん",
"が", "ぎ", "ぐ", "げ", "ご",
"ざ", "じ", "ず", "ぜ", "ぞ",
"だ", "じ", "ず", "で", "ど",
"ば", "び", "ぶ", "べ", "ぼ",
"ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
];

var onCheck = true;
var output = document.getElementById("result")
var usedArray = [];
var correct = 0;
var incorrect = 0;
var Ccounter = document.getElementById('correct');
var Icounter = document.getElementById('incorrect');

function toggleClick() {
    if (onCheck) {
        document.getElementById("check").click();
    }
    else {
        document.getElementById("next").click();
    }
}

function next() {
    onCheck = true;
    output.innerHTML = "";
    //reset used array if full
    if (usedArray.length == hiragana.length) {
        usedArray = [];
    }
    window.index = Math.floor(Math.random() * hiragana.length)
    //check if symbol's been asked already
    if(usedArray.includes(hiragana[window.index])){
        next();
    }
    else{
        symbol.innerHTML = hiragana[window.index];
        usedArray.push(hiragana[window.index])
    }

    document.getElementById("input").value = "";
}

function checkAns() {
    onCheck = false;
    var guess = document.getElementById("input").value;
    if (guess.toLowerCase() == romanjiDict[window.index]) {
        output.innerHTML = "You got it right!\n" + hiragana[window.index] + " is pronounced " + romanjiDict[window.index];
        correct++;
        Ccounter.innerHTML = correct;
    }
    else {
        output.innerHTML = "Not quite...\n" + hiragana[window.index] + " is pronounced " + romanjiDict[window.index];
        incorrect++
        Icounter.innerHTML = incorrect;
    }
}
