import styled, { css, keyframes } from 'styled-components'

interface Props {
  url: string
}

const grey = '#131313'
export const ItemContainer = styled.button`
  display: flex;
  color: #fff;
  border: none;
  height: 300px;
  background: #111;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  padding: 0;
  aspect-ratio: 16 / 9;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 150px;
    position: absolute;
  }

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
  left: 0;
`

const blink = keyframes`
  from {
    background-position: -400px 0
  }
  to {
    background-position: 400px 0
  }
`
export const loadingAnimationStyles = () => css`
  animation: ${blink} 1s linear infinite forwards;
  background: linear-gradient(
    to right,
    ${grey} 8%,
    '#222' 18%,
    ${grey} 33%
  );
  background-size: 800px 100%;
  position: relative;
`
export const PlaceholderStyled = styled(ItemContainer)`
  background: #111;
  ${loadingAnimationStyles()};
`
