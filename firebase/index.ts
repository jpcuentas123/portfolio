// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'
import { FirebaseStorage, getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'
import { firebaseConfig } from './config'
import SendEmail from './storage/sendEmail'

class Storage {
  private static firebaseApp: FirebaseApp | null = null

  public static emails: SendEmail

  static init() {
    if (!this.firebaseApp) {
      this.firebaseApp = initializeApp(firebaseConfig)

      this.emails = new SendEmail(this.firebaseApp)
    }
  }

  public static getDb(): Firestore {
    if (Storage.firebaseApp === null) {
      throw new Error('firebase_not_initialized')
    }

    const db = getFirestore(Storage.firebaseApp)
    return db
  }

  public static getFirebaseStorage(): FirebaseStorage {
    if (Storage.firebaseApp === null) {
      throw new Error('firebase_not_initialized')
    }

    const storage = getStorage(Storage.firebaseApp)

    return storage
  }

  public static getFirebaseAnalytics() {
    if (Storage.firebaseApp === null) {
      throw new Error('firebase_not_initialized')
    }

    const analytics = getAnalytics(Storage.firebaseApp)
    return analytics
  }
}

export default Storage
