var c = 0
document.getElementById("button2").setElement("disabled", "true")
function next() {
if (c>=100) {
window.location.href = "../000002.html"
} else {
alert("Get 100 first")
}
function click() {
c+=1
document.getElementById("text").innerHTML = "Clicks: "+c
}
