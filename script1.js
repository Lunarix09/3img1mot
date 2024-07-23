let tbimages1= ["image1.png", "image2.png", "image3.png","image4.png", "image5.png", "image6.png", "image7.png",
"image8.png", "image9.png", "image10.png", "image11.png", "image12.png", "image13.png", "image14.png"
];
let tbimages2= ["tyg", "egch"];
let tbimages3= ["qyed", "igchn"];
let playimages= ["playgame.png", "playgame1.png", "playgame3.png", "playgame4.png"];

let tbimages= new Array;

let tbmots1=["yeux","reine","disney", "pousser", "appache", "ananas", "arcade", "gymnaste", "arcodeon", "carrefour",
"caffetiere", "bulldozer", "brasserie", "carreaux"]
let tbmots2=["yg", "gch"];
let tbmots3=["tyoiu", "wgchn"]; 

let tbmots= new Array;
let Tbmots= new Array;

function validernom(nom){
    if(nom.length > 2){return true} return false
}

function valideremail(email){
    let regexp= new RegExp("^[a-zA-Z0-9&._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]")
    if(regexp.test(email) ){return true} return false
}

function validercomment(commentaire){
    if(commentaire.length > 0){return true} return false
}

function affichernomemail(nom, email, scoreafficher){
    let mailto= `mailto:${email}?subject=Partager mon score &body= Salut je suis ${nom} et j'ai fait ce score de : ${scoreafficher} en jouant à 3 Images 1 Mot `;
    location.href= mailto;
}

function comment(nom, commentaire){
    let mailto= `mailto:lunarixart09@gmail.com?subject=Mon avis sur 3 Images 1 mot &body= Hey c'est ${nom}. ${commentaire}`;
    location.href= mailto;
}

function mélangemots(I){
    for(let i2 = 1; i2 < tbmots.length+1; i2++) {  
         let Tbimages= tbimages[I] ;
         let checkimg= "image"+[i2]+".png"
         console.log(checkimg, Tbimages);
         if(Tbimages === checkimg){ 
             console.log(tbmots[i2-1]);
             Tbmots.push(tbmots[i2-1]);
             console.log('yes');
             I++;
             i2 =0;
            }else{console.log('no')}
            if (tbimages[I] === undefined){break}
    }  
}

function cacherchoice(){
            //cache la popup en remplaçant sa classe par .choicepopup
            let choice= document.querySelector(".choice");
            choice.classList.remove("active3");
}
function placeholder(index){
    if (index < Tbmots.length) {
         zoneréponse.placeholder= "EN "+ Tbmots[index].length + " LETTRES"; 
         if (tbimages[index] === undefined) {
             zoneréponse.placeholder= " ";
            }   
    }      
}

function lancer(){
    let i1= 0;
    let score= 0;
    let i3= 0 ;
    let index= 0;
    let img= document.querySelector(".images span img");
    let btnnext = document.getElementById("btnnext");
    let btnok= document.getElementById("btnok");
    let btnplay= document.getElementById("btnplay");
    let zoneréponse= document.querySelector("#zoneréponse");
     
    let balisenom= document.getElementById("nom");
    let baliseemail= document.getElementById("email");
    let balisecommentaire= document.getElementById("commentaire");
    let form= document.querySelector(".popupbackground form");
    let form2= document.querySelector(".popupbackground2 form");
    let balisenom2= document.getElementById("nom2");
    let audioplay = document.querySelector("#audioplay");
    let audiono = document.querySelector("#audiono");
    let audiook = document.querySelector("#audiook");
    let audionext = document.querySelector("#audionext");
    let audiowin = document.querySelector("#audiowin");

    // Fonction pour mélanger un tableau (utilise le mélange de Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [array[i], array[j]] = [array[j], array[i]];
            }
        }    
        //Choix du niveau de difficulté
    let btnchoice1= document.querySelector("#btnchoice1");
    btnchoice1.addEventListener("click", (event)=>{
        event.preventDefault();
        audioplay.play();
        btnchoice1.disabled= true;
        btnchoice2.disabled= true;
        btnchoice3.disabled= true;
        btnplay.disabled= true;
        cacherchoice();
        tbmots= tbmots1;
        tbimages= tbimages1;
        // Mélange le tableau d'images
        shuffleArray(tbimages);
        //mélange des mots
        mélangemots(i3);
        img.src= tbimages[i1];
        placeholder(index);
        console.log(tbimages, Tbmots);
    });
    let btnchoice2= document.querySelector("#btnchoice2");
    btnchoice2.addEventListener("click", (event)=>{
        event.preventDefault();
        btnchoice1.disabled= true;
        btnchoice2.disabled= true;
        btnchoice3.disabled= true;
        btnplay.disabled= true;
        cacherchoice();
        audioplay.play();
        tbmots= tbmots2;
        tbimages= tbimages2;
        // Mélange le tableau d'images
        shuffleArray(tbimages);
        //mélange des mots
        mélangemots(i3);
        img.src= tbimages[i1];
        placeholder(index);
        console.log(tbimages, Tbmots);
    });
    let btnchoice3= document.querySelector("#btnchoice3");
    btnchoice3.addEventListener("click", (event)=>{
        event.preventDefault();
        btnchoice1.disabled= true;
        btnchoice2.disabled= true;
        btnchoice3.disabled= true;
        btnplay.disabled= true;
        audioplay.play();
        cacherchoice();
        tbmots= tbmots3;
        tbimages= tbimages3;
        // Mélange le tableau d'images
        shuffleArray(tbimages);
        //mélange des mots
        mélangemots(i3);
        img.src= tbimages[i1];
        placeholder(index);
        console.log(tbimages, Tbmots);
    }); 

    //mélange du playimages
      shuffleArray(playimages);
      img.src= playimages[0];
    
    btnok.disabled= true;
    btnnext.disabled= true; 
    zoneréponse.disabled= true;

    btnplay.addEventListener("click",
        (event)=>{ 
         //au click du btnplay remove de la classe imagesanimation
         event.preventDefault();
         img.classList.remove("imagesanimation");  
         audioplay.play();
         console.log("play");
         btnok.disabled= false;
         btnnext.disabled= false; 
         zoneréponse.disabled= false;
        }); 
        
    // si le joueur appui sur la touche entrer 
    document.addEventListener("keypress", (ev1)=>{
        //ev1.preventDefault();
        if(ev1.key === "Enter"){ 
        btnok.click()};
    });   
    btnok.addEventListener("click",
     (event)=>{
         event.preventDefault();
         console.log("ok");
         console.log("R="+Tbmots[i1]);
         let réponse = zoneréponse.value; 
         console.log(réponse, score, Tbmots.length);
         if (score + 1 === Tbmots.length ){audiowin.play() }
         event.preventDefault();
         if(réponse === Tbmots[i1]) {
             score++;
             console.log("correct");
             audiook.play();

            }else{ console.log("faux");
                  audiono.play();
                };
         i1++;
         index++;
         placeholder(index);
         event.preventDefault();
         zoneréponse.value="";
         comptescore(score,i1);
         img.src= tbimages[i1];
        
         if (tbimages[i1] === undefined) {
             console.log("end game");
             btnok.disabled= true;
             btnnext.disabled= true; 
             zoneréponse.disabled= true; 
             btnplay.disabled= true;
             img.src= "endgame.png"; 
             zoneréponse.placeholder= " ";
            }   
        })

    //si le joueur appui sur la touche espace
    document.addEventListener("keypress", (ev2)=>{
        //ev2.preventDefault();
        if(ev2.key === " "){ 
           btnnext.click()}
       })
    btnnext.addEventListener("click",
      (event)=> { 
         event.preventDefault();
         audionext.play();
         i1++ ;
         index++;
         placeholder(index);
         comptescore(score,i1);
         console.log("next &" , Tbmots[i1]);
         img.src= tbimages[i1];
         zoneréponse.value="" ;

            if (tbimages[i1] === undefined) {
                 event.preventDefault();
                 console.log("end game");
                 btnok.disabled= true;
                 btnplay.disabled= true;
                 btnnext.disabled= true;
                 img.src= "endgame.png";
                 zoneréponse.disabled= true;
                 zoneréponse.placeholder= " ";
               } 
        })
    
   form.addEventListener("submit",
   (event)=>{
         event.preventDefault();
         let nom= balisenom.value;
         let email= baliseemail.value;
         if(validernom(nom) && valideremail(email) ){
             let scoreafficher= `${score}/${i1}`;
             //let scoreafficher= score + "/" + i1;
             affichernomemail(nom, email, scoreafficher);
             audioplay.play();
            }else{
                event.preventDefault();
                console.log("error")}
    });

     form2.addEventListener("submit",
     (event)=>{
         event.preventDefault();
         let nom2= balisenom2.value;
         let commentaire= balisecommentaire.value;
         if(validernom(nom2) && validercomment(commentaire) ){
             comment(nom2,commentaire);
             audioplay.play();
            }else{console.log("error")}    
    });
  
    function comptescore(score,nbproposition){
    let scorespan= document.querySelector(".score span");
    let showscore= `${score}/${nbproposition}`;
    scorespan.innerText= showscore;
    }
}lancer();
