document.addEventListener("DOMContentLoaded", () => {
    async function fetchItems(){
        const response=await fetch("myjson.json");
        const properties=await response.json();
        console.log(properties.properties);
    }
    fetchItems();
    async function displayProperty(){
        const container=document.getElementById("property-card");
        properties.forEach(property => {
            const col = document.createElement("div");
            col.classList.add("col", "mb-4");
            col.setAttribute("data-aos", "fade-up");
            col.setAttribute("data-aos-once", "true");
            col.setAttribute("data-aos-duration", "1500");
            const card=document.createElement("div");
            card.classList.add("card", "h-70", "main-card");

            const img=document.createElement("img");
            img.src=property.images[0];
            img.alt=property.title;
            img.className = "card-img-top";
            img.loading = "lazy";

        });
        
    }
    displayProperty();
});
