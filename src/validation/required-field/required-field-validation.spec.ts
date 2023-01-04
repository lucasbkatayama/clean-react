import { RequiredFieldValidation } from '@/validation/required-field/required-field-validation'
import { RequiredFieldError } from '@/validation/error'
import faker from 'faker'

describe('RequiredFieldValidation', () => {
  it('should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('any_field')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  it('should return null if field is valid', () => {
    const sut = new RequiredFieldValidation('any_field')
    const error = sut.validate(faker.random.word())
    expect(error).toBeNull()
  })
})
