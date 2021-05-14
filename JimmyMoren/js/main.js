// Le but de cette fonction est que toute les 3 secondes l'image affichée change, cela fonctionne, cependant si on l'active, notre fonction NextSlide ne fonctionne plus... 
// Il faut donc choisir l'un ou l'autre étant donné que je n'ai pas réussi à faire cohabiter les deux.
// Le fonctionnement est simple, on joue avec les classes "hidden" et "visible" pour cacher et faire appaître l'image

// function main (){
//    setInterval(() => timedAnimation(), 3000);
// }
// // function timedAnimation(){
// //     let largePicture = document.getElementsByClassName("large-picture")[0].children
// //     for(let i=0;i<largePicture.length;i++){
// //         if(largePicture[i].className === "visible"){
// //             document.getElementById("pic"+(i+1).toString()).className = "hidden"
// //             if(i === largePicture.length-1){
// //                 document.getElementById("pic"+"1").className = "visible"
// //                 break;
// //             }else{
// //                 document.getElementById("pic"+(i+2).toString()).className = "visible"
// //                 break;
// //             }
// //         }
// //     }
// // }
// main()

// Slider avec boutons en bas à gauche et à droite de l'image, à chaque clique on remplace le contenu de l'image de picX par la suivante/précédente
var image = new Array("images/large-picture-1.jpg","images/large-picture-2.jpg", "images/large-picture-3.jpg");
var Slide = 0;
imageLength = image.length

function NextSlide(GaucheDroite) {
    Slide += GaucheDroite;
    if (Slide < 0)
    Slide = imageLength - 1;
    if (Slide > imageLength - 1)
    Slide = 0;
    document.getElementById("pic1").src = image[Slide];
}
