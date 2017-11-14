import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text>
            {library.description}
          </Text>
        </CardSection>
      );
    }
    return null;
  }

  render() {
    const { titleStyle } = styles;
    const { library: { title, id, description }, selectLibrary, expanded } = this.props;
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
          {
            expanded &&
            <CardSection>
              <Text style={{ flex: 1 }}>
                {description}
              </Text>
            </CardSection>
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
