interface Options {
  method?: string
  headers?: { [key: string]: string }
  body?: string
}

const API = 'https://thebetter.bsgroup.eu'

const mainHeaders = { 'Content-Type': 'application/json' }

export const getAuthHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem('token')}`,
})

export const fetchData = (url: string, options?: Options) =>
  fetch(API + url, {
    ...options,
    method: options?.method || 'POST',
    headers: { ...options?.headers, ...mainHeaders },
  }).then((response) => response.json())
