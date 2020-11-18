import { getCustomers, deleteCustomer } from '../../api/client.js'
import "../../assets/css/customers.css"

const removeCustomer = id => {
  if(confirm("Remove customer?")) {
    deleteCustomer(id)
    document.location.reload()
  }
}

const createDeleteButton = (id) => {
  const button = document.createElement('button')
  button.classList.add('btn', 'btn-danger')
  button.innerHTML = 'Remove'
  button.style.marginLeft = '10px'
  button.style.marginTop = '1px'

  button.addEventListener('click', ()=> {
    removeCustomer(id)
  })

  return button
}
const createTableBody = ( table ) => {
  const tableBody = document.createElement('tbody')

  const listCustomers = (cpf, nome, id) => {
    const line = document.createElement("tr");
  
    const tableContent = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <button type="button" class="btn btn-info button-list" onclick="navigation('/edit?id=${id}'); return false;">Edit</button>
    `;
  
    line.innerHTML = tableContent;
    line.appendChild(createDeleteButton(id))
  
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

