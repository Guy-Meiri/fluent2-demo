import { Button, CardFooter, Label, Textarea, ToggleButton, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Dismiss20Regular} from "@fluentui/react-icons"

const useCopilotCardStyles = makeStyles({
    container: {
        width: "320px",
        display: "flex",
        rowGap: "8px",
        flexDirection: "column",
        ...shorthands.padding("12px", "16px"),
        ...shorthands.borderTop("1px","solid", tokens.colorNeutralStroke1),
        position: "relative"
    },
    toggles: {
        display: "flex",
        ...shorthands.gap("8px"),
    },
    iconButton: {
        position: "absolute",
        right: "16px",
        top: "12px"
    },
})

export default function CopilotCard() {
  const styles = useCopilotCardStyles();

  return (
    <CardFooter className={styles.container}>
        <Button className={styles.iconButton }appearance="transparent" icon={<Dismiss20Regular/>}></Button>
      <Label>Adjust tone</Label>
      <div className={styles.toggles}>
        <ToggleButton size="small">Formal</ToggleButton>
        <ToggleButton size="small">Standard</ToggleButton>
        <ToggleButton size="small">Moshe</ToggleButton>
      </div>
      <Label>Adjust tone</Label>
      <Textarea/>
    </CardFooter>
  );
}
