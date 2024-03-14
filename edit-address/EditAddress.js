import {fetchGeocodeData} from './opencage/opencage.js'

class EditAddress extends HTMLElement {
  #address = {}
  constructor(){
    super()
    this.innerHTML = `
    <form>
    <label data-html2canvas-ignore><input type=search name="address-search" placeholder="Search"><button class="search-address-button">Search</button></label>
    <input name="street" placeholder="Street">
    <input name="locality" placeholder="Town/City">
    <input name="state" placeholder="State">
    <input name="country" placeholder="Country">
    <input name="zip" placeholder="Zip">
    </form>
    `
    this.listen()
  }

  parse(opencageResponse){
    let data = opencageResponse
    let {house_number, town, road, city, country, state, postcode} = data.components
    let locality = town || city
    let address = {
      street: `${house_number || ""} ${road || ""}`,
      locality,
      state,
      country,
      zip: postcode
    }
console.table(address)
    this.data = address
  }


  set data(address){
    this.#address = address
    this.render()
  }

  format(){
    let {street, locality, state, zip} = this.#address
    console.log(this.#address)
    return `${street}
${locality}
${state}
${zip}`
  }

  get data(){
    return this.#address
  }
  
  render(){
    let { street, locality, state, country, zip } = this.#address
    this.querySelector("[name=street]").value = street || ""
    this.querySelector("[name=locality]").value = locality || ""
    this.querySelector("[name=state]").value = state || ""
    this.querySelector("[name=country]").value = country || ""
    this.querySelector("[name=zip]").value = zip || ""
  }

  listen(){
    this.querySelector('form')
    .addEventListener('submit', submitEvent => submitEvent.preventDefault())

    // when the zip input changes, try using the opencase api to populate the other fields
    this.querySelector("button.search-address-button").addEventListener("click", async clickEvent => {
      let query = this.querySelector("[name=address-search]").value
      let data = await fetchGeocodeData(query)

      this.parse(data)
    })
  }
}

export {EditAddress}
customElements.define('edit-address', EditAddress)
