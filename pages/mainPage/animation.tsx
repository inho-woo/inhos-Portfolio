import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// SSR 방지 (window 관련 에러 예방)
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const Animation = () => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch('/main_animation.json')
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error('이미지 로드 실패', err));
  }, []);

  if (!animationData) return null; 
  
  return (
    <Lottie
      loop
      animationData={Animation}
      play
      style={{ width: `100%`, height: `100%` }}
    />
  )
}

export default Animation;
