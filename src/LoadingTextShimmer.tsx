import { useEffect, useState } from 'react'
import { Skeleton, SkeletonItem, makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components'
// import "./Loader.css"

const useLoadingTextShimmerStyles = makeStyles({
    container: {
        width: "100%",
    },
    itemContainer: {
        position: "relative",
        marginTop: "8px",
        ...shorthands.overflow("hidden")
    },
    item: {
        backgroundColor: "#deecf9",
        backgroundImage: "linear-gradient(90deg, rgba(74, 206, 251, 0.15) 3%, rgba(71, 80, 236, 0.4) 49.12%, rgba(181, 125, 249, 0.15) 94.7%)",
        zIndex: 1,
        position: "absolute",
    },
    hidden: {
        width: "100%",
        backgroundColor: tokens.colorNeutralBackground1,
        backgroundImage: "none",
        ...shorthands.transition("transform", "2s"),
        ...shorthands.borderRadius("0px"),
        zIndex: 4,

    }
    ,
    slidingItem: {
        transform: "translateY(0%) translateX(100%)",
        animationName: "example",
        animationDuration: "0.25s",
        animationIterationCount: 1,
    },
})

const delayBetweenLinesMS = 250;
const minDelayBetweenLinesMS = 10;
const keyframeRule = `
@keyframes example {
    0% {
      transform: translate(0%, 0);
    }
    100% {
      transform: translate(100%, 0);
    }
  }
  `;

export type ZeroToHundred = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
    21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
    41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
    61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 |
    81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100;

const calcDelayUntilNextLine = (lineWidth: ZeroToHundred) => {
    const delayNormalizedByLineWidth = (delayBetweenLinesMS * lineWidth) / 100;
    return Math.max(delayNormalizedByLineWidth, minDelayBetweenLinesMS)
}
interface LoadingTextShimmerProps {
    lineWidths: ZeroToHundred[];
}

export const defaultLineWidths: ZeroToHundred[] = [
    25,
    35,
    0,
    100,
    100,
    100,
    67,
    0,
    100,
    100,
    100,
    67,
    0,
    100,
    100,
    100, 67, 0, 25, 35,
];

export const LoadingTextShimmer = ({ lineWidths }: LoadingTextShimmerProps) => {
    const [numberOfDisplayedLines, setNumberOfDisplayedLines] = useState(0);
    const styles = useLoadingTextShimmerStyles()
    useEffect(() => {
        const css = window.document.styleSheets[0];
        css.insertRule(keyframeRule, css?.cssRules.length);
    }, []);
    useEffect(() => {
        const delayUntilNextLine = calcDelayUntilNextLine(lineWidths[numberOfDisplayedLines]);
        const timeoutId = setTimeout(() => {
            if (numberOfDisplayedLines < lineWidths.length) {
                setNumberOfDisplayedLines(numberOfDisplayedLines + 1);
            }
        }, delayUntilNextLine)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [numberOfDisplayedLines, lineWidths]);

    return (
        <div className={styles.container}>
            <Skeleton >
                {lineWidths.map((width, i) => {
                    return (
                        <div key={i} className={styles.itemContainer} >
                            <SkeletonItem style={{ width: `${width}%` }} className={styles.item} />
                            <SkeletonItem className={mergeClasses(styles.hidden, i <= numberOfDisplayedLines ? styles.slidingItem : "")} />
                        </div>
                    )
                })}
            </Skeleton>
        </div>
    )
}
