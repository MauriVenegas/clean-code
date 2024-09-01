// DIP: Dependency Inversion Principle
// Se incumple cuando se instancia una clase dentro de otra clase y se arregla pasando las dependencias por constructor o mediante setters usando inyección de dependencias.

interface Database {
  storeData(data: any);
}

interface RemoteDatabase {
  connect(uri: string);
}

class SQLDatabase implements Database, RemoteDatabase {
  connect(uri: string) {
    console.log('Connecting to SQL database!');
  }

  storeData(data: any) {
    console.log('Storing data...');
  }
}

class InMemoryDatabase implements Database {
  storeData(data: any) {
    console.log('Storing data...');
  }
}

class App {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  saveSettings() {
    this.database.storeData('Some data');
  }
}


const sqlDatabase = new SQLDatabase();
sqlDatabase.connect('my-url'); // Obtiene la conexión
const app = new App(sqlDatabase); // Se la pasa como constructor