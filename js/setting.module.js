import { Quiz } from "./quiz.module.js";
export class setting{
    constructor(){

        document.getElementById("start").addEventListener("click",()=>{
            this.startQuiz()
        })
    }

    async startQuiz(){
        const categ=document.getElementById("categ").value;
        const diff= document.querySelector('[name="diffic"]:checked').value;
        let qNum= document.getElementById("numQes").value;
        if(qNum >0){
            let result=await this.getQestion(qNum,categ,diff);
            $(".carD").removeClass("show");
            $(".quiz").addClass("show");
            let quiz= new Quiz(result);
        }else{
            $(".alert").fadeIn(1000);
        }

        
        
    }
    async getQestion(amount,categ,diff){
        const api= await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${categ}&difficulty=${diff}`);
        const responce= await api.json();
        return responce.results;
    }
}