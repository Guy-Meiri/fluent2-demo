import React, { useEffect, useState } from 'react';
import { Skeleton, SkeletonItem, mergeClasses } from '@fluentui/react-components';
import { LineDrawTimeMS, useAnimatedTextLoaderStyles, LineWidths as TextLineWidths } from './AmimatedTextLoader.styles';

export interface AnimatedTextLoaderProps {
    widths: TextLineWidths[];
}

const useAnimateTextLines = (widths: TextLineWidths[]) => {
    const [numberOfLinesToRender, setNumberOfLinesToRender] = useState(0);

    useEffect(() => {
        const currentLineWidth = widths[numberOfLinesToRender];
        const delayUntilNextLine = (LineDrawTimeMS * currentLineWidth) / 100;
        const timeoutId = setTimeout(() => {
            if (numberOfLinesToRender < widths.length) {
                setNumberOfLinesToRender(numberOfLinesToRender + 1);
            }
        }, delayUntilNextLine);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [numberOfLinesToRender, widths]);

    return { numberOfLinesToRender };
};

export const AnimatedTextLoader = ({ widths }: AnimatedTextLoaderProps) => {
    const styles = useAnimatedTextLoaderStyles();
    const { numberOfLinesToRender } = useAnimateTextLines(widths);

    return (
        <div data-testid='vscp-animated-text-loader-root' className={styles.container}>
            <Skeleton>
                {widths.map((width, lineIndex) => {
                    const isLineVisible = lineIndex <= numberOfLinesToRender;
                    return (
                        <div key={lineIndex} className={styles.itemContainer}>
                            <SkeletonItem
                                data-testid='vscp-animated-text-loader-visible-skeleton-item'
                                style={{ width: `${width}%` }}
                                className={styles.visible}
                            />
                            <SkeletonItem
                                data-testid={`vscp-animated-text-loader-${isLineVisible ? 'sliding' : 'hidden'}-skeleton-item`}
                                className={mergeClasses(styles.hidden, isLineVisible ? styles.sliding : '')}
                            />
                        </div>
                    );
                })}
            </Skeleton>
        </div>
    );
};
