import { InvalidFieldError } from '@/validation/error'
import { FieldValidation } from '@/validation/protocols'

export class EmailValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (value: string): Error {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return (emailRegex.test(value) || !value) ? null : new InvalidFieldError()
  }
}
