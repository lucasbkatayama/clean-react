import { EmailValidation, MinLengthValidation, RequiredFieldValidation, ValidationBuilder } from '@/validation/validators'
import faker from 'faker'

describe('ValidationBuilder', () => {
  it('should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const requiredFieldValidation = ValidationBuilder.field(field).required().build()
    expect(requiredFieldValidation).toEqual([new RequiredFieldValidation(field)])
  })

  it('should return EmailValidation', () => {
    const field = faker.database.column()
    const requiredFieldValidation = ValidationBuilder.field(field).email().build()
    expect(requiredFieldValidation).toEqual([new EmailValidation(field)])
  })

  it('should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const requiredFieldValidation = ValidationBuilder.field(field).min(length).build()
    expect(requiredFieldValidation).toEqual([new MinLengthValidation(field, length)])
  })

  it('should return a list of Validations', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const requiredFieldValidation = ValidationBuilder.field(field).min(length).required().email().build()
    expect(requiredFieldValidation).toEqual([
      new MinLengthValidation(field, length),
      new RequiredFieldValidation(field),
      new EmailValidation(field)
    ])
  })
})
