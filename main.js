var myquestion = [
    {
        Q: "Which of the following tag is used to insert a line-break in HTML ?",
        A: "< br >",
        options: [
            "< br >",
            "< a > ",
            "< pre > ",
            "< b >",
        ]
    },
    {
        Q: "Which of the following tag is used to make the underlined text ?",
        A: "< u >",
        options: [
            "< ul >",
            "< i >",
            "< u >",
            "< pre >",
        ]
    },
    {
        Q: "The < hr > tag in HTML is used for ______",
        A: "horizontal ruler",
        options: [
            "new line",
            "new paragraph",
            "horizontal ruler",
            "vertical ruler",
        ]
    },
    {
        Q: "Which of the following HTML attribute is used to define inline styles ?",
        A: "style",
        options: [
            "style",
            "type",
            "class",
            "None of the above",
        ]
    },
    {
        Q: "Which of the following is the paragraph tag in HTML ?",
        A: "< p >",
        options: [
            "< b >",
            "< pre >",
            "< b >",
            "None of the above",
        ]
    },
    {
        Q: "How to create an unordered list (a list with the list items in bullets) in HTML ?",
        A: "< ul >",
        options: [
            "< i >",
            "< li >",
            "< ol >",
            "< ul >",
        ]
    },
];

function questionShow(e) {
    var questionShow = document.getElementById("question_show");
    questionShow.innerHTML = myquestion[e].Q;
    var a = document.getElementsByClassName("answer_show");
    for (var i = 0; i < a.length; i++) {
        a[i].innerHTML = myquestion[e].options[i]
    }
}

var questionCount = 0;
var points = 0;
function nextBtn() {
    questionCount++
    checking(questionCount)
    questionShow(questionCount)
    removeActive()
}
function active(e) {
    removeActive()
    e.classList.add("active")
}
function removeActive() {
    var active = document.getElementsByClassName("active")
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active")
    }
}

function checking(e) {
    var active = document.getElementsByClassName("active");
console.log(active)

    if (active[0].innerHTML == myquestion[e].A) {
        console.log(points += 10)
    }
}

var sec = 10;
setInterval(function(){
    sec--
    var timer = document.getElementById("timer")
    timer.innerHTML = sec + " second Left"
    if(sec === 0){
        location.href = "lose.html"
}
},1000)
