
    const input = document.querySelector("input");
    const searchBtn = document.querySelector(".searchBtn");
    const results = document.querySelector("#results");

    const API_KEY = 'jUXc0FJg96k9u1pFLW8mcksYmsXlRkkiMjL_Wn3EK_A'

    searchBtn.addEventListener("click", ()=>{
      returnImage();
    });

    async function returnImage(){
      results.innerHTML = "";

      const searchTerm = input.value;

      const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${API_KEY}`);

      const data = await response.json();

      console.log(data);

      data.results.forEach(photo=>{
        const imageUrl = photo.urls.small;
        const fullImageUrl = photo.urls.full;
        const newImage = document.createElement("img");
        newImage.alt = photo.alt_description;
        newImage.src = imageUrl;

        results.appendChild(newImage);

        newImage.addEventListener("click", ()=>{
        window.open(fullImageUrl, "_blank");
      })

      });
    }

      input.addEventListener("keydown", (event)=>{
        if(event.key==="Enter"){
          searchBtn.click();
        }
      });