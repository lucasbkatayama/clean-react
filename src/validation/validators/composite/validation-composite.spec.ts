import { ValidationSpy } from '@/validation/test/mock-field-validation'
import { ValidationComposite } from '@/validation/validators'
import faker from 'faker'

type SutTypes = {
  sut: ValidationComposite
  validationsSpy: ValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const validationsSpy = [
    new ValidationSpy(fieldName),
    new ValidationSpy(fieldName)
  ]
  const sut = ValidationComposite.build(validationsSpy)
  return {
    sut,
    validationsSpy
  }
}

describe('ValidationComposite', () => {
  it('should return error if any validation fail', () => {
    const fieldName = faker.database.column()
    const { sut, validationsSpy } = makeSut(fieldName)
    const errorMessage = faker.random.word()
    validationsSpy[0].error = new Error(errorMessage)
    validationsSpy[1].error = new Error(faker.random.word())
    const error = sut.validate(fieldName, faker.random.word())
    expect(error).toBe(errorMessage)
  })

  it('should return false if everything is ok', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate(fieldName, faker.random.word())
    expect(error).toBeFalsy()
  })
})
