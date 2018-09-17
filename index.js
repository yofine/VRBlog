import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class VRBlog extends React.Component {

  componentDidMount() {
    setInterval(this._incrementCount, 1000);
  }
  state = {
    show: false,
    count: 0,
  }

  show = () => {
    this.setState({show: true})
  }

  hide = () => {
    this.setState({show: false})
  }

  _incrementCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (

      <View>
      <View style={{transform: [ {translate: [0, 0, -2]} ]}}></View>
      <View style={styles.panel}>
      <VrButton onClick={this.show}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Show the Last View
          </Text>
        </View>
      </VrButton>
      <VrButton onClick={this.hide}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Hide the Last View
          </Text>
        </View>
      </VrButton>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome
          </Text>
        </View>
      {
        this.state.show ?
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Last View
          </Text>
        </View> : null
      }
      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'stretch',
  },
  greetingBox: {
    padding: 20,
    margin: 20,
    backgroundColor: '#000000',
  },
  greeting: {
    fontSize: 20,
  },
});

AppRegistry.registerComponent('VRBlog', () => VRBlog);
