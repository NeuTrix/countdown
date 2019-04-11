import React, { Component } from 'react'
import { Button,
  StyleSheet,
  Text, 
  TextInput, 
  TouchableHighlight, 
  View,
} from 'react-native'

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
        </View>
        <Button title="Add Me" onPress={this.handleAddPress}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'whitesmoke', 
  },
  text: {
    color: 'red',
    height: 40,
    marginTop: 20,
    marginBottom: 20,
  }
})

export default EventForm