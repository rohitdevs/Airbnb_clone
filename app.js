


  window.addEventListener("DOMContentLoaded", (event) => {
    
  console.log("dom loaded");
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", (event) => {
      event.preventDefault();
      const searchInput = document.getElementById("search-input").value;
      console.log(searchInput);
      localStorage.setItem('search',searchInput);
      window.location.href="listing.html"
     
  });
  
});
