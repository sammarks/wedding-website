import React from 'react'

export function DummyForm() {
  return (
    <form method={'post'} netlify-honeypot={'testing'} data-netlify={'true'} name={'RSVP'} hidden>
      <input type={'text'} name={'name'} />
      <textarea name={'inParty'} />
      <input type={'checkbox'} name={'acceptDecline'} />
    </form>
  )
}
