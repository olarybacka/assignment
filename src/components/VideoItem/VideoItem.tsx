import { FC } from 'react'
import { ItemContainer, Image, Title } from './VideoItem.styled'
type VideoItemProps = {
  item: {
    Title: string
    Images: [{ ImageTypeCode: string; Url: string }]
  }
}
const placeholder =
  'https://d-art.ppstatic.pl/kadry/k/r/1/af/21/613f0a716999d_o_medium.jpg'

export const VideoItem: FC<VideoItemProps> = ({ item }) => {
  const frameImage = item.Images.find(
    (image) => image.ImageTypeCode === 'FRAME',
  )
  return (
    <ItemContainer>
      <Title>{item.Title}</Title>
      <Image url={frameImage ? frameImage.Url : placeholder} />
    </ItemContainer>
  )
}
