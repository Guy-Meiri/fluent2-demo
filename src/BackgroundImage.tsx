import { makeStyles, shorthands } from '@fluentui/react-components'
import rick from './assets/rick.jpg'

const useAppstyles = makeStyles({
    img: {
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        ...shorthands.overflow("hidden"),
        backgroundImage: "/react",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(255,255,255,0.1)",
        position: "absolute",
        opacity: 0.4,
        zIndex: -1,
    }
})

export default function BackgroundImage() {
    const styles = useAppstyles();
    return (
        <img src={rick} className={styles.img} />
    )
}
