'use strict'

var gCurrQuestIdx = 0;
var gQuests = createQuests();

function init() {
    gCurrQuestIdx = 0;
    rernderQuest(gCurrQuestIdx);
}

function createQuest(opts, correctOptIndex) {
    var nextId = 1;
    var quest = {
        id: nextId++,
        opts: opts,
        correctOptIndex: correctOptIndex
    };
    return quest;
}

function createQuests() {
    var quests = [];
    quests.push(createQuest(['Israel', 'Germany', 'USA'], 2));
    quests.push(createQuest(['Peru', 'Argentina', 'Guatemala'], 1));
    quests.push(createQuest(['Brazil', 'Italy', 'Bolivia'], 0));
    quests.push(createQuest(['Iraq', 'Turkey', 'China'], 2));
    quests.push(createQuest(['Paraguay', 'Portugal', 'India'], 0));
    return quests;
}

function rernderQuest(questIdx) {
    var elImg = document.querySelector('img');
    elImg.src = `img/${questIdx + 1}.png`;
    var elOpts = document.querySelectorAll('button');
    var currQuest = gQuests[questIdx];
    for (var i = 0; i < currQuest.opts.length; i++) {
        elOpts[i].innerText = `${currQuest.opts[i]}`;
    }
}

function checkAnswer(optIdx) {
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        gCurrQuestIdx++;
        if (gCurrQuestIdx === gQuests.length) return victorious();
        rernderQuest(gCurrQuestIdx);
    }
}

function victorious() {
    var elImg = document.querySelector('img');
    elImg.src = `img/victory.jpg`;
    changeBoard('KING OF THE WORLD!');
}

function changeBoard(h1Text) {
    var ElH1 = document.querySelector('h1');
    ElH1.innerText = h1Text;
    var elOpts = document.querySelectorAll('button');
    for (var i = 0; i < 4; i++) {
        elOpts[i].classList.toggle('hide')
    };
}