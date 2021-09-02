const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    // api called below & data.numFound will also work as erorr handler---------------------
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const totalresult = document.getElementById('total-result');
            totalresult.innerText = `${data.numFound} search result found`;
            showResults(data.docs);
        });
}

// show result in below function -------------------------------------------
const showResults = books => {
    const searchResults = document.getElementById('search-results')
    searchResults.textContent = '';
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
         <div class="card h-100">
         <div class="card-body" >
         <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="..." height="500px">
             <h5 class="card-title mt-3">${book.title}</h5>
             <p>Author: <span class="text-primary">${book.author_name}</span></p>
             <p>First published: ${book.first_publish_year}</p>            
          </div>
        </div>
         `
        searchResults.appendChild(div);
    })
};
