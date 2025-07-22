let slogan = document.getElementById("slogan");
let btnNext = document.getElementById("next");
const avatarChoise = document.getElementById("avatarChoise");
const username =document.getElementById("userName");
const sloganArray = ["Un Mars et ça repart ","Parce que nous le valons bien","C’est beau la vie, pour les grands et les petits "]

document.getElementById('randomDescription').addEventListener("click",(e)=>{
    const random=  Math.round(Math.random(1)*2)
    if (sloganArray[random]!== slogan.textContent) {
        slogan.textContent = sloganArray[random]
    } else if (sloganArray[random] === slogan.textContent) {
        if (random < 1 ) slogan.textContent = sloganArray[random +1]
        if (random > 1 ) slogan.textContent = sloganArray[random -1]
        if (random == 1 ) slogan.textContent = sloganArray[random +1]
    }
})


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

avatarChoise.addEventListener("click",(e)=>{
    if (e.srcElement.id !== "img") return
    document.querySelector(".selected").classList.remove("selected");
    e.srcElement.classList.add("selected")
})

function allEntriValidate() {
    let newUserName = document.getElementById('userName').value
    const regex = /^[a-zA-Z]+$/;
    if (regex.test(newUserName)) {
        btnNext.classList.remove("unValidate")
    } else if (!regex.test(newUserName)) {
        btnNext.classList.add("unValidate")
    }
}

btnNext.addEventListener("click", (e) => {
    if (btnNext.classList.contains("unValidate")) return

    document.getElementById("form").classList.add("hidden")
    document.getElementById("card").classList.remove("hidden")
    
    document.getElementById("profilImg").src = document.getElementsByClassName("selected").img.src
    document.getElementById("profilDesc").innerText = slogan.textContent
    document.getElementById("profilUserName").innerText = document.getElementById('userName').value
})

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