import {View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" to="/" />

        <AppBarTab label="Sign in" to="/signin" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: 'flex',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default AppBar;
