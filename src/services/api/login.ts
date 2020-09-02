import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://exampleLoginAPI.green.energy',
})

export async function postLogin(email: string) {
  try {
    const { data }: any = await instance.post('/login', { email })
    return { success: 'logged in successffully!...somehow...', error: false };
  } catch (e) {
    return { error: 'logged in unsuccessffully! As expected...', success: false };
  }
}
