import { getCustomers, deleteCustomer } from '../../api/client.js'
import "../../assets/css/customers.css"
import initSave from '../save/component-save.js'

const removeCustomer = id => {
  if(confirm("Remove customer?")) {
    deleteCustomer(id)
    document.location.reload()
  }
}

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
  
const content = `
  <thead class="thead-dark">
    <tr>
      <th scope="col">CPF</th>
      <th scope="col">Name</th>
      <th scope="col"></th>
      <th scope="col">
        <a class="btn btn-primary">New customer</a>
      </th>
    </tr>
  </thead>
`
const container = document.querySelector('[data-container]')
const table = document.createElement("table")

table.innerHTML = content
table.classList.add("table")
container.appendChild(table)

const newCustomer = document.querySelector('.btn')
const tableBody = document.createElement('tbody')
console.log(newCustomer)

newCustomer.addEventListener('click', () => {
  initSave()
})

getCustomers().then(customers => {
  customers.forEach(customer => {
    tableBody.appendChild(listCustomers(customer.cpf, customer.nome, customer.id));
  });
});

table.appendChild(tableBody)

