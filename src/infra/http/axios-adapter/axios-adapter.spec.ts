import { AxiosAdapter } from './axios-adapter'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosAdapter', () => {
  test('Should call axios with correct URL', async () => {
    const url = faker.internet.url()
    const sut = new AxiosAdapter()
    sut.post({ url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
