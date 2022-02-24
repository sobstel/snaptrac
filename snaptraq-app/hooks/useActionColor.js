import { useTheme } from '@ui-kitten/components';

export default function useActionColor() {
  const theme = useTheme();
  return theme['color-primary-400'];
}
