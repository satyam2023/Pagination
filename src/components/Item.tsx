import React from 'react'
import { View, Text } from 'react-native'
import styles from '../views/Style/style'
interface ItemProps{
  item: any
  props:any
}


const Item:React.FC<ItemProps> = (props:ItemProps) => {
  return (
    <View style={styles.item}>
         <Text style={styles.title}>{props.item.number}
</Text>
     </View>
  )
}

export default Item