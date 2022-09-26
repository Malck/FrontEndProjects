//Quand on clique sur submit on display none le <div class="main-box"> et on affiche l'autre 

//On doit afficher un texte evolutif : si on a cliquer sur 4 ou nimporte quel chiffre
//cette valeur sera reutiliser dans le texte ici 

const start = document.querySelector('.start');
const thank = document.querySelector('.thank');
const submit = document.querySelector('.btn-submit');
const rate = document.getElementById('rate');
//les bulles de nombres 

submit.addEventListener('click', showThank);
function showThank(){
    thank.classList.remove('hide');
    start.classList.add('hide');
}

function selectedNumber(){
    const nbTag = document.querySelectorAll(".nbTag");

    nbTag.forEach(function(tag){
    
        tag.addEventListener('click',() => {
            rate.innerHTML = tag.innerHTML
        });
    });
}
selectedNumber();
