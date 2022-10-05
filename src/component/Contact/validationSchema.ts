import { t } from 'i18next';
import { object, string } from 'yup';

const validationsSchema = object().shape({
    name: string().required(t('El nombre es requerido')).nullable(),
    email: string()
        .email(t('Formato de correo inválido'))
        .required(t('El email es requerido'))
        .nullable(),
    tel: string().required(t('El teléfono es requerido')).nullable(),
    message: string().required(t('El mensaje es requerido')),
    subject: string().required(t('El asunto es requerido')),
});

export default validationsSchema;
