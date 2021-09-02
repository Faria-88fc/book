// onclick function
const search = () =>{
  const searchInput = document.getElementById('search-field');
  const searchValue = searchInput.value;
  searchInput.value = '';

  // api data
  const url = `https://openlibrary.org/search.json?q=${searchValue}`;
  fetch(url)
  .then(res => res.json())
  .then(data => {
    if ( data.status === 404){
      return 'no result found';
    }
    else{
      getSearchResult(data);
    }
  })
}


const getSearchResult = Document => {

  const container = document.getElementById('container-div');
  container.innerHTML = '';

  // total search result
  const totalScearchResult = Document.numFound;
  const result = document.getElementById('total-result');
  result.innerHTML = '';
  const total = document.createElement('h3');
  total.innerHTML=`<h3>total search results:${totalScearchResult}</h3>`;
  result.appendChild(total);
    
    
    
  const books = Document.docs;
  books.forEach (book =>{
    console.log (book);
    const coverImg = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
              <div class="card h-100">
                  <img id="cover" src="${coverImg}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h3 class="card-title">${book.title}</h3>
                    <small class="card-text fst-italic fs-6">by ${book.author_name}</small>
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



