function saturdayFun (event = "roller-skate") {
    return "This Saturday, I want to " + event + "!";
}
saturdayFun()

function mondayWork (event = "go to the office") {
    return "This Monday, I will " + event + "." ;
}
mondayWork()

function wrapAdjective(accent = "*") {
    return function(adjective = "special") {
        return `You are ${accent}${adjective}${accent}!`;
    }
}
wrapAdjective()(adjective);

