import React, { useState, useEffect } from 'react';

const VideoIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const video = document.getElementById('intro-video') as HTMLVideoElement;
      if (video) {
        video.addEventListener('ended', () => {
          setIsVisible(false);
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-[10000] flex justify-center items-center">
      <video
        id="intro-video"
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className="max-w-full max-h-full object-cover"
      >
        <source src="/images/intro-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoIntro;
