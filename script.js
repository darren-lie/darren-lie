let navhome=document.querySelector('#nav-home'); //selection nav home dalam variabel
let foto=document.querySelector('.foto');
let info=document.querySelector('.info');
let navabout=document.querySelector('#nav-about');
let about=document.querySelector('.about');
let navproject=document.querySelector('#nav-project');
let project=document.querySelector('.project');
function panggilHome(){
    foto.style.visibility='visible';
    info.style.visibility='visible';
    about.style.visibility='hidden';
     project.style.visibility='hidden';
     navhome.style.backgroundColor='whitesmoke';
     navhome.style.color='grey';
     navabout.style.backgroundColor='';
     navabout.style.color='whitesmoke';
     navproject.style.backgroundColor='';
     navproject.style.color='whitesmoke';
}

panggilHome();




navhome.addEventListener('click',function(){ //membuat eventnya di klik
// console.log('tombol home berhasil');
panggilHome();
} );



navabout.addEventListener('click',function(){
    // console.log('tombol about berhasil');
    about.style.visibility='visible';
    foto.style.visibility='hidden';
    info.style.visibility='hidden';
     project.style.visibility='hidden';
     navabout.style.backgroundColor='whitesmoke';
     navabout.style.color='grey';
     navhome.style.backgroundColor='';
     navhome.style.color='whitesmoke';
     navproject.style.backgroundColor='';
    navproject.style.color='whitesmoke';
} );



navproject.addEventListener('click',function(){
    // console.log( 'tombol project berhasil');
    project.style.visibility='visible';
    foto.style.visibility='hidden';
    info.style.visibility='hidden';
    about.style.visibility='hidden';
    navproject.style.backgroundColor='whitesmoke';
    navproject.style.color='grey';
    navhome.style.backgroundColor='';
    navhome.style.color='whitesmoke';
    navabout.style.backgroundColor='';
    navabout.style.color='whitesmoke';
} );