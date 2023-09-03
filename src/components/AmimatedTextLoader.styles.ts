import { shorthands, tokens, makeStyles } from '@fluentui/react-components';

export const LineDrawTimeMS = 100;

/**
 *  represents the length of a loading skeleton as a percentage of the width of the parent container
 */
export type LineWidths =
  | 0
  | 5
  | 10
  | 15
  | 20
  | 25
  | 30
  | 35
  | 40
  | 45
  | 50
  | 55
  | 60
  | 65
  | 70
  | 75
  | 80
  | 85
  | 90
  | 95
  | 100;

/**
 *  Array that can be used as the default widths of the loading skeleton lines.
 *  Each number in the array represents the width of a line as a percentage of the width of the parent container.
 */
export const defaultLineWidths: LineWidths[] = [
  25, 35, 0, 100, 100, 100, 65, 0, 100, 100, 100, 65, 0, 100, 100, 100, 65, 0, 25, 35,
];

export const useAnimatedTextLoaderStyles = makeStyles({
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
  itemContainer: {
    position: 'relative',
    marginTop: '8px',
    ...shorthands.overflow('hidden'),
  },
  visible: {
    backgroundColor: '#deecf9',
    backgroundImage:
      'linear-gradient(90deg, rgba(74, 206, 251, 0.15) 3%, rgba(71, 80, 236, 0.4) 49.12%, rgba(181, 125, 249, 0.15) 94.7%)',
    zIndex: 1,
    position: 'absolute',
  },
  hidden: {
    width: '100%',
    backgroundColor: 'white',
    backgroundImage: 'none',
    // ...shorthands.transition('transform', '5s'),
    ...shorthands.borderRadius('0px'),
    zIndex: 4,
  },
  sliding: {
    transform: 'translateY(0%) translateX(100%)',
    animationName: {
      from: { transform: 'translate(0%, 0)' },
      to: { transform: 'translate(100%, 0)' },
    },
    animationDuration: `0.${LineDrawTimeMS}s`,
    animationIterationCount: 1,
  },
});
