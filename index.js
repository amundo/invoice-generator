import html2canvas from 'https://esm.sh/html2canvas@1.4.1'

import jsPDF from 'https://esm.sh/jspdf';
import { AddLogo } from "./add-logo/AddLogo.js";
import { ChooseCurrency } from "./choose-currency/ChooseCurrency.js";
import { EditAddress } from "./edit-address/EditAddress.js";
import { LineItemCalculator } from "./line-item-calculator/LineItemCalculator.js";

let generatePDF = async () =>  {
  // Select the HTML content you want to convert to PDF
  const element = document.body.querySelector('main#invoice')

  // Use html2canvas to capture the content
  html2canvas(element).then((canvas) => {
    // Initialize jsPDF
    // const pdf = new jsPDF('p', 'in', 'letter');
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "in",
      format: "letter"
    })
    
    // Add the captured content as an image to the PDF
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
    
    // Save the generated PDF
    pdf.save('invoice.pdf');
  })
}

export {AddLogo, EditAddress, ChooseCurrency, generatePDF, LineItemCalculator}