var paragraph = document.getElementById("p1")
paragraph.innerHTML = "text";
paragraph.style.color = "red";
paragraph.style.backgroundColor = "yellow";
//video 1

function makeParagraphGreen(){
    this.style.background='green'
}
paragraph.onclick = makeParagraphGreen;
//video2

var currentMargin = 0;

function changeMargin(){
    currentMargin += 1;
    paragraph.style.margin = currentMargin + "px";
}

function resetMargin(){
    currentMargin = 0;
    paragraph.style.margin = "0px";
    clearInterval(animation);
}

var animation = setInterval(changeMargin, 20);
document.getElementById("reset").onclick = resetMargin;