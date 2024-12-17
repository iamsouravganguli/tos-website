import React from 'react'
import { Timer } from '@/components/timer'
import { Services } from '@/components/serices'
const page = () => {
  return (
    <div>
      <Services/>
      <Timer endDate="2024-12-13T00:00:00" />
    </div>
  )
}

export default page
