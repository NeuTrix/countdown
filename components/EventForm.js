import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableHighlight} from 'react-native'

class EventForm extends Component {
  
  handleAddPress = () => {
    this.props.navigation.navigate('list')
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        {/* <View > */}
        <View style={styles.fieldContainer} >
          <Text style={{  color: 'white' }}> Test </Text>
        </View>
        <TouchableHighlight onPress={this.handleAddPress} >
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'orangered', 
    color: 'white',
  }
})

export default EventForm