import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IndexLayout } from '../layouts'
import styled from '@emotion/styled'
import { Button, Input } from '../components/styled'
import { Cancel, Check, CheckCircledOutline, GlassHalfAlt, HalfMoon, Lamp, WarningCircledOutline } from 'iconoir-react'
import { CeremonyReceptionItem } from './index'
import { Separator } from '../components/Separator'

const SUBMIT_URL = 'https://yorfti7r75.execute-api.us-east-1.amazonaws.com/Prod/send'

const query = graphql`
  query RSVP {
    allRsvpCsv {
      nodes {
        first
        last
        bar
      }
    }
  }
`

function normalizeStr(str) {
  return str.toLowerCase().replace(/[ \.]/g, '')
}
function findMatchingPerson(people, name) {
  const normalizedName = normalizeStr(name)
  return people.find(p => {
    return normalizeStr(`${p.first} ${p.last}`) === normalizedName
  })
}

export default function RSVP() {
  const people = useStaticQuery(query).allRsvpCsv.nodes.map(node => ({
    first: node.first,
    last: node.last,
    bar: node.bar === 'Yes',
  }))
  const [name, setName] = React.useState('')
  const [matchingPerson, setMatchingPerson] = React.useState(null)
  const [inParty, setInParty] = React.useState('')
  const [acceptDecline, setAcceptDecline] = React.useState(null)
  const [acceptDeclineBar, setAcceptDeclineBar] = React.useState(null)
  const isValid = name.trim() && acceptDecline !== null
  const [submitState, setSubmitState] = React.useState('working')
  let content
  if (submitState === 'submitted') {
    content = (
      <>
        <LargeIconContainer><CheckCircledOutline /></LargeIconContainer>
        <h2>Thank you!</h2>
        <p>Your RSVP has been submitted successfully.{acceptDecline ? " We can't wait to see you!" : ''}</p>
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
  } else if (submitState === 'not-found') {
    content = (
      <>
        <LargeIconContainer><WarningCircledOutline /></LargeIconContainer>
        <h2>Try again.</h2>
        <p>
          We can't find an invitation matching that name.
        </p>
        <p>
          Make sure you're typing in your name
          as it appears on your envelope.
        </p>
        <p>
          For example, if your envelope was addressed to "Mr.
          and Mrs. John Doe and Family," you would type "John Doe" for your name.
        </p>
        <p>
          <a href={'#'} onClick={e => {
            e.preventDefault()
            window.location.reload()
          }}>Try Again</a>
        </p>
      </>
    )
  } else {
    let formContent
    if (!matchingPerson) {
      formContent = (
        <form onSubmit={() => {
          const matchingPerson = findMatchingPerson(people, name)
          if (matchingPerson) {
            setMatchingPerson(matchingPerson)
          } else {
            setSubmitState('not-found')
          }
        }}>
          <FormField style={{ marginTop: 0 }}>
            <p>Your name:</p>
            <Input type={'text'} value={name} onChange={e => setName(e.target.value)} disabled={submitState !== 'working'} />
            <Small>As it appears on your invitation envelope</Small>
          </FormField>
          <Button style={{ margin: '0 auto' }} type={'submit'}>
            Find Invitation
          </Button>
        </form>
      )
    } else if (matchingPerson) {
      formContent = (
        <>
          <p style={{ marginBottom: 0 }}>Hey there,</p>
          <h2>{matchingPerson.first} {matchingPerson.last}</h2>
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
                <Check />
                <span>Accepts with Pleasure</span>
              </Button>
              <Button
                className={acceptDecline === false ? 'active' : ''}
                onClick={e => {
                  e.preventDefault()
                  setAcceptDecline(false)
                }}
                disabled={submitState !== 'working'}
              >
                <Cancel />
                <span>Regretfully Declines</span>
              </Button>
            </RadioButtonContainer>
          </FormField>
          {matchingPerson.bar ? (
            <>
              <Separator style={{ width: '100%' }} />
              <CeremonyReceptionItem
                icon={<HalfMoon />}
                title={'After Hours'}
                description={<span>June 18, 2022<br />8:30 PM</span>}
              >
                <p>
                  Ona.<br />
                  It's a bar.<br />
                  108 Church Street<br />
                  Lexington, Kentucky
                </p>
              </CeremonyReceptionItem>
              <FormField as={'div'}>
                <RadioButtonContainer>
                  <Button
                    className={acceptDeclineBar === true ? 'active' : ''}
                    onClick={e => {
                      e.preventDefault()
                      setAcceptDeclineBar(true)
                    }}
                    disabled={submitState !== 'working'}
                  >
                    <GlassHalfAlt />
                    <span>I'll be there.</span>
                  </Button>
                  <Button
                    className={acceptDeclineBar === false ? 'active' : ''}
                    onClick={e => {
                      e.preventDefault()
                      setAcceptDeclineBar(false)
                    }}
                    disabled={submitState !== 'working'}
                  >
                    <Lamp />
                    <span>I'm going to bed.</span>
                  </Button>
                </RadioButtonContainer>
              </FormField>
            </>
          ) : null}
          <FormField>
            <Button
              style={{ margin: '0 auto' }}
              onClick={e => {
                e.preventDefault()
                setSubmitState('loading')
                fetch(SUBMIT_URL, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    toEmails: ['sam@sammarks.me', 'mmmelear@gmail.com'],
                    subject: 'New Wedding RSVP',
                    message: `
                      <p>Looks like you've got a new wedding RSVP.</p>
                      <ul>
                        <li><strong>First Name:</strong> ${matchingPerson.first}</li>
                        <li><strong>Last Name:</strong> ${matchingPerson.last}</li>
                        <li><strong>Entered Name:</strong> ${name}</li>
                        <li><strong>Accept / Decline:</strong> ${acceptDecline ? 'accept' : 'decline'}</li>
                        <li><strong>Accept / Decline (Bar):</strong> ${matchingPerson.bar ? acceptDeclineBar ? 'accept' : 'decline' : 'N/A'}</li>
                      </ul>
                      <p><strong>Party Members:</strong><br />${inParty.split('\n').join('<br />')}</p>
                    `
                  })
                })
                  .then(response => {
                    setSubmitState(response.ok ? 'submitted' : 'error')
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
    content = (
      <>
        {matchingPerson ? null : <h2 style={{ textAlign: 'center' }}>Respond</h2>}
        {formContent}
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
const Small = styled.p`
  font-size: var(--font-size-small);
  color: var(--brown-5);
  text-align: center;
  margin-top: var(--size-xs);
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
