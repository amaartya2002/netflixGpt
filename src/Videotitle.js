import React from 'react'

const Videotitle = ({Title,Overview}) => {
  return (
    <div class="title">
    <p class="Title_video">{Title}</p>
    <p class="description">{Overview}</p>
    <button class="play-button"> ▶ Play</button>
    <button class="play-button">More info</button>

    
    </div>
  )
}

export default Videotitle 