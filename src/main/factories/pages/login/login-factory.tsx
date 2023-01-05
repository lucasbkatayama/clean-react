import React from 'react'
import { Login } from '@/presentation/pages'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { AxiosAdapter } from '@/infra/http/axios-adapter/axios-adapter'
import { ValidationBuilder, ValidationComposite } from '@/validation/validators'

export const MakeLogin: React.FC = () => {
  const url = 'http://fordevs.herokuapp.com/api/login'
  const axiosAdapter = new AxiosAdapter()
  const remoteAuthentication = new RemoteAuthentication(url, axiosAdapter)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
  return (
    <Login
      validation={validationComposite}
      authentication={remoteAuthentication}
    />
  )
}
