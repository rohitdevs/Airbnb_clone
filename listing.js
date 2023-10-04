const searchvalue = localStorage.getItem('search');
const leftcolm = document.getElementById("left-colm");



 const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-10-16&checkout=2023-10-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
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
 const head=document.createElement("h1");
 head.innerHTML=`<h1>Recommended Places In ${answer[0].city}</h1>`
 leftcolm.appendChild(head);
  result.results.forEach((ele)=>{
    console.log(ele);
   
    const card=document.createElement("div");
    card.classList.add("house");
    card.innerHTML=`
    <div class="house-img">
                    <a href="house.html"><img src=${ele.images[0]}></a>
                </div>
                <div class="house-info">
                    <p>${ele.type}</p>
                    <h3>${ele.name}</h3>
                    <p>${ele.bedrooms} Bedroom / ${ele.bathrooms} Bathroom / Wifi / Kitchen</p>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                    <div class="house-price">
                        <p>2 Guest</p>
                        <h4>$ ${ele.price.rate} <span>/ day</span></h4>
                    </div>
                </div>
    `;
    
    leftcolm.appendChild(card);
  })
} catch (error) {
	console.error(error);
}
}

fetchData();