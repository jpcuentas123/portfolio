import Axios from 'axios';
import Storage from '../index';
import { ref, getDownloadURL } from 'firebase/storage';

class DownloadCvApi {
    public downloadCv() {
        // Create a reference to the file we want to download
        Storage.init();
        const storage = Storage.getFirebaseStorage();
        const starsRef = ref(
            storage,
            'Jorge_Perez_Cuentas_-_Senior_Full_Stack_Developer.pdf'
        );

        // Get the download URL
        getDownloadURL(starsRef)
            .then((url) => {
                // download the pdf file
                Axios.get(url, {
                    responseType: 'blob',
                }).then((response) => {
                    const url = window.URL.createObjectURL(
                        new Blob([response.data])
                    );
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute(
                        'download',
                        'Jorge_Perez_Cuentas_-_Senior_Full_Stack_Developer.pdf'
                    ); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch((error) => {
                console.error({ error });
            });
    }
}

export default DownloadCvApi;
