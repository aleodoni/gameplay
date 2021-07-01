import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles as stylesSmallInput } from '../../components/SmallInput/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  label: {
    fontSize: 14,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },

  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },

  select: {
    width: '100%',
    flexDirection: 'row',
    height: 48,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 25,
    overflow: 'hidden',
  },

  selectBody: {
    flex: 1,
    alignItems: 'center',
  },

  image: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 20,
  },

  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  },

  smallInput: {
    ...stylesSmallInput.container,
    marginRight: 0,
  },

  caractersLimit: {
    fontFamily: theme.fonts.title700,
    fontSize: 13,
    color: theme.colors.highlight,
  },

  footer: {
    marginVertical: 20,
    marginBottom: 56,
  },
});
