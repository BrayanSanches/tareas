fetch('p.json')
.then(response => response.json())
.then(data => {
    const productos = data.productos;
    const tableBody = document.getElementById('body');

    productos.forEach(item => {
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
});