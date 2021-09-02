const loadBuddies = () => {
    fetch(' https://openlibrary.org/search.json?q=${searchText}')
        .then(res => res.json())
        .then(data => displayBuddies(data));



}
loadBuddies();

const displayBuddies = data => {
    console.log(data);

    const buddies = data.docs;
    console.log(data.docs);
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy)
        console.log(numFound);
        //     console.log(buddy.numFound);
        //     const p = document.createElement('p');
        //     p.innerText = buddy.numFound;
        //     buddiesDiv.appendChild(p);
        // }
    }
}