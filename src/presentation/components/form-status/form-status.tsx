import React, { useContext } from 'react'
import { Spinner } from '@/presentation/components'
import Styles from './form-status.styles.scss'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const context = useContext(Context)

  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
      { context?.isLoading && <Spinner className={Styles.spinner} /> }
      { context?.errorMessage && <span className={Styles.error}>{context.errorMessage}</span> }
    </div>
  )
}

export default FormStatus
