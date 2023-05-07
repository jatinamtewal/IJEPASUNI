import React from 'react'

const Members = ({data}) => {
  return (
            <div>   
                <p>{data.name}</p>
                <span>{data.desg}</span>
            </div>
  )
}

export default Members