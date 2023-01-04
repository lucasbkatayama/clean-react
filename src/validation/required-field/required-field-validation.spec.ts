import { RequiredFieldValidation } from '@/validation/required-field/required-field-validation'
import { RequiredFieldError } from '@/validation/error'

describe('RequiredFieldValidation', () => {
  it('should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('any_field')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })
})
