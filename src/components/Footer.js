import React from 'react'
import styled from '@emotion/styled'
import { Separator } from './Separator'

import foreverAlwaysFooter from '../images/forever-always-footer.svg'

export function Footer() {
  return (
    <FooterContainer>
      <Separator />
      <h2>Forever &amp; Always</h2>
      <ForeverAlways src={foreverAlwaysFooter} alt={'Book'} />
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  margin-top: var(--size-xxl);
  text-align: center;
  h2 {
    margin: var(--size-xl) 0 0 0;
    line-height: 1;
  }
`
const ForeverAlways = styled.img`
  width: 200px;
  max-width: 50vw;
  margin: var(--size-s) auto;
  display: block;
`
