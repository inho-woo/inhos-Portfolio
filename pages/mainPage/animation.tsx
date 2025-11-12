import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

export default function Animation() {
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
      play
      animationData={animationData}
      style={{ width: '100%', height: 320 }}
    />
  );
}