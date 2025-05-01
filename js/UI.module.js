export class Ui {
  constructor() {}

  displayGames(data) {
    let gameConatiner = ``;
    for (let i = 0; i < data.length; i++) {
      gameConatiner += `  
      <div class="col">
            <div data-id="${
              data[i].id
            }" class="card h-100 bg-transparent" role="button">
               <div  class="card-body">
                  <figure class="position-relative">
                     <img class="card-img-top object-fit-cover h-100" src="${
                       data[i].thumbnail
                     }" />
                  
                  </figure>
      
                  <figcaption>
      
                     <div class="hstack justify-content-between">
                        <h3 class="h6 small text-white">${data[i].title}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                     </div>
      
                     <p class="card-text small text-center opacity-50">
                        ${data[i].short_description.split(" ", 8)}
                     </p>
      
                  </figcaption>
               </div>
      
               <footer class="card-footer small hstack justify-content-between">
      
                  <span class="badge badge-color">${data[i].genre}</span>
                  <span class="badge badge-color">${data[i].platform}</span>
      
               </footer>
            </div>
         </div>`;
    }
    document.getElementById("gameData").innerHTML = gameConatiner;
  }

  displayDetails(data, n) {
    let gallery = "";
    if (n >= 0 && n <= 4) {
      for (let i = 0; i < n; i++) {
        gallery += `
          <img src="${data.screenshots[i].image}" class="w-50 pe-2" height = "230" alt="game Pictures">
   
         `;
      }
    } else {
      for (let i = 0; i < n; i++) {
        gallery += `
          <img src="${data.screenshots[i].image}" class="w-25 pe-2" height = "230" alt="game Pictures">
   
         `;
      }
    }
 

    const gameDetails = `
         <div class="col-md-4">
                <img src="${data.thumbnail}" class="w-100" alt="image details" />
             </div>
             <div class="col-md-8">
                <h3 class="text-white">Title: ${data.title}</h3>
                <p class="text-white">Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                <p class="text-white">Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                <p class="text-white">Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                <p class="small text-white">${data.description}</p>
                <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>
             </div>
              <div class="col-md-8 mx-auto mb-3 ">
                <div class="gallery mx-auto  mt-5 d-flex justify-content-center align-items-center" >
                   ${gallery}
                              
  
               
              
  
               </div>
  
             </div>

          
        
         
      
     `;

    document.getElementById("detailsContent").innerHTML = gameDetails;
    this.editGameDetails();
  }
  editGameDetails(){
    let allScreenShots = Array.from(document.querySelectorAll(".gallery img"));
    let layer = document.querySelector(".layer");
    let inner = document.querySelector(".inner");
    let closeMark = document.querySelector(".fa-xmark");
    let nextImg = document.querySelector(".fa-arrow-right");
    let prevImg = document.querySelector(".fa-arrow-left");
    let index;
    let imgSrc;


    for (let i = 0; i < allScreenShots.length; i++) {
      allScreenShots[i].addEventListener("click", function (e) {
        
        layer.classList.remove("d-none");
        imgSrc = e.target.getAttribute("src");
        inner.style.backgroundImage = `url(${imgSrc})`;
        index = allScreenShots.indexOf(e.target);
        
      });
    }
    function getNext() {
      index++;
      index == allScreenShots.length ? (index = 0) : "";
      imgSrc = allScreenShots[index].getAttribute("src");
      inner.style.backgroundImage = `url(${imgSrc})`;
    }
    function getPrev(){
      index--;
      index == -1 ? (index = (allScreenShots.length - 1)) : "";
      imgSrc = allScreenShots[index].getAttribute("src");
      inner.style.backgroundImage = `url(${imgSrc})`;

    }

    function closeImg() {
      layer.classList.add("d-none");
    }
    closeMark.addEventListener("click", closeImg);
    nextImg.addEventListener("click", getNext);
    prevImg.addEventListener("click", getPrev); 

  }
}
