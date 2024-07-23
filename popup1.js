function afficherpopup (){
 //la popup est masquée par display none
 //elle devient visible si sa classe devient #active
 let popupbackground= document.querySelector(".popupbackground");
 popupbackground.classList.add("active");
}
function cacherpopup(){
    //cache la popup en remplaçant sa classe par .popupbackground
    let popupbackground= document.querySelector(".popupbackground");
    popupbackground.classList.remove("active");
}
function Pop(){
     //écoute de click sur le btnpartager
     let btnpartager= document.querySelector(".partager .btnpartager");
     let popupbackground= document.querySelector(".popupbackground");
     btnpartager.addEventListener("click", 
         //au click il affiche la popup
         ()=>{afficherpopup()} )
        
         popupbackground.addEventListener("click",
         //cache la popup quand on click endehors de la fenêtre ouverte
         //et pas sur un élément qu'il contient comme la div popup
         (event)=>{
            if(event.target=== popupbackground) {cacherpopup()} 
        }) 
}Pop()

function afficherpopup2(){
    //la popup est masquée par display none
    //elle devient visible si sa classe devient #active
    let popupbackground2= document.querySelector(".popupbackground2");
    popupbackground2.classList.add("active2");
   }
   function cacherpopup2(){
       //cache la popup en remplaçant sa classe par .popupbackground
       let popupbackground2= document.querySelector(".popupbackground2");
       popupbackground2.classList.remove("active2");
   }
   function Pop2(){
         //écoute de click sur le btnpartager
         let btncommenter= document.querySelector(".partager .btncommenter");
         let popupbackground2= document.querySelector(".popupbackground2");
         btncommenter.addEventListener("click", 
             //au click il affiche la popup
             ()=>{afficherpopup2()} )
   
             popupbackground2.addEventListener("click",
             //cache la popup quand on click endehors de la fenêtre ouverte
             //et pas sur un élément qu'il contient comme la div popup
             (event)=>{
               if(event.target === popupbackground2) {cacherpopup2()} 
        }) 
   }Pop2()

   function afficherchoicepopup(){
    //la popup est masquée par display none
    //elle devient visible si sa classe devient #active
    let choice= document.querySelector(".choice");
    choice.classList.add("active3");
   }
   function cacherchoicepopup(){
       //cache la popup en remplaçant sa classe par .choicepopup
       let choice= document.querySelector(".choice");
       choice.classList.remove("active3");
       choice.addEventListener("click", 
        //au click il affiche la popup
        ()=>{cacherchoicepopup()} )
}cacherchoicepopup();

   function choicepopup(){
         //écoute de click sur le btnpartager
         let btnplay= document.querySelector("#btnplay");
         btnplay.addEventListener("click", 
             //au click il affiche la popup
             ()=>{afficherchoicepopup()} )
    }choicepopup();
