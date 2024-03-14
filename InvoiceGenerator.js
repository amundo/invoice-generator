import {AddLogo, ChooseCurrency, EditAddress, LineItemCalculator, generatePDF} from './index.js'

class InvoiceGenerator extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
    <aside id=sidebar data-html2canvas-ignore>
      <choose-currency></choose-currency>
      <button id=print-pdf>↓ Download PDF</button>
    </aside>

    <main id=invoice>
      <header id=invoice-header>
        <h1><label for=invoice-title>Invoice <input id=invoice-id name=invoice-id placeholder="Title…"></h1>
        <h2><label for=invoice-id>Number <input type=number id=invoice-id name=invoice-id value="1"></h2>
        <div><label for=invoice-date>Invoice date <input type=date id=invoice-date name=invoice-date></div>
        <div><label for=due-date>Due date <input type=date id=due-date name=due-date></div>
        <add-logo></add-logo>
      </header>
      
      <section id=invoice-details>
        <h2>Ship to</h2>
        <edit-address id=shipping-address></edit-address>
        <h2>Bill to</h2>
        <edit-address id=billing-address></edit-address>
      </section>

      <section id=payment>
        <h2>Services</h2>
        <line-item-calculator>
        </line-item-calculator>
      </section>
    </main>
    `
    this.listen()
  }

  inputToOutput(){
    this.querySelectorAll('input')
      .forEach(input => {
        let output = document.createElement('output')
        output.textContent = input.value
        input.after(output)
        input.style.display = 'none'
      })
  }

  render(){
  }

  listen(){
    this.addEventListener('click', clickEvent => {
      if(clickEvent.target.matches('#print-pdf')){
        generatePDF()
      }
    })
  }
}

export {InvoiceGenerator}
customElements.define('invoice-generator', InvoiceGenerator)
