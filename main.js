const Get = (id) =>{
  return document.getElementById(id)
}


let menuBurger = document.querySelector(".fa-bars")
menuBurger.addEventListener("click" , () =>{
  let navBARUl = Get("myUL")
  let myHeader = Get("myHeader")
  /*const navBARUl = document.querySelector("#nav-bar ul")*/
  navBARUl.classList.toggle("displayUl")
  myHeader.classList.toggle("headerWidth") 
  /*navBARUl.style.display = "inline"*/
})
window.addEventListener("scroll" , ()=>{
  if (window.scrollY > 0){
    let containerLeft = Get("container-left")
    containerLeft.classList.toggle("animation-container-left")
  }
})

