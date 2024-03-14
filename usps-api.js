
import { DOMParser, Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

import {USERNAME, PASSWORD} from './USPS.js'
const userId = '603INDEPJ2721';
const zipCode = '01002';
const url = 'http://production.shippingapis.com/ShippingAPI.dll?API=CityStateLookup&XML=';

const xmlRequest = await Deno.readTextFile(`USPS-request.xml`)

fetch(url + encodeURIComponent(xmlRequest), {
    method: 'POST',
    // headers: {
    //     'Content-Type': 'application/html',
    // },
})
.then(response => response.text())
.then(str => (new DOMParser()).parseFromString(str, "text/html"))
.then(data => {
    let elements = Array.from(data.querySelectorAll('*'))
    elements.forEach(element => {
      if(element.localName == 'error'){
        console.log(element.textContent)

      }
    })
    // Extract and process the city and state from the response XML
})
.catch(error => console.error('Error:', error));