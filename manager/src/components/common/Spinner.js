import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const Spinner = (props) => {
  const { spinnerStyle } = styles;
  const { loading, size } = props;

  return (
    <View style={spinnerStyle}>
      <ActivityIndicator
        size={size || 'large'}
      />
    </View>
  );
};

export default Spinner;
