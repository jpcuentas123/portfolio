import Axios from 'axios';
import Storage from '../index';
import { API_URL_DEV } from '../config';
import { SendEmailProps } from '../types';

class SendEmailApi {
    public sendEmail = (values: SendEmailProps): Promise<void> => {
        return new Promise((resolve, reject) => {
            Axios.post(`${API_URL_DEV}/submit`, values)
                .then(async () => {
                    Storage.init();
                    Storage.emails.sendEmail(values);
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                    console.error(error);
                });
        });
    };
}

export default SendEmailApi;
