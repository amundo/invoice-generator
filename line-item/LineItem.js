class LineItem extends HTMLElement {
  constructor(){
    super()
    const html = `
    <div class=description><input name="description" placeholder="Description"></div>
    <div class=quantity>× <input type=number name="quantity" placeholder="Quantity" value=1 step=1></div>
    <div class=price><input name="price" type=number placeholder="Price"></div>
    <div class="total">
      <span class=monetary-value>
        <span class=currency-symbol>$</span>
        <output name="total">0.00</output>
      </span>
    </div>
    <div class=controls>  
      <button class=remove-line-item>x</button>
    </div>
    
    `
    let pre = document.createElement('pre')
    pre.textContent = html
    this.insertAdjacentElement('afterend', pre)
    this.innerHTML = html
    this.listen()
  }


  read(){
    let price = parseFloat(this.querySelector('[name=price]').value)
    let quantity = parseInt(this.querySelector('[name=quantity]').value)
    return {price, quantity}
  }

  formatPrice(float){
    return parseFloat(float).toFixed(2)
  }

  listen(){

    this.addEventListener('input', () => {

        let {price, quantity} = this.read()
        let total = quantity * price

        this.value = total
        if(Number.isFinite(total)){
          this.querySelector('[name=total]').value = this.formatPrice(this.value)
        }
    })

    this.addEventListener('click', clickEvent => {
      if(clickEvent.target.classList.contains('remove-line-item')){
        this.remove()
      }
    
    })

  }
}

export {LineItem}
customElements.define('line-item', LineItem)
