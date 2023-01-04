import { InvalidFieldError } from '@/validation/error'
import { EmailValidation } from '@/validation/validators/email/email-validation'
import faker from 'faker'

describe('EmailValidation', () => {
  it('should return error if email is invalid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate('not-valid-value')
    expect(error).toEqual(new InvalidFieldError())
  })

  it('should return null if email is valid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeNull()
  })

  it('should return null with an empty value', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate('')
    expect(error).toBeNull()
  })
})
