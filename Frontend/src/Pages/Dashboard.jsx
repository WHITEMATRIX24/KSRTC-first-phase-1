import React from 'react'
import Header from '../components/common/Header'
import RealTimeData from '../components/RealTimeData/RealTimeData'


function Dashboard() {
  return (
    <div>
      <Header />
      <div className='col-md-10 w-100'>
        <RealTimeData />
      </div>
    </div>
  )
}

export default Dashboard