import React from 'react'
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/weather-bkg.jpg')}
        style={styles.image}
      >
        <Text style={styles.text}>Upcoming Weather</Text>
        <FlatList
          data={weatherData}
          renderItem={({ item }) => {
            return (
              <ListItem
                condition={item.weather[0].main}
                dt_txt={item.dt_txt}
                max={item.main.temp_max}
                min={item.main.temp_min}
              />
            )
          }}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
