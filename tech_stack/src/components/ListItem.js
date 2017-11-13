import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

class ListItem extends Component {

  render() {
    const { titleStyle } = styles;
    const { library: { title, id }, selectLibrary } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              { title }
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(null, actions)(ListItem);
