async function getdata(){
    var res = await  fetch("https://api.jikan.moe/v4/anime?q=demon%20slayer&sfw")
    var res1 = await res.json()
    console.log(res1)

    var demon = res1.data[0].broadcast
    console.log(demon)


    var div = document.createElement("div")
    div.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">demon slayer</div>
    <div class="card-body text-primary">
      <h5 class="card-title">broadcast</h5>
      <p class="card-text">day:${demon.day}</p>
      <p class="card-text">string:${demon.string}</p>
      <p class="card-text">time:${demon.time}</p>
      <p class="card-text">timezone:${demon.timezone}</p>

     
    </div>
  </div>`
  document.body.append(div)
  
}
getdata();