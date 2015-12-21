var loser = false;  // whether the user has hit a wall

window.onload = function() {
    $("start").onclick = start;
    $("end").onmouseover = end;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = outofBounds;
    }
};

function outofBounds() {
    loser = true;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}

function start() {
    loser = false;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function end() {
    if(loser) {
        alert("Sorry, you lost. :[");
    } else {
        alert("You win! :]");
    }
}
