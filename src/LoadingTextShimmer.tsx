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

const calcDelayUntilNextLine = (lineWidth: number) => {
    const delayNormalizedByLineWidth = (delayBetweenLinesMS * lineWidth) / 100;
    return Math.max(delayNormalizedByLineWidth, minDelayBetweenLinesMS)
}
interface LoadingTextShimmerProps {
    lineWidths: number[];
}

export const LoadingTextShimmer = ({ lineWidths }: LoadingTextShimmerProps) => {
    const [numberOfDisplayedLines, setNumberOfDisplayedLines] = useState(0);
    const styles = useLoadingTextShimmerStyles()
    useEffect(() => {
        // const styleEl = document.createElement("style");
        // // Append <style> element to <head>
        // document.head.appendChild(styleEl);
        // Grab style element's sheet
        // const styleSheet = styleEl.sheet;
        const css = window.document.styleSheets[0];
        css.insertRule(keyframeRule, css?.cssRules.length)
        // styleSheet?.insertRule("#blanc { background: blue }", 0);
        // styleSheet?.insertRule(`#blanc {${keyframeRule}}`, 0);
        // styleSheet?.insertRule(["background", "blue"], styleSheet.cssRules.length);
        //reference: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
        // document.styleSheet[0].insertRule()
        // document?.styleSheets?.item(0)?.insertRule(`background: "blue"`)
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
