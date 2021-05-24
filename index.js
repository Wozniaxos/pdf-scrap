const fs = require('fs');
const PDFParser = require('pdf2json');

const parser = new PDFParser();

parser.on("pdfParser_dataReady", (pdfData) => {
  console.log(pdfData.formImage.Pages.map((page) => page.Texts.map((text) => (
    decodeURI(text.R[0].T).trim()
  ))))
});

parser.loadPDF('./sample.pdf')