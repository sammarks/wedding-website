import React from 'react'
import { IndexLayout } from '../layouts'
import { CeremonyReceptionItem } from './index'
import { Rings } from 'iconoir-react'

export default function Parking() {
  return (
    <IndexLayout>
      <CeremonyReceptionItem
        icon={<Rings />}
        title={'Wedding Ceremony'}
        description={<span>June 18, 2022<br />2:30 PM</span>}
      >
        <p>
          Central Christian Church<br />
          205 East Short Street<br />
          Lexington, Kentucky 40507
        </p>
        <p style={{ maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
          The church's parking lot is accessible off Martin Luther King Boulevard and off Short Street.
          Parking may also be available on Short Street and around the Watkins Building (directly east of the church).
          Paid parking is available in the Chase Bank garage across the street.
        </p>
      </CeremonyReceptionItem>
    </IndexLayout>
  )
}
