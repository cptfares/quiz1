var A=document.getElementById('radioA')
var B=document.getElementById('radioB')
var C=document.getElementById('radioC')
var D=document.getElementById('radioD')
var Alabel=document.getElementById('0')
var Blabel=document.getElementById('1')
var Clabel=document.getElementById('2')
var Dlabel=document.getElementById('3')
var questionbar = document.getElementById('question')
var traking=  document.getElementById("tracking").childNodes
var trackingpostion=[1,3,5,7,9,11,13,15,17,19]
var randuuum=0
var used=[]

var submit= document.getElementById('submit')
var questionnum = 0
var score=0
checkedelemnt=null
document.getElementsByClassName("popup")[0].classList.add("active");

document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
    document.getElementById("container").style.filter="blur(0px)";
    document.getElementById("container").style.pointerEvents="inherit";
  });




const listquestion=[
    questin1={
        question: "Which number  follows this series  4 ,    6  ,   9 ,   6  ,   14   ,  6      ...",
       0: [answer="A- jj6", stat=false],
       1: [answer="B- 1hgfgf7", stat=false],
       2: [answer="C- 19", stat=true],
       3: [answer="D- 21", stat=false],


 
      },
      questin2={
        question: "What number best completes the analogy: 8:4 - 10:",
       0: [answer="A- 2", stat=false],
       1: [answer="B- 5", stat=true],
       2: [answer="C- 8", stat=false],
       3: [answer="D- 10", stat=false],


 
      },
     questin3={
        question: "john needs 13 bottles of water from the store . jhon can only carry 3 at a time.what is the minimum number of trups jhon needs to make to make to the store",
       0: [answer="A- 5", stat=true],
       1: [answer="B- 1", stat=false],
       2: [answer="C- 4", stat=false],
       3: [answer="D- 4 1/2", stat=false],


 
      },
      questin4={
        question: "Mary, who is sixteen years old, is four times as old as her brother. how old will Mary be when she is twice as old as her brother?",
       0: [answer="A- 30", stat=false],
       1: [answer="B- 26", stat=false],
       2: [answer="C- 28", stat=false],
       3: [answer="D- 24", stat=true],


 
      },
      questin5={
        question: "what is the plural of octupus",
       0: [answer="A- octopuses", stat=false],
       1: [answer="B- octopusses", stat=false],
       2: [answer="C- octopa", stat=false],
       3: [answer="D- octopi", stat=true],


 
      },

      questin6={
        question: "tomorrow is tuesday. which day was it in 15 days but 3 weeks ago ",
       0: [answer="A- monday ", stat=false],
       1: [answer="B- tuesday", stat=true],
       2: [answer="C- sunday", stat=false],
       3: [answer="D- thursday", stat=false],


 
      },
      questin7={
        question: "What's the result of this sum? \n 4852 / 4 X 3 ",
       0: [answer="A- 3639", stat=true],
       1: [answer="B- 404,3", stat=false],
       2: [answer="C- 6469", stat=false],
       3: [answer="D- 4864", stat=false],


 
      },
      questin8={
        question: "Which one letter can be moved from the first word to the second word , to create two new words \n steven eve",
       0: [answer="A- t", stat=false],
       1: [answer="B- n", stat=true],
       2: [answer="C- v", stat=false],
       3: [answer="D- e", stat=false],


 
      },
      questin9={
        question: "Which one letter can be moved from the second word to the first word , to create two new words \n Sting Cramp",
       0: [answer="A- c", stat=false],
       1: [answer="B- p", stat=false],
       2: [answer="C- a", stat=false],
       3: [answer="D- r", stat=true],


 
      },

      questin10={
        question: "Which two numbers come next in the sequence? \n 22 , 26 , 28 , 32 , 34 , 38 , 40 ,..,..",
       0: [answer="A- 41,43", stat=false],
       1: [answer="B- 44,48", stat=false],
       2: [answer="C- 44,46", stat=true],
       3: [answer="D- 42,44", stat=false],


 
      },
      
]

questionnum===0? nextupdate():null

function subbtn(Z){
    if (Z.checked){
        if(questionnum<9){
            submit.innerHTML="submit"
            submit.style.backgroundColor="#D933DC"

        }else{
            submit.innerHTML="finished!"
            submit.style.backgroundColor="#1DB954"

        }

        
        checkedelemnt=Z
        
        
 
        
        
    }
}




function nextupdate(){
    
    randuuum=Math.floor(Math.random() * 10)
    while (used.includes(randuuum)){
        randuuum=Math.floor(Math.random() * 10)
        if (used.length===10){
            break
        }
    }
    used.push(randuuum)
    rananser=Math.floor(Math.random() * 4)

    questionbar.innerHTML=listquestion[randuuum].question
    Alabel.innerHTML=listquestion[randuuum][0][0]
    Blabel.innerHTML=listquestion[randuuum][1][0]
    Clabel.innerHTML=listquestion[randuuum][2][0]
    Dlabel.innerHTML=listquestion[randuuum][3][0]   

}


function elafter(){
    submit.style.cursor="not-allowed"
    submit.disabled=true
                /* to element the bug of displaying the result with the check answer when the user click answer while result displaying*/
    A.disabled=true 
    B.disabled=true
    C.disabled=true
    D.disabled=true

}

function submitanswer(){
    if (checkedelemnt===null){
        traking[trackingpostion[questionnum]].style.backgroundColor="red"
        elafter()
        setTimeout(restquestion,800)
        
        
    }else{
        cheackanswer()
        elafter()
        setTimeout(restquestion,800)

        

    }

    
    
    

    
    if(questionnum==9){
        document.getElementById("container").style.visibility="hidden"
        console.log(score)
        document.getElementById("circle").style.visibility="inherit"
        result(score)



        

    } 
   
    questionnum+=1
}


function restquestion(){
    if (checkedelemnt !=null){
        checkedelemnt.checked= false
        document.getElementById(checkedelemnt.value).style.backgroundColor=null

    }

    submit.innerHTML="skip"
    submit.style.backgroundColor=null

    submit.style.cursor="pointer"
    submit.disabled=false
    checkedelemnt=null
    A.disabled=false
    B.disabled=false
    C.disabled=false
    D.disabled=false
    nextupdate() 
    
   
}


function cheackanswer(){
    if (listquestion[used[questionnum]][checkedelemnt.value][1]){
        traking[trackingpostion[questionnum]].style.backgroundColor="#1DB954"
        document.getElementById(checkedelemnt.value).style.backgroundColor="#1DB954"
        
        score=score+1
        

    }else{
        traking[trackingpostion[questionnum]].style.backgroundColor="red"
        document.getElementById(checkedelemnt.value).style.backgroundColor="red"

    }   
    

}

function result(score){
    score=score*2;
var color = "blue";
var val = 440 - (440 * score) / 20;
if (score >= 15) color = "green";
else if (score <= 10) color = "red";
var stroke = "#" + color + "grad";
var text_color = color + "-grad-text";
$(".number").addClass(text_color);
$(".number").html(score);

$("#circle-stroke").css("stroke", `url(${stroke})`);
$("#circle-stroke").animate(
  {
    "stroke-dashoffset": val
  },
  1000
);


}

    
   



