import validateCPF from '../validation/validation'
import { saveCustomer } from '../../api/client'

const sendEvent = (form) => {
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

    form.addEventListener("submit", event => {
        //prevents the behavior of clearing form data when it is submitted
        event.preventDefault()
    
        const nome = event.target.querySelector('[data-nome]')
        const cpf = event.target.querySelector('[data-cpf]')
    
        if(validateCPF(cpf.value)) {
            saveCustomer(nome.value, cpf.value)
            .then( ()=>                 
                form.appendChild(success(
                        "Customer saved successfully"
                    ))
            )
            .catch(()=>
                    form.appendChild(error(
                        "Error on saving customer"
                    ))
            )
        } else {
            form.appendChild(error(
                "CPF is not valid!"
            ))
        }
    })
}

export default sendEvent