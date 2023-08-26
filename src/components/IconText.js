import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props
  const { container, textTheme } = styles
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold'
  },
  container: {
    alignItems: 'center'
  }
})
export default IconText
