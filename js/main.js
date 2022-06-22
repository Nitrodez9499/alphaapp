function fetchMaxScores() {
    const hiveUri = "https://api.playhive.com/v0/game/all/wars/Nitrodez9499";

    const hiveResult = fetch(hiveUri);

    const hiveJsonResponse = hiveResult.then(response => response.json());

    hiveJsonResponse.then(response => showStat(response.kills, 'maxScore'));

    hiveJsonResponse.then(response => showStat(response.deaths, 'maxLoss'));

    hiveJsonResponse.then(response => killDeath(response.kills, response.deaths, 'maxKD'));
}

function fetchGunScores() {
    const hiveUri = "https://api.playhive.com/v0/game/all/wars/SpaceFox0444";

    const hiveResult = fetch(hiveUri);

    const hiveJsonResponse = hiveResult.then(response => response.json());

    hiveJsonResponse.then(response => showStat(response.kills, 'gunScore'));

    hiveJsonResponse.then(response => showStat(response.deaths, 'gunLoss'));

    hiveJsonResponse.then(response => killDeath(response.kills, response.deaths, 'elementID'));
}

function showStat(statistic, elementID) {
    const scoreElement = document.getElementById(elementID);
    scoreElement.textContent = statistic;
}

function killDeath(kills, deaths, elementID) {
    var a = kills;
    var b = deaths;
    var c = a / b - 1;
    if(c < 0) {
        c = 0;
    }
    var d = c * 100;
    var e = Math.round(d);

    showStat(e, elementID);
}

/*
    JSON = JavaScript Object Notation
    DRY Principal - Don't Reapeat Yourself
*/