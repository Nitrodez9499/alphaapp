function fetchMaxScores() {
    const hiveUri = "https://api.playhive.com/v0/game/all/wars/Nitrodez9499";

    const hiveResult = fetch(hiveUri);

    const hiveJsonResponse = hiveResult.then(response => response.json());

    hiveJsonResponse.then(response => showKills(response.kills));

    hiveJsonResponse.then(response => showDeaths(response.deaths));

    hiveJsonResponse.then(response => killDeath(response.kills, response.deaths));
}

function showKills(kills) {
    const scoreElement = document.getElementById("maxScore");
    scoreElement.textContent = kills;
}

function showDeaths(deaths) {
    const scoreElement = document.getElementById("maxLoss");
    scoreElement.textContent = deaths;
}

function killDeath(kills, deaths) {
    var a = kills;
    var b = deaths;
    var c = a / b - 1;
    var d = c * 100;
    var e = Math.round(d)
    const scoreElement = document.getElementById("maxKD");
    scoreElement.textContent = e;
}
/*
    JSON = JavaScript Object Notation
*/