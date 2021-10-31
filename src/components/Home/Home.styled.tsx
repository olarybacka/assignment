import styled from 'styled-components'

export const VideoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  max-height: 90vh;
  overflow-y: auto;
`

export const ContentContainer = styled.article`
  display: flex;
  column-gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 50px;
  margin: 0 0 40px;
`

export const Title = styled.h1`
  margin: 20px 0 0;
  font-size: 24px;
`
