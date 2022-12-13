import { AxiosAdapter } from './axios-adapter'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosAdapter => {
  return new AxiosAdapter()
}

describe('AxiosAdapter', () => {
  test('Should call axios with correct URL and verb', async () => {
    const url = faker.internet.url()
    const sut = makeSut()
    sut.post({ url })
    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })
})
