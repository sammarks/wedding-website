import React from 'react'
import styled from '@emotion/styled'
import { Heart } from 'iconoir-react'

export function Separator() {
  return (
    <Container>
      <HeartContainer>
        <Heart />
      </HeartContainer>
      <Line />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  text-align: center;
  width: 800px;
  max-width: 90vw;
  color: var(--brown-2);
  margin: var(--size-m) auto;
`
const HeartContainer = styled.span`
  font-size: var(--size-s);
  padding: 0 var(--size-s);
  background: var(--brown-0);
  display: inline-block;
  line-height: 1;
  z-index: 2;
  path {
    stroke: none;
    fill: var(--brown-2);
  }
`
const Line = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -4px;
  height: 2px;
  left: 0;
  right: 0;
  background: var(--brown-2);
  z-index: -1;
`
