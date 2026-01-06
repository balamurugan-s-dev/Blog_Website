import { Image } from '@imagekit/react';

const Image = (src, className, w, h, alt) => {
  return (
    <Image 
        urlEndpoint={import.meta.VITE_IK_URL_ENDPOINT}
        path = {src}
        className = {className}
        alt= {alt}
        loading = 'lazy'
        lqip={{active: true, quality: 20}}
        width={w}
        height = {h}
    />
  );
};

export default Image;