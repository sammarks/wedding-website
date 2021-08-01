import React from 'react'
import styled from '@emotion/styled'
import { media } from './styled'
import { Calendar, Map } from 'iconoir-react'

export function SaveTheDate() {
  return (
    <Container>
      <SaveItem>
        <h2 style={{ marginBottom: 0, marginTop: 0 }}>Save the Date</h2>
      </SaveItem>
      <SaveItem>
        <SaveItemIcon><Calendar /></SaveItemIcon>
        <div>
          <SaveItemMain>June 18, 2022</SaveItemMain>
          <SaveItemSub>Date</SaveItemSub>
        </div>
      </SaveItem>
      <SaveItem>
        <SaveItemIcon><Map /></SaveItemIcon>
        <div>
          <SaveItemMain>Lexington, KY</SaveItemMain>
          <SaveItemSub>Location</SaveItemSub>
        </div>
      </SaveItem>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin: var(--size-l) auto;
  flex-direction: column;
  align-items: center;
  > :not(:last-child) {
    margin-bottom: var(--size-l);
  }
  ${media.lg} {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
    > * {
      padding: var(--size-m);
    }
    > :not(:last-child) {
      margin-bottom: 0;
      padding-right: var(--size-m);
    }
  }
`
const SaveItem = styled.div`
  text-align: center;
  display: flex;
  align-items: flex-start;
  > :first-child:not(:last-child) {
    margin-right: var(--size-s);
  }
  > div {
    text-align: left;
  }
`
const SaveItemIcon = styled.div`
  font-size: var(--size-s);
  color: var(--brown-3);
  margin-top: var(--size-xxs);
`
const SaveItemMain = styled.div`
  font-size: var(--font-size-extra-large);
  color: var(--brown-6);
`
const SaveItemSub = styled.div`
  font-size: var(--font-size-small);
  color: var(--text-color-secondary);
  margin-left: 2px;
`
