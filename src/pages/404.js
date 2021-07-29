import React from 'react'
import { IndexLayout } from '../layouts'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PageSearch } from 'iconoir-react'

export default function NotFoundPage() {
  return (
    <IndexLayout>
      <Container>
        <IconContainer>
          <PageSearch />
        </IconContainer>
        <h2>Not Found</h2>
        <p>Sam didn't make that page. Try <Link to={'/'}>going home.</Link></p>
      </Container>
    </IndexLayout>
  )
}

const IconContainer = styled.div`
  font-size: var(--size-m);
  color: var(--text-color-secondary);
  margin-top: var(--size-xxl);
`
const Container = styled.div`
  text-align: center;
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: var(--font-size-large);
  }
`
