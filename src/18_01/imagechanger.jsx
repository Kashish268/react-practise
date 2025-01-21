import React, { useState, useEffect } from 'react';

const img1 = "../../public/img1.png";
const img2 = "../../public/img2.png";
function ImageChanger() {
    const image = [img1, img2];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % image.length);
        }, 1000);

        // Cleanup function to clear the interval
        return () => clearInterval(timer);
    }, [image.length]);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img
                src={image[index]}
                alt={`Slide ${index}`}
                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
            />
        </div>
    );
}

export default ImageChanger;
