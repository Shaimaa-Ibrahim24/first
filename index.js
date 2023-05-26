let form = document.querySelector("form");
let input = document.querySelector(".input");
let proCon = document.querySelector(".pro-con");
let upload = document.querySelector(".uplo");
console.log();




form.addEventListener("submit", (eo) => {
    eo.preventDefault();
     const newProduct = `<div class="task">
        <span class="icon-star icon"></span>
        <p class="text">${input.value}</p>
        <div>
        <span class="icon-bin icon binn"></span>
       <span class="icon-sad icon"></span>
       </div>
       </div>`;
       proCon.innerHTML += newProduct;
    input.value = "";
})

proCon.addEventListener("click", (eo) => {
    eo.preventDefault();
    if(eo.target.className === "icon-bin icon binn"){
        eo.target.parentElement.parentElement.remove();
    }else if(eo.target.className === "icon-sad icon"){
       eo.target.style.display = "none";
      const myHeart = `<span class="icon-heart"></span>`;
      eo.target.parentElement.parentElement
      .getElementsByClassName("text")[0].classList.add("finish");
      eo.target.parentElement.innerHTML += myHeart;
    }else if(eo.target.className === "icon-heart"){
         eo.target.parentElement.parentElement
      .getElementsByClassName("text")[0].classList.remove("finish");
      eo.target.style.display = "none";
       let angry = `<span class="icon-sad icon"></span>`;
       eo.target.parentElement.innerHTML += angry;

    }else if(eo.target.className === "icon-star icon"){
        eo.target.classList.add("orange");
       proCon.prepend(eo.target.parentElement);
    }else if(eo.target.className === "icon-star icon orange"){
        eo.target.classList.remove("orange");
    }
})