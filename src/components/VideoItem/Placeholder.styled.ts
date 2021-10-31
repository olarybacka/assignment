import styled, { css, keyframes } from 'styled-components'

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
  backgroundColor = '#000000',
  blinkColor = '#666666',
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

export const AssetPlaceholder = styled.div`
  ${loadingAnimationStyles({
    backgroundColor: '#000000',
    blinkColor: '#666666',
  })};
`
