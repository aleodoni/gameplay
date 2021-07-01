import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '75%',
    height: 1,
    backgroundColor: theme.colors.secondary40,
    marginTop: 6,
    marginVertical: 18,
    alignSelf: 'flex-end',
  },
});
