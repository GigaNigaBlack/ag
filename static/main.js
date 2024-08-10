document.addEventListener('DOMContentLoaded', function() {
    // Fetch NEO data from the backend
    fetch('/neo-data')
    .then(response => response.json())
    .then(data => {
        let tableBody = document.getElementById('neo-table-body');
        tableBody.innerHTML = ''; // Clear any existing rows

        // Loop through the data and create table rows
        data.forEach(neo => {
            let row = document.createElement('tr');
            row.innerHTML = `<td>${neo[1]}</td><td>${neo[2]}</td><td>${neo[3]}</td>`;
            row.addEventListener('click', () => showDetails(neo));
            tableBody.appendChild(row);
        });
    });
});

// Function to display details of a NEO when a row is clicked
function showDetails(neo) {
    document.getElementById('neo-details').innerHTML = `
        <h2>${neo[1]}</h2>
        <p>Size: ${neo[2]} meters</p>
        <p>Miss Distance: ${neo[3]} km</p>
    `;
    drawOrbit(neo);  // Function to draw the NEO's orbit (if implemented)
}

