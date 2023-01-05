import { RequiredFieldValidation } from '../required-field/required-field-validation'
import { ValidationBuilder } from './validation-builder'

describe('ValidationBuilder', () => {
  it('should return RequiredFieldValidation', () => {
    const requiredFieldValidation = ValidationBuilder.field('any_field').required().build()
    expect(requiredFieldValidation).toEqual([new RequiredFieldValidation('any_field')])
  })
})
