import { fetchData, getAuthHeader } from 'utils/api'
import { useMutation } from 'react-query'
import { useEffect, useState } from 'react'
import { params } from './Home.utils'

const Home = () => {
  const [items, setItems] = useState([])
  const { mutate, isLoading, isError } = useMutation(() => fetchData('/Media/GetMediaList', {
    body: JSON.stringify(params),
    headers: getAuthHeader()
  }), {
    onSuccess: ({ Entities }) => {
      setItems(Entities)
    },
    onError: () => {
      alert('there was an error')
    },
  })
  useEffect(() => {
    mutate()
  }, [mutate])
  return (
    <section>
      <div> Home </div>
      <article>
        {items.map((item: any) => (
          <div key={item.Id}>{item.Title}</div>
        ))}
      </article>
    </section>
  )
}

export default Home
