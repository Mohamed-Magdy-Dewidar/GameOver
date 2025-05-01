import { Details } from "./details.module.js";
import {Ui} from "./UI.module.js"

export class Home {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeActiveClass(link);
        const Category = link.getAttribute("data-category");
        /*  const Category = link.dataset.category; */
        this.getGames(Category);
      });
    });
    this.ui  = new Ui();
    
   

    this.games = document.querySelector(".games");
    this.details = document.querySelector(".details")
  
  }
 

changeActiveClass(link) {
    document.querySelector(".navbar-nav .nav-item .active").classList.remove("active");
    link.classList.add("active");
 

  }

  async getGames(category) {
    const loading = document.querySelector(".loader");
    loading.classList.remove("d-none");

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b5c3a84d1cmsh2e85ae452e677c7p195352jsn4a2e8b9ef7a5",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    
    const req = await fetch(url,options);
    const result = await req.json();
    

    this.ui.displayGames(result);


    loading.classList.add("d-none");
    document.querySelectorAll(".card").forEach((card) =>{
        card.addEventListener("click", ()=>{
            this.details.classList.remove("d-none");
            this.games.classList.add("d-none")
            const gameID = card.dataset.id
            new Details(gameID);

        })

    })

   
  }
}
