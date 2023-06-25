import { Skeleton, SkeletonItem, SkeletonProps, makeStyles, mergeClasses, shorthands, } from '@fluentui/react-components'
import "./Loader.css"
import { useEffect, useState } from 'react'

const useS = makeStyles({
    container: {
        animationName: "test",
        width: "401px",
        ...shorthands.padding("8px")

    },
    itemContainer: {
        position: "relative",
        marginTop: "8px",
        ...shorthands.overflow("hidden")
    },
    height8: {
        height: "8px"
    },
    item: {
        backgroundColor: "#deecf9",
        backgroundImage: "linear-gradient(90deg, rgba(74, 206, 251, 0.15) 3%, rgba(71, 80, 236, 0.4) 49.12%, rgba(181, 125, 249, 0.15) 94.7%)",
        zIndex: 1,
        position: "absolute",
    },
    hidden: {

    }
    ,
    slidingItem: {
        width: "100%",
        backgroundColor: "white",
        backgroundImage: "none",
        transform: "translateY(0%) translateX(100%)",
        ...shorthands.transition("transform", "2s"),
        ...shorthands.borderRadius("0px"),
        zIndex: 4,
        animationName: "example",
        animationDuration: "0.5s",
        animationIterationCount: 1,
    },
    hiddenItem: {
        width: "100%",
        backgroundColor: "white",
        backgroundImage: "none",
        ...shorthands.transition("transform", "2s"),
        ...shorthands.borderRadius("0px"),
        zIndex: 4,
    },
    halfWidth: {
        width: "50%"
    }


})

const widths = [25,
    25,
    35,
    0,
    100,
    100,
    100,
    100,
    67,
    0,
    100,
    100,
    100,
    100,
    67,
    0,
    25,
    35,

];


export const Loader = (props: Partial<SkeletonProps>) => {
    const [numberOfDisplayedLines, setNumberOfDisplayedLines] = useState(0);
    const s = useS()

    useEffect(() => {
        const delayUntilNextLine = 500 * ((widths[numberOfDisplayedLines] ? widths[numberOfDisplayedLines] : 10) / 100)
        const timeoutId = setTimeout(() => {
            if (numberOfDisplayedLines < widths.length) {
                setNumberOfDisplayedLines(numberOfDisplayedLines + 1);
            }
        }, delayUntilNextLine)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [numberOfDisplayedLines])

    return (
        <div className={s.container}>
            <Skeleton  >
                {widths.map((width, i) => {
                    console.log(width)
                    return (
                        <div key={i} className={s.itemContainer} >
                            <SkeletonItem style={{ width: `${width}%` }} className={mergeClasses(s.item, s.height8)} />
                            <SkeletonItem className={mergeClasses(i > numberOfDisplayedLines ? s.hiddenItem : s.slidingItem, s.height8)} />
                        </div>
                    )
                })}
            </Skeleton>
        </div>
    )
}
