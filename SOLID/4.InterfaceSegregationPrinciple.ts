// ISP: Interface Segregation Principle
// Se enfoca en no tener interfaces de uso general, es decir separar las interfaces por responsabilidades ya que al momento de implementar una interface debemos crear todos sus métodos.
interface Database {
  storeData(data: any);
}

interface RemoteDatabase {
  connect(uri: string);
}

class SQLDatabase implements Database, RemoteDatabase {
  connect(uri: string) {
    // connecting...
  }

  storeData(data: any) {
    // Storing data...
  }
}

class InMemoryDatabase implements Database {
  storeData(data: any) {
    // Storing data...
  }
}