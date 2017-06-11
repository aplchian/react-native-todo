import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ListView
} from 'react-native'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'

const Header = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Ionicons name="ios-checkmark-circle" size={32} color="lightblue" />
      </TouchableOpacity>
      <TextInput
        placeholder="Hey dude, what do you want to do?"
        blurOnSubmit={false}
        returnKeyType="done"
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
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      value: '',
      items: [],
      dataSource: ds.cloneWithRows([])
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleAddItem() {
    const newItems = [
      ...this.state.items,
      {
        key: new Date(),
        text: this.state.value,
        complete: false
      }
    ]
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
        <View style={styles.content}>
          <Text>Content Goes Here</Text>
        </View>
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f5f5f5f5'
  },
  content: { flex: 1 },
  input: { height: 50, marginLeft: 16, flex: 1 },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
