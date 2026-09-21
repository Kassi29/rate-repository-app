import {View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import {useQuery} from '@apollo/client/react';
import {ME} from '../../graphql/queries';
import useSignOut from '../../hooks/useSignOut';

const AppBar = () => {
  const {data} = useQuery(ME);
  const signOut = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" to="/" />

        {data?.me ? (
          <AppBarTab label="Sign out" onPress={signOut} />
        ) : (
          <AppBarTab label="Sign in" to="/signin" />
        )}
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
