import { CardFooter, Label, ToggleButton, makeStyles, shorthands, Textarea, Button, tokens } from '@fluentui/react-components';
import { Dismiss20Regular } from '@fluentui/react-icons'
const useCardDemoStyles = makeStyles({
    container: {
        width: "320px",
        display: "flex",
        flexDirection: "column",
        rowGap: "8px",
        ...shorthands.padding("12px", "16px"),
        position: "relative",
        ...shorthands.borderTop("2px", "solid", tokens.colorNeutralStroke1)
    },
    iconButton: {
        position: "absolute",
        right: "16px",
        top: "12px"
    },
    toggleButtons: {
        display: "flex",
        ...shorthands.gap("8px")
    }
});

export default function CardDemo() {
    const styles = useCardDemoStyles();
    return (
        <div className={styles.container}>
            <Button className={styles.iconButton} appearance='transparent' icon={<Dismiss20Regular />} size="small"></Button>
            <Label>Adjust tone</Label>
            <div className={styles.toggleButtons}>
                <ToggleButton size="small">Formal</ToggleButton>
                <ToggleButton size="small">Standard</ToggleButton>
                <ToggleButton size="small">Friendly</ToggleButton>
            </div>
            <Label>Adjust tone</Label>
            <Textarea></Textarea>
        </div>
    )
}
