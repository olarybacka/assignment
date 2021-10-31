import { fetchData, getAuthHeader } from 'utils/api'
import { useMutation } from 'react-query'
import { useEffect, useState } from 'react'
import { params } from './Home.utils'
import { useHistory } from 'react-router-dom'
import { VideoItemsContainer } from './Home.styled'
import { VideoItem } from 'components/VideoItem'
import { Placeholder } from '../../components/VideoItem/Placeholder'

const getItems = () =>
  fetchData('/Media/GetMediaList', params, {
    headers: getAuthHeader(),
  })

const Home = () => {
  const [items, setItems] = useState([])
  const { push } = useHistory()

  const { mutate, isLoading } = useMutation(getItems, {
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
        <VideoItemsContainer>
          {isLoading
            ? Array(5)
                .fill(null)
                .map((_i, idx) => <Placeholder key={idx} />)
            : items?.map((item: any) => (
                <VideoItem key={item.Id} item={item} />
              ))}
        </VideoItemsContainer>
      </article>
    </section>
  )
}

export default Home
