import React from 'react'

const SectionTitle = ({title, subtitle}) => {
  return (
    <div className="SectionTitle">
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </div>
  )
}

export default SectionTitle