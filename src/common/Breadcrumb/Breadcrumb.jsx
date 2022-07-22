import React from 'react'

const Breadcrumb = ({name, title, cover}) => {
  return (
    <>
       <section className="breadcrumb">
            <div className="container">
                <span>{name}</span>
                <h1>{title}</h1>
            </div>
            <img src={cover} alt="" />
        </section> 
    </>
  )
}

export default Breadcrumb