import React from 'react'
import { IndexLayout } from '../layouts'
import styled from '@emotion/styled'
import { Button, Input } from '../components/styled'
import { CheckCircledOutline, WarningCircledOutline } from 'iconoir-react'

export default function RSVP() {
  const [name, setName] = React.useState('')
  const [inParty, setInParty] = React.useState('')
  const [acceptDecline, setAcceptDecline] = React.useState(null)
  const isValid = name.trim() && acceptDecline !== null
  const [submitState, setSubmitState] = React.useState('working')
  let content
  if (submitState === 'submitted') {
    content = (
      <>
        <LargeIconContainer><CheckCircledOutline /></LargeIconContainer>
        <h2>Thank you!</h2>
        <p>Your RSVP has been submitted successfully. We can't wait to see you!</p>
      </>
    )
  } else if (submitState === 'error') {
    content = (
      <>
        <LargeIconContainer><WarningCircledOutline /></LargeIconContainer>
        <h2>Our apologies.</h2>
        <p>It looks like there was an issue submitting your RSVP. Please <a href={'#'} onClick={e => {
          e.preventDefault()
          window.location.reload()
        }}>try again!</a></p>
      </>
    )
  } else {
    content = (
      <>
        <h2 style={{ textAlign: 'center' }}>Respond</h2>
        <FormField style={{ marginTop: 0 }}>
          <p>Your name:</p>
          <Input type={'text'} value={name} onChange={e => setName(e.target.value)} disabled={submitState !== 'working'} />
        </FormField>
        <FormField>
          <p>Other party members / guests:</p>
          <Input as={'textarea'} value={inParty} onChange={e => setInParty(e.target.value)} disabled={submitState !== 'working'} />
        </FormField>
        <FormField as={'div'}>
          <RadioButtonContainer>
            <Button
              className={acceptDecline === true ? 'active' : ''}
              onClick={e => {
                e.preventDefault()
                setAcceptDecline(true)
              }}
              disabled={submitState !== 'working'}
            >
              Accepts with Pleasure
            </Button>
            <Button
              className={acceptDecline === false ? 'active' : ''}
              onClick={e => {
                e.preventDefault()
                setAcceptDecline(false)
              }}
              disabled={submitState !== 'working'}
            >
              Regretfully Declines
            </Button>
          </RadioButtonContainer>
        </FormField>
        <FormField>
          <Button
            style={{ margin: '0 auto' }}
            onClick={e => {
              e.preventDefault()
              setSubmitState('loading')
              fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                  name,
                  inParty,
                  acceptDecline,
                  'form-name': 'RSVP',
                }).toString()
              })
                .then(() => {
                  setSubmitState('submitted')
                })
                .catch(() => {
                  setSubmitState('error')
                })
            }}
            disabled={!isValid || submitState !== 'working'}
          >
            {submitState === 'working' ? 'Send RSVP' : 'Sending...'}
          </Button>
        </FormField>
      </>
    )
  }
  return (
    <IndexLayout title={'RSVP'}>
      <Container children={content} />
    </IndexLayout>
  )
}

const Container = styled.div`
  width: 90vw;
  max-width: 400px;
  margin: var(--size-l) auto;
  text-align: center;
  h2 { margin-top: 0; margin-bottom: var(--size-s); }
`
const FormField = styled.label`
  margin: var(--size-l) auto;
  display: block;
  p {
    margin-bottom: var(--size-xs);
  }
  &:first-child { margin-top: 0; }
  &:last-child { margin-bottom: 0; }
`
const LargeIconContainer = styled.div`
  svg {
    width: var(--size-l);
    height: var(--size-l);
    path {
      stroke: var(--text-color-secondary);
    }
  }
  margin-bottom: calc(-1 * var(--size-xs));
`
const RadioButtonContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  button:first-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  button:last-child {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  button:not(:last-child) {
    border-bottom: solid 1px var(--border-color-base);
  }
`
