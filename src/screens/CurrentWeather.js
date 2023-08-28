import { Feather } from '@expo/vector-icons'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

export default function CurrentWeather({ weatherData }) {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  const weatherCondition = weather[0].main

  const {
    wrapper,
    container,
    temperature,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={temperature}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like: ${feels_like}°`}</Text>

        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>

      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temperature: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  hiLow: {
    color: 'black',
    fontSize: 20
  },
  hiLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})
