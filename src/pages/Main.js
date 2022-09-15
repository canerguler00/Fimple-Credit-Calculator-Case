import React from 'react'
import Content from '../Components/Content'
import ContentItem from '../Components/ContentItem'
import Table from '../Components/Table'
// import Tabledeneme from '../Components/Tabledeneme'


function Main() {
  return (
    <main className='main'>
        <Content />
        <ContentItem /> 
        <Table />  
        {/* <Tabledeneme />      */}
    </main>
  )
}

export default Main