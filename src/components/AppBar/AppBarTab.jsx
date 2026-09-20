import {Pressable, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';
import theme from '../../theme';
import Text from '../Text';

const AppBarTab = ({label, to}) => {
  return (
    <Link
      to={to}
      component={Pressable}
      style={({pressed}) => [{opacity: pressed ? 0.4 : 1}]}
    >
      <Text style={styles.tabText}>{label}</Text>
    </Link>
  );
};

const styles = StyleSheet.create({
  tabText: {
    color: 'white',
    marginRight: 20,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

export default AppBarTab;
