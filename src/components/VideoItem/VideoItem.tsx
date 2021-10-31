import { FC, useState } from 'react'
import { ItemContainer, Image, Title } from './VideoItem.styled'
import ReactPlayer from 'react-player'
import { useMutation } from 'react-query'
import { fetchData, getAuthHeader } from 'utils/api'
import playIcon from 'assets/pi.jpeg';

type VideoItemProps = {
  item: {
    Title: string
    Images: [{ ImageTypeCode: string; Url: string }]
    Id: number
    MediaTypeCode?: string
  }
}

type VideoData = {
  ContentUrl: string
}
const placeholder =
  'https://d-art.ppstatic.pl/kadry/k/r/1/af/21/613f0a716999d_o_medium.jpg'

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
        <ReactPlayer
          playing
          controls
          url="https://d1n3vpqjhjvv6k.cloudfront.net:443/Asset/5060fb7b996e4c44ba00c3265e73b96f/Content/54ec9d0f6cdf47f0bad54637a90825b2"
        />
      ) : (
        <>
        {item.MediaTypeCode === "VOD" && <img src={playIcon} alt=""/>}
          <Title>{item.Title}</Title>
          <Image url={frameImage ? frameImage.Url : placeholder} />
        </>
      )}
    </ItemContainer>
  )
}
