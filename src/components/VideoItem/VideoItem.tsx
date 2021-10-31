import { FC, useState } from 'react'
import { ItemContainer, Image, Title, Img } from './VideoItem.styled'
import ReactPlayer from 'react-player'
import { useMutation } from 'react-query'
import { fetchData, getAuthHeader } from 'utils/api'
import playIcon from 'assets/pi.jpeg'
import { Entity } from 'components/Home/Home'
import { placeholderImage } from './Placeholder'

type VideoItemProps = {
  item: Entity
}

type VideoData = {
  ContentUrl: string
}

export const VideoItem: FC<VideoItemProps> = ({ item }) => {
  const [videoUrl, setVideoUrl] = useState('')
  const { mutate } = useMutation(
    (id: number) =>
      fetchData(
        '/Media/GetMediaPlayInfo',
        { MediaId: id, StreamType: 'TRIAL' },
        {
          headers: getAuthHeader(),
        },
      ),
    {
      onSuccess: (data: VideoData) => {
        setVideoUrl(data.ContentUrl)
      },
    },
  )

  const frameImage = item.Images.find(
    (image) => image.ImageTypeCode === 'FRAME',
  )

  const playVideo = (id: number) => {
    mutate(id)
  }

  return (
    <ItemContainer onClick={() => playVideo(item.Id)}>
      {videoUrl ? (
        <ReactPlayer playing controls url={videoUrl} />
      ) : (
        <>
          {item.MediaTypeCode !== 'PACKAGE' && <Img src={playIcon} alt="" />}
          <Title>{item.Title}</Title>
          <Image url={frameImage ? frameImage.Url : placeholderImage} />
        </>
      )}
    </ItemContainer>
  )
}
