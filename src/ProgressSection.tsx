import { Card, Label, ProgressBar, makeStyles, shorthands, } from '@fluentui/react-components'

const useProgressSectionStyles = makeStyles({
  container: {
    ...shorthands.overflow("hidden"),
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    
  }
});

export const ProgressSection = () => {
  const styles = useProgressSectionStyles();
  return (
    <div style={{ backgroundColor: "transparent" }} className={styles.container}>
      <Card >
        <Label weight='semibold'>
          Gathering [CRM] info ...
        </Label>
      </Card>
      <ProgressBar shape='square' color='brand' thickness='large' >ProgressBar</ProgressBar>
    </div>
  )
}
