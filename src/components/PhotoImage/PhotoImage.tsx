import React from 'react';

let initialPoint: React.Touch;
let finalPoint: React.Touch;

interface IPhotoImage {
    className: string;
    src: string;
    alt: string;
    title?: string;
    onTouch: (xAbs: number) => void;
}

export function PhotoImage(props: IPhotoImage) {
    const { className, src, alt, title, onTouch } = props;

    const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
        e.preventDefault();
        initialPoint = e.changedTouches[0];
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLImageElement>) => {
        e.preventDefault();
        finalPoint = e.changedTouches[0];
        var xAbs = initialPoint.pageX - finalPoint.pageX;
        onTouch(xAbs);
    };

    return (
        <img
            className={className}
            src={src}
            alt={alt}
            title={title}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        />
    );
}
