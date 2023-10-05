


  window.addEventListener("DOMContentLoaded", (event) => {
    
  console.log("dom loaded");
  const searchButton = document.getElementById("search-button");
  






  searchButton.addEventListener("click", (event) => {
      event.preventDefault();
      const searchInput = document.getElementById("search-input").value;
      const fromdate=document.getElementById("datefrom").value;
      const todate=document.getElementById("dateto").value;
      const noguest=document.getElementById("guestno").value;
      
      let tostore=searchInput+" "+fromdate+" "+todate+" "+noguest;

      console.log(searchInput,fromdate,todate,noguest);
      localStorage.setItem('search',tostore);
      window.location.href="listing.html"
     
  });
  
});
