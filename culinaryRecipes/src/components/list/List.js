import {FlatList, View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const List = ({items}) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={items}
        renderItem={data =>
          data.item.ingredient ? (
            <Text>{`${data.item.ingredient} --> ${data.item.amount}`}</Text>
          ) : (
            <Text>{data.item}</Text>
          )
        }
      />
    </View>
  );
};

export default List;
