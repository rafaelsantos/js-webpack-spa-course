const removeCustomer = id => {
  if(confirm("Remove customer?")) {
    deleteCustomer(id)
    document.location.reload()
  }
}

const listCustomers = (cpf, nome, id) => {
    const line = document.createElement("tr");
  
    const content = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <button type="button" class="btn btn-danger button-list" onclick="removeCustomer(${id})">Remove</button>
        <a href="components/update/edit.html?id=${id}">
          <button type="button" class="btn btn-info button-list">Edit</button>
        </a>
    `;
  
    line.innerHTML = content;
  
    return line;
  };
  
  const table = document.querySelector("[data-content-table]");
  
  getCustomers().then(customers => {
    customers.forEach(customer => {
        table.appendChild(listCustomers(customer.cpf, customer.nome, customer.id));
    });
  });