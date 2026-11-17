const table = document.getElementById('dataTable');
const tbody = table.querySelector('tbody');

mockData.orders.forEach(item => {
  const fechaPedido = item.FechaPedido;
  const fechaEntrega = item.FechaEntrega;
  const diasRetraso = Math.max(0, Math.round(
    (Date.UTC(mockData.referenceDate.getFullYear(), mockData.referenceDate.getMonth(), mockData.referenceDate.getDate())
      - Date.UTC(fechaEntrega.getFullYear(), fechaEntrega.getMonth(), fechaEntrega.getDate())) / 86400000
  ));
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${item.Nombre}</td>
    <td>${item.PoblacionEntrega}</td>
    <td>${item.ProvinciaEntrega}</td>
    <td>${item.Pedido}</td>
    <td>${fechaPedido.toLocaleDateString('es-ES')}</td>
    <td>${fechaEntrega.toLocaleDateString('es-ES')}</td>
    <td>${diasRetraso}</td>
  `;
  tbody.appendChild(row);

  const celdas = row.getElementsByTagName('td');
  const ultimaCelda = celdas[celdas.length - 1];
  const penultimaCelda = celdas[celdas.length - 2];
  const antepenultimaCelda = celdas[celdas.length - 3];
  ultimaCelda.style.textAlign = 'center';
  penultimaCelda.style.textAlign = 'center';
  antepenultimaCelda.style.textAlign = 'center';
});
