const search = () =>{
    const searchInput = document.getElementById('search-field');
    const searchValue = searchInput.value;
    // console.log(searchValue);
    searchInput.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchValue}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => getSearchResult(data.docs))
}

const getSearchResult = books => {
    // console.log(books)
    const container = document.getElementById('container-div');
    books.forEach (book =>{
        console.log (book);
        const coverImg = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
                <div class="card h-100">
                    <img id="cover" src="${coverImg}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h3 class="card-title">${book.title}</h3>
                      <small class="card-text fst-italic fs-6">${book.author_name}</small>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">first publish year: ${book.first_publish_year}</small><br>
                      <small class="text-muted">publisher: ${book.publisher}</small>
                    </div>
                </div>
        `
        container.appendChild(div);

    })

}



