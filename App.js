import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Constants } from 'expo'


const Header = (props) => {
  return (
    <View>
      <TextInput
        placeholder='Hey dude, what do you want to do?'
        blurOnSubmit={false}
        returnKeyType='done'
        style={styles.input}
        value={props.value}
        onChangeText={props.onChange}
        onSubmitEditing={props.onAddItem}
      />
    </View>
  )
}
const Footer = () => <View />


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      items: []
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleAddItem(){
    const newItems = [...this.state.items, {
      key: new Date(),
      text: this.state.value,
      complete: false
    }]
    console.log('newItems', newItems)
    this.setState({ items: newItems, value: '' })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header 
          value={this.state.value}
          onChange={value => this.setState({ value })}
          onAddItem={this.handleAddItem}
        />
        <View style={styles.content} >
          <Text>Content Goes Here</Text>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f5f5f5f5'
  },
  content: { flex: 1 },
  input: { height: 50, marginLeft: 16}

});
