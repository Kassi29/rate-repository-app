import {View, StyleSheet, Image} from 'react-native';
import Text from '../Text';
import Subheading from '../Subheading';
import StatItem from './StatItem';
import theme from '../../theme';

const RepositoryItem = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Image
          style={styles.itemHeaderAvatar}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />

        <View style={styles.itemInfo}>
          <Subheading style={styles.fullName}>{item.fullName}</Subheading>

          <Text color="textSecondary">{item.description}</Text>

          <Text style={styles.itemLanguage}> {item.language}</Text>
        </View>
      </View>

      <View style={styles.itemStats}>
        <StatItem label="Stars" count={item.stargazersCount} />

        <StatItem label="Forks" count={item.forksCount} />

        <StatItem label="Reviews" count={item.reviewCount} />

        <StatItem label="Rating" count={item.ratingAverage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
  },
  itemHeader: {
    flexDirection: 'row',
    gap: 20,
  },
  itemInfo: {
    flex: 1,
    flexShrink: 1,
    gap: 4,
  },
  itemHeaderAvatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  itemLanguage: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    color: 'white',
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginTop: 4,
  },
  itemStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  fullName: {
    fontSize: 20,
  },
});

export default RepositoryItem;
