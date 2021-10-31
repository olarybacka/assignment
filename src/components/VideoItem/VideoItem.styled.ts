import styled, { css, keyframes } from 'styled-components'

interface Props {
  url: string
}

const grey = '#131313'
export const ItemContainer = styled.div`
  display: flex;
  height: 300px;
  background: #111;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  aspect-ratio: 16 / 9;

  @media (max-width: 550px) {
    height: 200px;
  }
  @media (max-width: 380px) {
    height: 180px;
  }
`

export const Image = styled.div<Props>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 100%;
  height: 100%;
`

export const Title = styled.div`
  position: absolute;
  background: #000000ab;
  padding: 20px;
  font-size: 32px;
  bottom: 0;
`

const blink = keyframes`
  from {
    background-position: -400px 0
  }
  to {
    background-position: 400px 0
  }
`

type LoadingAnimationStylesProps = {
  backgroundColor?: string
  blinkColor?: string
  duration?: string
}

export const loadingAnimationStyles = ({
  backgroundColor = grey,
  blinkColor = '#222',
  duration = '1s',
}: LoadingAnimationStylesProps) => css`
  animation: ${blink} ${duration} linear infinite forwards;
  background: linear-gradient(
    to right,
    ${backgroundColor} 8%,
    ${blinkColor} 18%,
    ${backgroundColor} 33%
  );
  background-size: 800px 100%;
  position: relative;
`
export const PlaceholderStyled = styled(ItemContainer)`
  background: #111;
  ${loadingAnimationStyles({})};
`
