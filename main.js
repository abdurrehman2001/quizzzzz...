var myquestion = [
    {
        Q :"HTML is what type of language ?",
        A : "Markup Language",
        options : [
            "Scripting Language",
            "Programming Language",
            "Network Protocol",
            "Markup Language",
        ]
    },
{
          Q : "HTML uses ?",
          A : " Fixed tags defined by the language",
          options : [
              "User defined tags",
              "Pre-specified tags",
              "Fixed tags defined by the language",
              "Tags only for linking",
          ]
},  
{
        Q : "The year in which HTML was first proposed __________ ?",
        A : "1990 ",
        options : [
            "2000",
            "1990",
            "1995",
            "1980",
        ]
},
];

function questionShow(e){
    var questionShow = document.getElementById("question_show");
    questionShow.innerHTML = myquestion[e].Q;
    var a = document.getElementsByClassName("answer_show");
    for(var i = 0 ; i < a.length ; i++ ){
        a[i].innerHTML = myquestion[e].options[i]
    }
}

var questionCount = 0;
var points = 0;
function nextBtn(){
    questionCount++
    checking(questionCount)
    questionShow(questionCount)
    removeActive()
}
function active(e){
    removeActive()
    e.classList.add("active")
}
function removeActive(){
    var active = document.getElementsByClassName("active")
    for(var i = 0 ; i < active.length ; i++){
        active[i].classList.remove("active")
    }
}

function checking(e){
    var active  = document.getElementsByClassName("active");
    if(active[0].innerHTML == myquestion[e].A){
        console.log(points +=10)
    }
}

var sec = 160;
setInterval(function(){
    sec--
    var timer = document.getElementById("timer").innerHTML = sec + " second Left"
},1000)