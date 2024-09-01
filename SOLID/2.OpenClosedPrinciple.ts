// OCP: Open Closed Principle

// No usa OCP
// class Printer {
//   printPDF(data: any) {
//     // ...
//   }

//   printWebDocument(data: any) {
//     // ...
//   }

//   printPage(data: any) {
//     // ...
//   }

//   verifyData(data: any) {
//     // ...
//   }
// }

// Si usa OCP
// Porque esta abierto para extender (las clases extienden de otra clase base) y esta cerrado para modificar ya que si necesitamos crear algo nuevo se crea una nueva clase que extiende de de la clase base, sin modificar una de las clases creadas.
interface Printer {
  print(data: any);
}

class PrinterImplementation {
  verifyData(data: any) { }
}

class WebPrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print web document
  }
}

class PDFPrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print PDF document
  }
}

class PagePrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print real page
  }
}