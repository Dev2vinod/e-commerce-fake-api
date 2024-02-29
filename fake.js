function fakeapi() {
  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json, "data of fake store of api");

      //     console.log(json[i].title);
      let news = document.getElementById("news");
      for (let i = 0; i < json.length; i++) {
        news.innerHTML += ` <div class="card" style="width: 18rem;margin:1rem;padding:1rem;">
      <h4> Id ${json[i].id}</h4>
      <img src="${
        json[i].image
      }" class="card-img-top " style ="height:400px; boder:2px soild red;" alt="...">
      <div class="card-body">
  <h5 class="card-title">${json[i].title}...</h5>
  <p class="card-text">${json[i].description.slice(0, 60)}...</p>
  <h6> Price: $${json[i].price}</h6>
  <h5>Category ${json[i].category}</h5>
  <h6>Rating ${json[i].rating.rate}
  
 </div>
       </div>`;
      }
    });
}

fakeapi();

let a = moment("2020-03-02T00:00:00.000Z", "YYYYMMDD").fromNow(); // 12 years ago

console.log(a, "moment time");
