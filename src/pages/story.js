import React from 'react'
import { IndexLayout } from '../layouts'
import story from '../images/story.png'
import styled from '@emotion/styled'

export default function Story() {
  return (
    <IndexLayout title={'Story'}>
      <StoryImage src={story} alt={'Our Story'} />
    </IndexLayout>
  )
}

const StoryImage = styled.img`
  width: 900px;
  margin: var(--size-xl) auto;
  display: block;
  max-width: 90vw;
`
