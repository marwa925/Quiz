export class Quiz{
    constructor(data){
        console.log(data);
        this.result=data;
        document.getElementById("qesNum").innerHTML= this.result.length;
        this.current=document.getElementById("currNum");
        this.question=document.getElementById("qes");
        this.questionContent=document.getElementById("questionContent");
        this.currentIndex=0;
        this.score=0;
        this.correctAnswer;
        this.startQuiz();
        document.getElementById("next").addEventListener("click",()=>{
            this.nextQues()
        });
        document.getElementById("tryAgain").addEventListener("click",()=>{
            location.reload();
        })
    }

    startQuiz(){
        this.current.innerHTML=this.currentIndex+1;
        const currentQuestion= this.result[this.currentIndex];
        this.question.innerHTML=currentQuestion.question;
        console.log(this.result[this.currentIndex])
        const answer= [...currentQuestion.incorrect_answers];
        this.correctAnswer= currentQuestion.correct_answer;
        const randomNumber= Math.ceil(Math.random()*answer.length);
        answer.splice(randomNumber,0,this.correctAnswer);
        console.log(answer);
        let temp=``;
        for(let i=0; i<answer.length; i++){
            temp+=`<p ><input  type="radio" name="qes" value="${answer[i]}" id="${i}"> <label for="${i}"> ${answer[i]}</label></p>`
        }
        this.questionContent.innerHTML=temp;

    }
    nextQues(){
        const checked=document.querySelector('[name="qes"]:checked')?.value;
        console.log(checked)
        if(checked != undefined){
            $(".alertAns").fadeOut(300);
            this.currentIndex++;
            // console.log("this.currentIndex++;",this.currentIndex++)
            if(this.currentIndex > this.result.length-1){
                $(".quiz").removeClass("show");
                $(".final").addClass("show");
                document.getElementById("score").innerHTML=this.score;
            }else{
                if(checked== this.correctAnswer){
                    $("#correct").fadeIn(100).fadeOut(100);
                    this.score++;
                    console.log("score",this.score)
                }else{
                    $("#incorrect").fadeIn(100).fadeOut(100);
                    
                }
                this.startQuiz();
            }
            
        }else{
            $(".alertAns").fadeIn(300);
        }
    }
}