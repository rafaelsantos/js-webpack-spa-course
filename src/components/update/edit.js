import { getCustomer, updateCustomer } from '../../api/client'
import validateCPF from '../validation/validation'

const eventForm = form => {
    const path = new URL(window.location)
    const id = path.searchParams.get("id")
    
    const cpf = form.querySelector('[data-cpf]')
    const name = form.querySelector('[data-nome]')
    
    getCustomer(id).then(data => {
        cpf.value = data[0].cpf
        name.value = data[0].nome
    })
    
    const success = (message) => {
        const line = document.createElement("section");
      
        const content = `
            <p align="center" />
            <div class="alert alert-success" role="alert">
                ${message}
            </div>
        `;
      
        line.innerHTML = content;
      
        return line;
    }
    
    const error = (message) => {
        const line = document.createElement("section");
      
        const content = `
            <p align="center" />
            <div class="alert alert-warning" role="alert">
                ${message}
            </div>
        `;
      
        line.innerHTML = content;
      
        return line;
    }
    
    form.addEventListener('submit', event => {
        event.preventDefault()
    
        if(!validateCPF(cpf.value)) {
            alert("CPF inválido")
            return
        }
    
        updateCustomer(id, cpf.value, name.value)
        .then( ()=>                 
            form.appendChild(success(
                    "Customer edited successfully"
                ))
        )
        .catch(()=>
                form.appendChild(error(
                    "Error on editing customer"
                ))
        )
    })
}

export default eventForm
