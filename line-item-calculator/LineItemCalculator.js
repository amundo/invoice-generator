import {LineItem} from '../line-item/LineItem.js'

class LineItemCalculator extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `

      <section class=line-item-headers>
          <div class=description-header>Description</div>
          <div class=quantity-header>Quantity</div>
          <div class=price-header>Price</div>
          <div class=amount-header>Amount</div>
          <div></div>
      </section>

      <section class=line-items>
      </section>

      <footer class=line-items-footer>
        <button class="add-line-item">Add</button>
      </footer>

        <div class=calculation>
          <label for=line-items-subtotal>Subtotal</label>
          <output id=line-items-subtotal name="line-items-subtotal">0.00</output>

          <label for=tax-rate-percentage>Tax percentage × <input id=tax-rate-percentage name="tax-rate-percentage" value=2>%</label>
          <output id=tax-amount name="tax-amount">0.00</output>

          <label for=line-items-total>Total</label>
          <output id=line-items-total name="line-items-total" value=2></output>
        </div><!-- .calculation -->

    `
    
    this.listen()
  }


  connectedCallback(){
    let lineItem = new LineItem()
    this.querySelector('.line-items').appendChild(lineItem)
  }

  get taxRate(){
    return parseFloat(this.querySelector('[name=tax-rate-percentage]').value) / 100
  }

  get subtotal(){
    let subtotal = Array.from(this.querySelectorAll('line-item'))
      .reduce((total, lineItem) => {
        return total + lineItem.value
      }, 0)

    return subtotal
  }

  get total(){
    return this.subtotal * (1 + this.taxRate)
  }

  render(){
    this.data.forEach(lineItem => {
      let lineItemElement = new LineItem()
      this.querySelector('section.line-items').appendChild(lineItemElement)
    })
  }

  listen(){
    this.addEventListener('click', clickEvent => {
      
      if(clickEvent.target.matches('button.add-line-item')){
        let lineItem = new LineItem()
        this.querySelector('section.line-items').appendChild(lineItem)
        lineItem.querySelector('input').focus()

      }
    })

    this.addEventListener('input', () => {
      this.querySelector('output[name=line-items-subtotal]').textContent = this.subtotal.toFixed(2)
      this.querySelector('output[name=tax-amount]').textContent = (this.subtotal * this.taxRate).toFixed(2)
      this.querySelector('output[name=line-items-total]').textContent = this.total.toFixed(2)
    })
  }
}

export {LineItemCalculator}
customElements.define('line-item-calculator', LineItemCalculator)
