import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='Jane'
            label='Name'
          />
        </CardSection>

        <CardSection>
          <Input
            label='phone'
            placeholder='555-555-5555'
          />
        </CardSection>

        <CardSection>
          <Input

          />
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;