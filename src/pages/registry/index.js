import React from 'react'
import { IndexLayout } from '../../layouts'
import styled from '@emotion/styled'
import { CeremonyReceptionItem } from '../index'
import { Gift } from 'iconoir-react'

export default function Registry() {
  return (
    <IndexLayout title={'Registry'}>
      <Container>
        <CeremonyReceptionItem
          icon={<Gift />}
          title={'Registry'}
          description={
            <span>Your presence at our wedding is the greatest gift of all.<br />However, if you wish to honour
              us with a gift, we will gratefully accept a contribution towards our honeymoon.</span>
          }
        >
          <DonateButton href={'https://www.paypal.com/donate/?hosted_button_id=QZVF2LLCLW54N'}>
            Donate to our Honeymoon
          </DonateButton>
        </CeremonyReceptionItem>
      </Container>
    </IndexLayout>
  )
}

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 600px;
`
const DonateButton = styled.a`
  margin-top: var(--size-l) !important;
  display: inline-block;
  padding: var(--size-s) var(--size-m);
  color: var(--brown-1);
  font-size: var(--font-size-large);
  background: var(--brown-5);
  line-height: 1;
  border-radius: var(--border-radius-base);
  transition: color 0.25s linear, background 0.25s linear;
  text-decoration: none;
  &:hover, &.active {
    background: var(--brown-6);
    color: var(--brown-0);
  }
`
