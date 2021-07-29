import React from 'react'
import { SEO } from '../components/SEO'
import styled from '@emotion/styled'
import './index.css'
import { media } from '../components/styled'
import { Header } from '../components/header'

export function IndexLayout({ children, title }) {
  return (
    <>
      <SEO title={title} />
      <Container>
        <Header />
        {children}
      </Container>
    </>
  )
}

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 75px auto;
  padding: 0 var(--size-s);
  ${media.md} {
    margin: 150px auto;
  }
`
