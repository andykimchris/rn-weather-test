import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const ListItem = ({ dt_txt, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'royalblue' },
  text: { color: 'black' },
  image: { flex: 1 }
})

export default ListItem
