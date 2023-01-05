import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  }, {
    id: "4",
    title: "First Item",
  },
  {
    id: "5",
    title: "Second Item",
  },
  {
    id: "6",
    title: "Third Item",
  }, {
    id: "7",
    title: "First Item",
  },
  {
    id: "8",
    title: "Second Item",
  },
  {
    id: "9",
    title: "Third Item",
  },
];

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const ListHeaderComponent = () => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ color: 'black', alignSelf: "center" }}>Start of the list</Text>
      </View>
    );
  }
  const ListFooterComponent = () => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ color: 'black', alignSelf: "center" }}>End of the list</Text>
      </View>
    );
  }
  const ListEmptyComponent = () => {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text>List is Empty</Text>
      </View>
    );
  }
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "black",
        }}
      />
    );
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "cyan" : "lightblue";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <TouchableOpacity onPress={() => setSelectedId(item.id)} style={[styles.item, { backgroundColor, flex: 1 }]}>
        <Text style={[styles.title, { color }]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        ItemSeparatorComponent={FlatListItemSeparator}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={ListHeaderComponent}
        onRefresh={() => { setSelectedId(null) }}
        refreshing={false}
        // getItemLayout={(DATA, index) => (
        //   { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
        // )}
        // initialScrollIndex={2}
        // inverted={false}
        // initialNumToRender={4}
        numColumns={2} // divide it into cols
        // horizontal={false} // if i have to use this remove the width 100% from item seperator
        columnWrapperStyle={{ backgroundColor: 'red', margin: 20, alignSelf: "center", justifyContent: "center" }}

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;