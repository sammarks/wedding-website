import React from 'react'
import { IndexLayout } from '../layouts'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { SaveTheDate } from '../components/SaveTheDate'
import { Separator } from '../components/Separator'
import { Rings, ChurchAlt } from 'iconoir-react'

import { Footer } from '../components/Footer'
import { DummyForm } from '../components/DummyForm'

export default function Index() {
  return (
    <IndexLayout>
      <DummyForm />
      <SplashImageContainer>
        <StaticImage src={'../images/splash.jpg'} alt={'Merrick and Sam'} />
      </SplashImageContainer>
      <SaveTheDate />
      <Separator />
      <CeremonyReceptionItem
        icon={<Rings />}
        title={'Wedding Ceremony'}
        description={<span>June 18, 2022<br />2:30 PM</span>}
      >
        <p>
          Central Christian Church<br />
          219 East Short Street<br />
          Lexington, Kentucky 40507
        </p>
      </CeremonyReceptionItem>
      <CeremonyReceptionItem
        icon={<ChurchAlt />}
        title={'Reception'}
        description={'Immediately following the ceremony'}
      >
        <p>
          Central Christian Church<br />
          219 East Short Street<br />
          Lexington, Kentucky 40507
        </p>
      </CeremonyReceptionItem>
      <Footer />
    </IndexLayout>
  )
}

function CeremonyReceptionItem({ icon, title, description, children }) {
  return (
    <CRItemContainer>
      <CRIconContainer>{icon}</CRIconContainer>
      <h2>{title}</h2>
      {description ? <CRDescription>{description}</CRDescription> : null}
      {children}
    </CRItemContainer>
  )
}

const CRItemContainer = styled.div`
  margin: var(--size-xl) auto;
  text-align: center;
  h2 { margin: 0 0 var(--size-xs) 0; }
`
const CRIconContainer = styled.div`
  font-size: var(--size-l);
  color: var(--text-color-secondary);
`
const CRDescription = styled.div`
  font-size: var(--font-size-large);
  text-align: center;
`

const SplashImageContainer = styled.div`
  margin: var(--size-l) auto;
  text-align: center;
  > div {
    max-height: 90vh;
    max-width: 600px;
    width: 100%;
    border-radius: var(--border-radius-large);
    overflow: hidden;
  }
`
