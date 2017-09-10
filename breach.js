"use strict";

var $ = function (id) {
    return document.getElementById(id);
}

var getBreachCount = function () {
    
    var breachCount = 0;
    var breachData = $("breach_data").value.replace(/[\[\]'\s]+/g, '');
    // var jsonData = JSON.parse('{ "Array" : ' + breachData + '}');
    var breachArray = breachData.split(",");
    console.log(breachArray);
    var status = "";
    
    for (var stat in breachArray) {
        if (breachArray[stat].toLowerCase() === "breach")
            breachCount += 1; 
    }

    if (breachCount > 3) {
        status = 'Urgent Inspection';
    } else if (breachCount <= 3 && breachCount >= 1) {
        status = 'Trouble';
    } else {
        status = 'Safe'
    }
    console.log(status);
    return this;
}

window.onload = function () {
    $("assessBreaches").onclick = getBreachCount;
}
