import React from 'react'
import Lottie from 'react-lottie-player'
import developerAnimation from '../../public/main_animation.json';


const Animation = ()  => {
  return (
    <Lottie
      loop
      animationData={developerAnimation}
      play
      style={{ width: `100%`, height: `100%` }}
    />
  )
}

export default Animation;
