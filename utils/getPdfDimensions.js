import { PDFDocument } from "pdf-lib";

const getPdfDimensions = async (pdfUrl) => {
  try {
    const response = await fetch(pdfUrl);
    const arrayBuffer = await response.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const page = pdfDoc.getPage(0);
    const { width, height } = page.getSize();
    return { width, height };
  } catch (error) {
    return { width:600, height:1000}
  }
};

export default getPdfDimensions;
