import { useTheme } from '@ui-kitten/components';

export default function useBackgroundColor(level = 1) {
  const theme = useTheme();
  return theme[`background-basic-color-${level}`];
}
