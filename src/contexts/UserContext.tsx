import { View, Text } from 'react-native';
import React, { createContext } from 'react';

interface UserData {
    username
}

export default function UserContext() {
  return (
    <View>
      <Text>UserContext</Text>
    </View>
  )
}