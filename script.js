function searchItems() {
    let query = document.getElementById('searchBox').value;
    if (query.trim() !== "") {
        window.open(`https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}`, '_blank');
    } else {
        alert("Please enter a search term!");
    }
}
