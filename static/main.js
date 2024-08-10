document.addEventListener('DOMContentLoaded', function() {
    fetch('/neo-data')
    .then(response => response.json())
    .then(data => {
        let tableBody = document.getElementById('neo-table-body');
        data.forEach(neo => {
            let row = document.createElement('tr');
            row.innerHTML = `<td>${neo[1]}</td><td>${neo[2]}</td><td>${neo[3]}</td>`;
            row.addEventListener('click', () => showDetails(neo));
            tableBody.appendChild(row);
        });
    });
});

function showDetails(neo) {
    document.getElementById('neo-details').innerHTML = `
        <h2>${neo[1]}</h2>
        <p>Size: ${neo[2]} meters</p>
        <p>Miss Distance: ${neo[3]} km</p>
    `;
    drawOrbit(neo);
}

function drawOrbit(neo) {
    // Placeholder for orbit drawing function using Canvas
}
