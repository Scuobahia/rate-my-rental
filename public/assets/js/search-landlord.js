// Modal 
// var open2 = document.getElementById('open2');
// var modal_container2 = document.getElementById('modal-container2');
// var close2 = document.getElementById('close2');

// open2.addEventListener('click', () => {
//   modal_container2.classList.add('show');
// });
// close2.addEventListener('click', () => {
//   modal_container2.classList.remove('show');
// });
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
