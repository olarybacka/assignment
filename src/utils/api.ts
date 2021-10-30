interface Options {
  method?: string
  headers?: { [key: string]: string }
  body?: string
}

const API = 'https://thebetter.bsgroup.eu'

export const fetchData = (url: string, options?: Options) =>
  fetch(API + url, {
    ...options,
    method: options?.method || 'GET',
    headers: { ...options?.headers, 'Content-Type': 'application/json' },
  }).then((response) => response.json())
