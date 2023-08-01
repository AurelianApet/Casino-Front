$(document).ready(function() {
    $("#digital_clock").text(getNowDate());
    setInterval(function() { $("#digital_clock").text(getNowDate()) }, 1000);
});

function getNowDate() {
    var d = new Date();
    var n = d.toISOString()
    n = n.replace('T', ' ').slice(0, n.indexOf('.'));
    return n;
}