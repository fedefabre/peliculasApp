import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import { RouteStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RouteStackParams, 'DetailScreen'> {}

const DetailScreen = ({ route }: Props) => {

  const movie = route.params;

  return (
    <View>
      <Text>Details screen</Text>
    </View>
  )
}

export default DetailScreen
