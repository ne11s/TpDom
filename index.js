let slogan = document.getElementById("slogan");
let btnNext = document.getElementById("next");
const avatarChoise = document.getElementById("avatarChoise");
const username =document.getElementById("userName");

const imgCard = document.getElementById("profilImg");
const descCard = document.getElementById("profilDesc");
const userNameCard= document.getElementById("profilUserName");


const sloganArray = ["Un Mars et ça repart ","Parce que nous le valons bien","C’est beau la vie, pour les grands et les petits "]


//gestion des slogan
document.getElementById('randomDescription').addEventListener("click",()=>{
    const random=  Math.round(Math.random(1)*2)
    if (sloganArray[random]!== slogan.textContent) {
        slogan.textContent = sloganArray[random]
    } else if (sloganArray[random] === slogan.textContent) {
        if (random < 1 ) slogan.textContent = sloganArray[random +1]
        if (random > 1 ) slogan.textContent = sloganArray[random -1]
        if (random == 1 ) slogan.textContent = sloganArray[random +1]
    }
})

// si ya un user ça met directement la card
if (localStorage.getItem("user") !== null) {
    changePage("form")
    const existinguser =  JSON.parse(localStorage.getItem("user"))
    
    imgCard.src = existinguser.imgSrc
    descCard.innerText = existinguser.description
    userNameCard.innerText = existinguser.username
}

//simulation de changement de page
function changePage(page){
    const pages = page == "form" ? "card" : "form";
    document.getElementById(page).classList.add("hidden")
    document.getElementById(pages).classList.remove("hidden")
}

//verification regex pour le pseudo
username.addEventListener("keyup",()=>{
    let errUserName = document.getElementById('regexUserName')
    let newUserName = document.getElementById('userName')
    newUserName = newUserName.value
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(newUserName)) {
        errUserName.classList.remove("hidden")
    } else if (regex.test(newUserName)) {
        errUserName.classList.add("hidden")
    }
    allEntriValidate()
})

//selection d'image
avatarChoise.addEventListener("click",(e)=>{
    if (e.srcElement.id !== "img") return
    document.querySelector(".selected").classList.remove("selected");
    e.srcElement.classList.add("selected")
})

//verification si les entrez son valide meme si c'est que le pseudo 
function allEntriValidate() {
    let newUserName = document.getElementById('userName').value
    const regex = /^[a-zA-Z]+$/;
    if (regex.test(newUserName)) {
        btnNext.classList.remove("unValidate")
    } else if (!regex.test(newUserName)) {
        btnNext.classList.add("unValidate")
    }
}

//evenement au clique sur le btn suivant
btnNext.addEventListener("click", (e) => {
    if (btnNext.classList.contains("unValidate")) return

    changePage("form")
    const user = {
        username :username.value,
        description : slogan.textContent,
        imgSrc: document.getElementsByClassName("selected").img.src
    }
    localStorage.setItem("user", JSON.stringify(user))
    
    
    imgCard.src = user.imgSrc
    descCard.innerText = user.description
    userNameCard.innerText = user.username
    
})


//gestion du mode sombre
document.getElementById("darkMode").addEventListener("click",(e)=>{
    let darkmod = document.body.style
    e.target.value = e.target.value === "Light" ? "Dark" : "Light"
    if (e.target.value === "Light") {
        darkmod.backgroundColor = "white"
        darkmod.color ="black" 
    } else {
        darkmod.backgroundColor = "black" 
        darkmod.color = "white"
    }
})

//au clique sur modifier
document.getElementById('modifie').addEventListener('click',(e)=>{
    changePage("card")
});

