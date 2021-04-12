import { useTheme } from '@ui-kitten/components';

export default function useBackgroundColor() {
  const theme = useTheme();
  return theme['background-basic-color-1'];
}
