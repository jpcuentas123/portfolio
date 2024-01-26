import { addDoc, collection } from 'firebase/firestore';
import Storage from '../index';
import { SendEmailProps } from '../types';
import BaseStorage from './baseStorage';

class SendEmail extends BaseStorage {
  public async sendEmail(props: SendEmailProps) {
    Storage.init();
    const db = Storage.getDb();

    await addDoc(collection(db, 'emails'), props);
  }
}

export default SendEmail;
