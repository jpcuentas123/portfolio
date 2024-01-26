import { t } from 'i18next'
import React from 'react'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import LoadingButton from '@mui/lab/LoadingButton'

interface FormFieldsProps {
  errors: any
  handleChange: any
  handleBlur: any
  isValid: any
  isSubmitting: any
  values: any
  handleSubmit: any
  resetForm: any
  loadState: ''
}
const FormFields = (props: FormFieldsProps) => {
  const {
    errors,
    handleChange,
    handleBlur,
    isValid,
    isSubmitting,
    values,
    handleSubmit,
    resetForm,
    loadState,
  } = props
  return (
    <div justify="space-between" gutter={[0, 15]}>
      <div sm={24} md={11}>
        <TextField
          onBlur={handleBlur}
          error={!!errors.name}
          helperText={errors.name}
          id="name"
          size="medium"
          name="name"
          label={t('Name')}
          value={values.name}
          required
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div sm={24} md={11}>
        <TextField
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          onBlur={handleBlur}
          required
          size="medium"
          id="email"
          name="email"
          value={values.email}
          label={t('Email')}
          fullWidth
        />
      </div>
      <div sm={24} md={11}>
        <TextField
          onChange={handleChange}
          error={!!errors.tel}
          helperText={errors.tel}
          onBlur={handleBlur}
          size="medium"
          name="tel"
          id="tel"
          value={values.tel}
          label={t('Tel')}
          fullWidth
        />
      </div>
      <div sm={24} md={11}>
        <TextField
          onChange={handleChange}
          error={!!errors.subject}
          helperText={errors.subject}
          onBlur={handleBlur}
          required
          size="medium"
          id="subject"
          value={values.subject}
          label={t('Subject')}
          fullWidth
        />
      </div>
      <div md={24}>
        <TextField
          onChange={handleChange}
          onBlur={handleBlur}
          multiline
          id="message"
          error={!!errors.message}
          helperText={errors.message}
          name="message"
          value={values.message}
          divs={4}
          fullWidth
          required
          label={t('Message')}
        />
      </div>

      <div span={24}>
        <div justify="center" style={{ marginTop: '4vh' }}>
          <LoadingButton
            type="submit"
            variant="contained"
            divor="primary"
            loading={
              loadState === LoadStates.LOADING || loadState === LoadStates.ERROR
            }
            onClick={
              isValid && !isSubmitting
                ? () => handleSubmit(values, resetForm)
                : undefined
            }
          >
            {t('Send')}
          </LoadingButton>
        </div>
      </div>
      <div span={24}>
        <div justify="center">
          {loadState === LoadStates.LOADED && (
            <Alert severity="success">{t('Your message has been sent')}</Alert>
          )}
          {loadState === LoadStates.ERROR && (
            <Alert severity="error">{t('An error occurred')}</Alert>
          )}
        </div>
      </div>
    </div>
  )
}

export default FormFields
