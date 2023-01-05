import { InvalidFieldError } from '@/validation/error'
import faker from 'faker'
import { MinLengthValidation } from '@/validation/validators'

const makeSut = (): MinLengthValidation => new MinLengthValidation(faker.random.word(), 5)

describe('MinLengthValidation', () => {
  it('should return error if value is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(3))
    expect(error).toEqual(new InvalidFieldError())
  })

  it('should return null if value is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeNull()
  })
})
