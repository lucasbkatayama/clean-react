import { InvalidFieldError } from '@/validation/error'
import { EmailValidation } from '@/validation/validators/email/email-validation'

describe('EmailValidation', () => {
  it('should return error if email is invalid', () => {
    const sut = new EmailValidation('any_field')
    const error = sut.validate('not-valid-value')
    expect(error).toEqual(new InvalidFieldError())
  })
})
