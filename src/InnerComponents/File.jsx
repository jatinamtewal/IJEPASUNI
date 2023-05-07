import React from 'react';

const File = ({data}) => {
  return (
    <div className='file'>
            <div>
                <h3>{data.title}</h3>
                <p>{(data.teachers).join(', ')}</p>
                <span>{data.views} Total Views | DOI: | VOL: Vol. 7 No. 3</span>
            </div>
            <div>
                <a href="/"><img src={data.content} alt="" /></a>
            </div>
    </div>
  )
}

export default File