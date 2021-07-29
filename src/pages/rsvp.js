import React from 'react'
import { IndexLayout } from '../layouts'
import styled from '@emotion/styled'

export default function RSVP() {
  return (
    <IndexLayout title={'RSVP'}>
      <RSVPContainer src={'https://www.theknot.com/us/merrick-melear-and-sam-marks-jun-2022/rsvp'} />
    </IndexLayout>
  )
}

const RSVPContainer = styled.iframe`
  width: 800px;
  max-width: 90vw;
  margin: var(--size-l) auto;
  border-radius: var(--border-radius-large);
  display: block;
`
