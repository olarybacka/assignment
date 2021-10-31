import axios from 'axios'

interface Options {
  headers?: { [key: string]: string }
  body?: string
}

const API = 'https://thebetter.bsgroup.eu'

const mainHeaders = { 'Content-Type': 'application/json' }

export const getAuthHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem('token')}`,
})

export const fetchData = (url: string, body: any, options?: Options) =>
  axios
    .post(API + url, { ...body }, { ...mainHeaders, ...options })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error.response.data.MessageKey)
    })
