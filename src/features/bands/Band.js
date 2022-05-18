import React from 'react'

function Band({ band, onBandDelete }) {
  return (
    <li>{band.name} <button onClick={() => onBandDelete(band.id)}>Delete Band</button></li>
  )
}

export default Band