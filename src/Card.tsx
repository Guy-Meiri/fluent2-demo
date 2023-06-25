import { Button, Field, Label, Textarea, ToggleButton, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { Dismiss20Regular } from "@fluentui/react-icons"

const useCardStyles = makeStyles({
    container: {
        width: "320px",
        display: "flex",
        flexDirection: "column",
        rowGap: "8px",
        ...shorthands.padding("12px", "16px"),
        position: "relative",
        ...shorthands.border("1px", "solid", tokens.colorNeutralStroke1)
    },
    toggleButtons: {
        display: "flex",
        ...shorthands.gap("8px")
    },
    iconButton: {
        position: "absolute",
        right: "16px",
        top: "12px"
    },
    

})

export default function Card() {
    const styles = useCardStyles();

    return (
        <div className={styles.container}>
            <Button className={styles.iconButton} icon={<Dismiss20Regular />}></Button>
            <Label >Adjust Tone</Label>
            <div className={styles.toggleButtons}>
                <ToggleButton size="small">Formal</ToggleButton>
                <ToggleButton size="small">Stardard</ToggleButton>
                <ToggleButton size="small">Bob</ToggleButton>
            </div>
            <Label >Bla</Label>
            <Field>
                <Textarea></Textarea>
            </Field>
        </div>
    )
}
