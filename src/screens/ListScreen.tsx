import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { globalColors } from '../theme/theme';
import { Contact } from '../types';
import { useContact } from '../hooks/useContact';

const ListScreen = () => {
  const { contact, loading } = useContact();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ justifyContent: 'center', alignItems: 'center' }} />;
  }

  const renderItem = ({ item }: { item: Contact }) => (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: `https://ui-avatars.com/api/?name=${item.name}&background=random` }}
        style={styles.itemImage}
      />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contact}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.background,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 20,
  },
  itemImage: {
    marginRight: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ListScreen;
