import { Ui } from "./UI.module.js";
export class Details {
  constructor(id) {
    document.querySelector("#btnClose").addEventListener("click", () => {
      document.getElementById("games").classList.remove("d-none");
      document.getElementById("details").classList.add("d-none");
    });

    this.getDetails(id);
    //this.uiInstance  = new ui();
  }

  async getDetails(id) {
    const loading = document.querySelector(".loader");
    loading.classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b5c3a84d1cmsh2e85ae452e677c7p195352jsn4a2e8b9ef7a5",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
      
  
    const response = await fetch(url, options);
    const result = await response.json();
    loading.classList.add("d-none");
    const n = result.screenshots.length;
    new Ui().displayDetails(result,n); 
  }
}
