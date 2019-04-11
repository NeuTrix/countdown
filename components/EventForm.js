import React, { Component } from 'react'
import { Button,
  StyleSheet,
  Text, 
  TextInput, 
  TouchableHighlight, 
  View,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import formatDateTime from './api';

class EventForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      title: '',
    }
  }
  
  handleAddPress = () => {
    console.log(10, '==>', this.state);
    this.props.navigation.navigate('list')
  }

  handleChangeTitle( value ) {
    this.setState({ title: value });
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        {/* <View > */}
        <View style={styles.fieldContainer} >
          <TextInput 
            style={styles.text}
            placeholder="Event"
            spellCheck={false} 
            onChangeText={(value) => this.handleChangeTitle(value)}
            value={this.state.title}
          />
          <TextInput
            style={[styles.text, styles.borderTop]}
          />
        </View>
        <TouchableHighlight 
          style={styles.button}
          onPress={this.handleAddPress}
        >
          <Text style={styles.buttonText}>Add Events</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  borderTop: {
    borderColor: 'grey',
    borderTopWidth: 1, 
  },
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'orange',
    borderColor: 'orangered',
    borderRadius: 5,
    borderWidth: 1, 
    height: 40,
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  fieldContainer: {
    backgroundColor: 'whitesmoke', 
    padding: 10,
  },
  text: {
    borderColor: 'orangered',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  }
})

export default EventForm

