import React from 'react'
import { IndexLayout } from '../../layouts'
import styled from '@emotion/styled'
import { CeremonyReceptionItem } from '../index'
import { Gift } from 'iconoir-react'

export default function Registry() {
  return (
    <IndexLayout title={'Thank You!'}>
      <Container>
        <CeremonyReceptionItem
          icon={<Gift />}
          title={'Thank You'}
          description={
            <span>We appreciate your contribution!</span>
          }
        />
      </Container>
    </IndexLayout>
  )
}

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 600px;
`
