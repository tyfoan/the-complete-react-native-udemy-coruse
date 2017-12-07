import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({
      shift: shift || 'Monday',
      name,
      phone
    });
  };

  render() {
    return (
      <View>
        <EmployeeForm />
        <Card>
          <CardSection>
            <Button onPress={this.onButtonPress}>
              Create
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate);
