fetch('p.json')
.then(response => response.text())
.then(data => {
    const jsonData = JSON.parse(data);
    const tableBody = document.querySelector('.Tabla tbody');

    jsonData.productos.forEach(item => {
        const row = document.createElement('tr');

        const cnombre = document.createElement('td');
        cnombre.textContent = item.nombre;
        row.appendChild(cnombre);

        const cprecio = document.createElement('td');
        cprecio.textContent = item.precio;
        row.appendChild(cprecio);

        const ccantidad = document.createElement('td');
        ccantidad.textContent = item.cantidad;
        row.appendChild(ccantidad);

        const cimagen = document.createElement('td');
        const image = document.createElement('img');
        image.src = item.imagen;
        cimagen.appendChild(image);
        row.appendChild(cimagen);

        tableBody.appendChild(row);
    });
})
.catch(error => {
    console.log('Error:', error);
});