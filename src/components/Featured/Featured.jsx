import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'

const Featured = () => {
  return (
    <>
        <section className="featured">
            <div className="container">
                <SectionTitle 
                    title="Featured Property Types" 
                    subtitle="Find All Type of Property."
                /> 
                
            </div>
        </section>
    </>
  )
}

export default Featured