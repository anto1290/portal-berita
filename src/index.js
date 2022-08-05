axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=f582b3efe3cd45a596bb2b3cee9e963b')
    .then(res => res.data)
    .then(data => document.getElementById('card').innerHTML = render(data.articles));
const input = document.querySelector('input[type="search"]');
input.addEventListener('keydown', function (e) {
    const search = e.target.value;
    axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&country=id&apiKey=f582b3efe3cd45a596bb2b3cee9e963b`)
        .then(res => res.data)
        .then(data => document.getElementById('card').innerHTML = render(data.articles));
}
    , false);


function render(result) {
    let card = ''
    result.map((data, index) => {
        card += `
        <div class="col-4" >
            <div class="card">
                    <img src="${data.urlToImage}" class="card-img-top" style="height: 15vw;" alt="gambar">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text"><small class="text-muted">${data.author}</small></p>
                        <p class="card-text">${data.description}</p>
                        <a href="${data.url}" class="btn btn-primary">Read More</a>
                    </div>
            </div>
            </div>
            `
    });
    return card;
}