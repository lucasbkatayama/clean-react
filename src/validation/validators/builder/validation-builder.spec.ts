import { RequiredFieldValidation, ValidationBuilder } from '@/validation/validators'

describe('ValidationBuilder', () => {
  it('should return RequiredFieldValidation', () => {
    const requiredFieldValidation = ValidationBuilder.field('any_field').required().build()
    expect(requiredFieldValidation).toEqual([new RequiredFieldValidation('any_field')])
  })
})
