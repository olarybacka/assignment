import { fetchData, getAuthHeader } from 'utils/api'
import { useMutation } from 'react-query'
import { useEffect, useState } from 'react'
import { params } from './Home.utils'
import { useHistory } from 'react-router-dom'

const getItems = () =>
  fetchData('/Media/GetMediaList', params, {
    headers: getAuthHeader(),
  })

const Home = () => {
  const [items, setItems] = useState([])
  const { push } = useHistory()

  const { mutate } = useMutation(getItems, {
    onError: ({ message }: Error) => {
      push('/')
    },
    onSuccess: ({ Entities }) => {
      setItems(Entities)
    },
  })

  useEffect(() => {
    mutate()
  }, [mutate])

  return (
    <section>
      <div> Home </div>
      <article>
        {items?.map((item: any) => (
          <div key={item.Id}>{item.Title}</div>
        ))}
      </article>
    </section>
  )
}

export default Home
