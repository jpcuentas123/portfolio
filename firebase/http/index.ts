import DownloadCvApi from './DownloadCvApi';
import SendEmailApi from './SendEmailApi';

class Api {
    public static emails = new SendEmailApi();
    public static downloads = new DownloadCvApi();
}

export default Api;
