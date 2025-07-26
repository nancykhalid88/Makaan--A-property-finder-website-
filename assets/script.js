document.addEventListener("DOMContentLoaded", () => {
    async function fetchItems(){
        const response=await fetch("assets/properties.json");
        const properties=await response.json();
        console.log(properties.properties);
        return properties.properties;
    }
    
    async function displayProperty(properties){
        const container=document.getElementById("property-card");
        properties.forEach(property => {
            const myDiv=document.createElement("div");
            myDiv.classList.add("col","mb-4",);
            myDiv.setAttribute("data-aos","fade-up");
            myDiv.setAttribute("data-aos-once","true");
            myDiv.setAttribute("data-aos-duration","1000");

            const card=document.createElement("div");
            card.classList.add("card","h-70","main-card");

            const img=document.createElement("img");
            img.className="card-img-top";
            img.src=property.images[0];
            img.alt=property.title;
            img.loading="lazy";
            card.appendChild(img);

            const cardBody=document.createElement("div");
            cardBody.classList.add("card-body");

            const price=document.createElement("h5");
            price.classList.add("mb-4", "mt-2","card-price");
            price.textContent=`$${property.price}`;
            cardBody.appendChild(price);


            const title=document.createElement("div");
            title.classList.add("card-title");
            title.textContent=property.title;
            cardBody.appendChild(title);

            const locationIcon = document.createElement("i");
            locationIcon.className = "fa-solid fa-location-dot";
            cardBody.appendChild(locationIcon);

            const addressSpan=document.createElement("span");
            addressSpan.classList.add("address");
            addressSpan.textContent=property.address.city;
            cardBody.appendChild(addressSpan);

            const cardFooter=document.createElement("div");
            cardFooter.classList.add("card-footer","bg-white");

            const measurementIcon=document.createElement("i");
            measurementIcon.classList.add("fa-solid" ,"fa-ruler-combined");
            const measurementSpan=document.createElement("span");
            measurementSpan.textContent=property.areaSqFt;
            cardFooter.appendChild(measurementIcon);
            cardFooter.appendChild(measurementSpan);

            cardBody.appendChild(cardFooter);

            card.appendChild(cardBody);
            myDiv.appendChild(card);
            container.appendChild(myDiv);
        });
        
    }
    fetchItems().then(properties => {
    const firstSix = properties.slice(0, 6);
    displayProperty(firstSix);
});

});
