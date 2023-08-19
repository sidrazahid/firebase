
   const searchButton = document.getElementById("search-button");
   searchButton.addEventListener("click", function() {
       searchProducts();
   });
   function searchProducts() {
       const searchInput = document.getElementById("search-input");
       const query = searchInput.value.toLowerCase();

       const products = document.querySelectorAll(".product");
       products.forEach(product => {
           const description = product.querySelector(".description h2").textContent.toLowerCase();
           if (description.includes(query)) {
               product.style.display = "block";
           } else {
               product.style.display = "none";
           }
       });
   }

