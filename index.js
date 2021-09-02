const errorDiv = document.getElementById('error');
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    errorDiv.innerText = '';

    if (searchText === '') {
        errorDiv.innerText = "Search Field is Empty.";
    }

    const url = `https://openlibrary.org/search.json?q=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}

const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (docs === []) {
        errorDiv.innerText = 'not available';
    }
    else {
        errorDiv.innerText = '';
    }

    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
            <div  class="card h-100 text-center">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top w-50 rounded mx-auto d-block" alt="...">
            <div class="card-body">
                <h5 class="card-title">Book Title: ${doc.title} </h5>
                <p class="book-author">Author Name: ${doc.author_name[0]} </p>
                <p class="publisher-name">First Publisher: ${doc.publisher[0]} </p>
                <p class="publisher-year">First Publish Year: ${doc.first_publish_year} </p>
                
               
            </div>
            </div>
            `;
        searchResult.appendChild(div);
    })
}



