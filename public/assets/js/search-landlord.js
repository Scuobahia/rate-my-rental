async function newLandlordSearch(event) {
    event.preventDefault();

    const response = await fetch('/api/landlord', {
        method: 'GET',
        body: JSON.stringify({
            title,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/landlord');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.landlordBtn').addEventListener('click', newLandlordSearch)