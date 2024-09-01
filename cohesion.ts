// Cohesion: Si los método de una clase utilizan todas las propiedades de una clase existe una alta cohesion, de lo contrario baja cohesion
// Por lo tanto la idea es que en una clase los métodos (funciones) utilicen la mayor cantidad de propiedades (ej: orders, offeredProducts, customers). Y si no es así se recomienda dividir las clases en clases mas pequeñas y asi aumentar la cohesion ya que cada clase se hace responsable de algo en concreto.

// En este caso no existe una alta cohesion ya que la gran mayoría de los métodos sol usan una propiedad.
class OnlineShop {
  private orders: any;
  private offeredProducts: any;
  private customers: any;

  public addProduct(title: string, price: number) { } // offeredProducts

  public updateProduct(productId: string, title: string, price: number) { } // offeredProducts

  public removeProduct(productId: string) { } // offeredProducts

  public getAvailableItems(productId: string) { } // offeredProducts

  public restockProduct(productId: string) { } // offeredProducts

  public createCustomer(email: string, password: string) { } // customers

  public loginCustomer(email: string, password: string) { } // customers

  public makePurchase(customerId: string, productId: string) { } // customers, orders, offeredProducts

  public addOrder(customerId: string, productId: string, quantity: number) { } // customers, orders, offeredProducts

  public refund(orderId: string) { } // customers, orders

  public updateCustomerProfile(customerId: string, name: string) { } // customers

  // ...
}