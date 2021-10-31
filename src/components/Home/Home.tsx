import { fetchData, getAuthHeader } from 'utils/api'
import { useEffect, useState } from 'react'
import { commonParams } from './Home.utils'
import { useHistory } from 'react-router-dom'
import { VideoItemsContainer, ContentContainer } from './Home.styled'
import { VideoItem } from 'components/VideoItem'
import { useMutation } from 'react-query'
import { Placeholder } from '../VideoItem/Placeholder'

export type Entity = {
  Title: string
  Images: [
    {
      ImageTypeCode: string
      Url: string
    },
  ]
  Id: number
  MediaTypeCode?: string
}
type MediaList = {
  Entities: [Entity]
}
const Home = () => {
  const [items, setItems] = useState<Entity[]>([])
  const [mediaListId, setMediaListId] = useState(3)
  const { push } = useHistory()

  const { mutate, isLoading } = useMutation(
    (params: any) =>
      fetchData('/Media/GetMediaList', params, {
        headers: getAuthHeader(),
      }),
    {
      onError: ({ message }: Error) => {
        // handleError(message)
        push('/')
      },
      onSuccess: ({ Entities }: MediaList) => {
        setItems([...items, ...Entities])
      },
    },
  )

  useEffect(() => {
    if (items.length < 30 && mediaListId < 8) {
      mutate({ ...commonParams, MediaListId: mediaListId })
      setMediaListId(mediaListId + 1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <section>
      <h1> Home </h1>

      <ContentContainer>
        <section>
          <h2>List 1</h2>
          <VideoItemsContainer>
            {isLoading
              ? Array(5)
                  .fill(null)
                  .map((_i, index) => <Placeholder key={index} />)
              : items
                  .slice(0, 15)
                  .map((item: Entity, index) => (
                    <VideoItem key={index} item={item} />
                  ))}
          </VideoItemsContainer>
        </section>

        <section>
          <h2>List 2</h2>
          <VideoItemsContainer>
            {isLoading
              ? Array(5)
                  .fill(null)
                  .map((_i, index) => <Placeholder key={index} />)
              : items
                  .slice(15, 30)
                  .map((item: Entity, index) => (
                    <VideoItem key={index} item={item} />
                  ))}
          </VideoItemsContainer>
        </section>
      </ContentContainer>
    </section>
  )
}

export default Home
