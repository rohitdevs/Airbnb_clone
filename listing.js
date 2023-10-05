


window.addEventListener("DOMContentLoaded", (event) => {
    

  const container=document.getElementById("containerid");
  const tostore = localStorage.getItem('search');
const leftcolm = document.getElementById("left-colm");

const arr=tostore.split(" ");



const searchvalue = arr[0];
const fromdate=arr[1];
const todate=arr[2];
const noguest=arr[3];

console.log(arr);

 const url = `https://airbnb13.p.rapidapi.com/search-location?location=${searchvalue}&checkin=${fromdate}&checkout=${todate}&adults=${noguest}&children=0&infants=0&pets=0&page=1&currency=USD`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ab4d38a438msh04aa45686fbe831p178362jsnea895e56aba7',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};


async function fetchData() {
try {
	const response = await fetch(url, options);
	const result = await response.json();
 const answer=result.results;
 const optionss=document.createElement("p");
 optionss.innerHTML="200+ Options";
 const head=document.createElement("h1");
 head.innerHTML=`<h1>Recommended Places In ${answer[0].city}</h1>`
 leftcolm.appendChild(head);


 const pagi=document.createElement("div");
pagi.classList.add("pagination");
pagi.innerHTML=`  <img src="images/arrow.png">
<span class="current">1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>5</span>
<span>&middot; &middot; &middot; &middot;</span>
<span>20</span>
<img src="images/arrow.png" class="right-arrow">`;


const foote=document.createElement("div");
foote.classList.add("footer");
foote.innerHTML=`  <a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a>
<a href="https://youtube.com/"><i class="fab fa-youtube"></i></a>
<a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
<a href="https://linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
<a href="https://instagram.com/"><i class="fab fa-instagram"></i></a>
<hr>
<p>Copyright © 2023, made by Rohit S.</p>`;


container.appendChild(pagi);
container.appendChild(foote);
  result.results.forEach((ele)=>{
    console.log(ele);
   
    const card=document.createElement("div");
    card.classList.add("house");
    card.innerHTML=`
    <div class="house-img">
                    <a href="house.html"><img src=${ele.images[0]}></a>
                </div>
                <div class="house-info">
                    <p>${ele.type} &nbsp;${ele.rating}⭐</p>
                    <h3>${ele.name}</h3>
                    <p>${ele.bedrooms} Bedroom / ${ele.bathrooms} Bathroom /  ${ele.beds} beds / Kitchen</p>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                    <div class="house-price">
                        <p>${noguest} Guest</p>
                        <h4>$ ${ele.price.rate} <span>/ day</span></h4>
                    </div>
                </div>
    `;
    
    leftcolm.appendChild(card);




    card.addEventListener("click", (event) => {
      event.preventDefault();
     const housee=JSON.stringify(ele);
      localStorage.setItem('housedetails',housee);
      window.location.href="temp.html"
     
  });
  })
} catch (error) {
	console.error(error);
}
}

fetchData();



  
});
