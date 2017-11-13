import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

class ListItem extends Component {

  render() {
    const { titleStyle } = styles;

    return (
      <CardSection>
        <Text style={titleStyle}>
          { this.props.item.title }
        </Text>
      </CardSection>
    );
  }
}

export default ListItem;
