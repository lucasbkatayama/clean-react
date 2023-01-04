import { RequiredFieldValidation } from '@/validation/required-field/required-field-validation'
import { RequiredFieldError } from '@/validation/error'
import faker from 'faker'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation(faker.database.column())

describe('RequiredFieldValidation', () => {
  it('should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  it('should return null if field is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.word())
    expect(error).toBeNull()
  })
})
