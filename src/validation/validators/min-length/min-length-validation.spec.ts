import { InvalidFieldError } from '@/validation/error'
import faker from 'faker'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (): MinLengthValidation => new MinLengthValidation(faker.random.word())

describe('MinLengthValidation', () => {
  it('should return error if value is invalid', () => {
    const sut = makeSut()
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })
})
