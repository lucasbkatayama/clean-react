import { ValidationSpy } from '@/validation/test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

type SutTypes = {
  sut: ValidationComposite
  validationsSpy: ValidationSpy[]
}

const makeSut = (): SutTypes => {
  const validationsSpy = [
    new ValidationSpy('any_field'),
    new ValidationSpy('any_field')
  ]
  const sut = new ValidationComposite(validationsSpy)
  return {
    sut,
    validationsSpy
  }
}

describe('ValidationComposite', () => {
  it('should return error if any validation fail', () => {
    const { sut, validationsSpy } = makeSut()
    validationsSpy[0].error = new Error('first_error_message')
    validationsSpy[1].error = new Error('second_error_message')
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
