import { FirebaseApp } from 'firebase/app';

class BaseStorage {
  protected firebaseApp: FirebaseApp;

  public constructor(firebaseApp: FirebaseApp) {
    this.firebaseApp = firebaseApp;
  }
}

export default BaseStorage;
