import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

import Tabs from './src/components/Tabs'
import ErrorItem from './src/components/ErrorItem'
import { useGetWeather } from './src/hooks/useGetWeather'

export default function App() {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'red'} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
