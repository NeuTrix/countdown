import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

class EventList extends Component {
  render() { 
    return (
      <FlatList
        data={[{id: 1, name: 'a'}, {id: 2, name: 'b'}]}
        renderItem={({ item }) => <Text key={ item.id }  >{ item.name }</Text>}
      />
    );
  }
}

export default EventList
