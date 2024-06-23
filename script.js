let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("cpp");
        habilidades[1].classList.add("unity");
        habilidades[2].classList.add("godot");
        habilidades[3].classList.add("cs");
        habilidades[4].classList.add("javascript");
        habilidades[5].classList.add("unreal");

        habilidades[6].classList.add("creative");
        habilidades[7].classList.add("teamwork");
        habilidades[8].classList.add("timewaste");
        habilidades[9].classList.add("curiosidad");
        habilidades[10].classList.add("adapt");
        habilidades[11].classList.add("problems");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}