import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 5,
    marginLeft: 5,
    borderColor: '#007aff'
  }
};

const Button = (props) => {
  const { textStyle, buttonStyle } = styles;
  const { onPress, children } = props;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
