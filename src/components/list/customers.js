import { getCustomers, deleteCustomer } from '../../api/client.js'
import "../../assets/css/customers.css"

const removeCustomer = id => {
  if(confirm("Remove customer?")) {
    deleteCustomer(id)
    document.location.reload()
  }
}
  
const createTableBody = ( table ) => {
  const tableBody = document.createElement('tbody')

  const listCustomers = (cpf, nome, id) => {
    const line = document.createElement("tr");
  
    const tableContent = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <button type="button" class="btn btn-danger button-list" onclick="removeCustomer(${id})">Remove</button>
        <a href="components/update/edit.html?id=${id}">
          <button type="button" class="btn btn-info button-list">Edit</button>
        </a>
    `;
  
    line.innerHTML = tableContent;
  
    return line;
  };

  getCustomers().then(customers => {
    customers.forEach(customer => {
      tableBody.appendChild(listCustomers(customer.cpf, customer.nome, customer.id));
    });
  });
  
  table.appendChild(tableBody)
}

const initTable = () => {
  const header = `
  <thead class="thead-dark">
    <tr>
      <th scope="col">CPF</th>
      <th scope="col">Name</th>
      <th scope="col"></th>
      <th scope="col">
        <a class="btn btn-primary" onclick="navigation('/save'); return false;">New customer</a>
      </th>
    </tr>
  </thead>
  `
  const table = document.createElement("table")

  table.innerHTML = header
  table.classList.add("table")

  createTableBody(table)

  return table
}

export default initTable

