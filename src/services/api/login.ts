import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://exampleLoginAPI.green.energy',
})

export async function postLogin(email: string) {
  try {
    const { data }: any = await instance.post('/login', { email })
    return data;
  } catch (e) {
    return 'This will always return'
  }
}
