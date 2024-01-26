import { useEffect, useState } from 'react'
// @ts-ignore
import background from '../../assets/img/BackgroundContact.jpg'

import validationsSchema from './validationSchema'
import { Formik } from 'formik'
import FormFields from './FormFields'
import { t } from 'i18next'

const initialValues = {
  name: '',
  email: '',
  message: '',
  subject: '',
  tel: '',
}

const Contact = () => {
  const [loadState, setLoadState] = useState('')
  const handleSubmit = (values, resetForm: () => void) => {
    sendEmail(values, resetForm)
  }
  const sendEmail = async (values, resetForm: () => void) => {
    if (loadState !== '') return
    setLoadState('')
    // Api.emails
    //   .sendEmail(values)
    //   .then(() => {
    //     setLoadState(LoadStates.LOADED)
    //     resetForm()
    //     setTimeout(() => {
    //       setLoadState(LoadStates.NOT_LOADED)
    //     }, 2000)
    //   })
    //   .catch(() => {
    //     setLoadState(LoadStates.ERROR)
    //     setTimeout(() => {
    //       setLoadState(LoadStates.NOT_LOADED)
    //     }, 2000)
    //   })
  }

  useEffect(() => {
    // @ts-ignore
    document.querySelector('body').style.backgroundImage = `url(${background})`
  }, [])

  return (
    <div align="top" justify="center" className="Contact Home-div">
      <div xs={24} sm={24} md={24} xl={14} xxl={12} className="Contact-header">
        <div align="top" justify="center">
          <div span={24}>
            <h2>{t('Contact')}</h2>
          </div>
          <div xs={20} sm={18} md={12}>
            <Formik
              onSubmit={(values, { resetForm }) =>
                handleSubmit(values, resetForm)
              }
              initialValues={initialValues}
              validationSchema={validationsSchema}
            >
              {({
                errors,
                handleChange,
                handleBlur,
                isValid,
                isSubmitting,
                values,
                resetForm,
              }) => (
                <form>
                  <FormFields
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    isValid={isValid}
                    isSubmitting={isSubmitting}
                    values={values}
                    handleSubmit={handleSubmit}
                    resetForm={resetForm}
                    loadState={loadState}
                  />
                </form>
              )}
            </Formik>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
