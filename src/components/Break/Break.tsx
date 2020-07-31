import React from 'react';
import classNames from 'classnames';
import styles from './break.css';

type TBreakSize = '_none' | 5 | 8 | 10 | 20;

interface IBreakProps {
    size: TBreakSize;
    mobileSize?: TBreakSize;
    desktopSize?: TBreakSize;
    inline?: boolean;
    top?: boolean;
}

export function Break(props: IBreakProps) {
    const {
        inline = false,
        top = false,
        size,
        mobileSize,
        desktopSize,
    } = props;

    const classes = classNames(
        styles[`s${size}`],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`d${desktopSize}`]]: desktopSize },
        { [styles.inline]: inline },
        { [styles.top]: top }
    );

    return (
        <div className={classes}></div>
    );
}
