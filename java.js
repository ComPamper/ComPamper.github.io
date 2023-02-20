function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("CSS");
        habilidades[3].classList.add("Python"); 
    }
}

window.onscroll = function(){
    efectoHabilidades();
} 