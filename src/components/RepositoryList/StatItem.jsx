import {View, StyleSheet} from 'react-native';
import Text from '../Text';

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }

  return count;
};

const StatItem = ({label, count}) => {
  return (
    <View style={styles.item}>
      <Text fontWeight="bold">{formatCount(count)}</Text>

      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    padding: '3',
  },
});

export default StatItem;
