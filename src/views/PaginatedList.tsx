import React, { useState, useEffect } from 'react';
import styles from './Style/style';
import Item from '../components/Item';
import useInfiniteScroll from '../utils/infinite';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator
} from 'react-native'



const INITIAL_LOAD= 30;
const PAGE_SIZE = 20;

const MyComponent: React.FC = () => {
 
  const fetchMoreListItems = ({ lastIndex }: { lastIndex: number }) => {

    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          ...Array.from(
            Array(lastIndex === 0 ? INITIAL_LOAD : PAGE_SIZE).keys(),
            n => {
              n = n + lastIndex
              return {
                number: n.toString(),
                id: n.toString()
              }
            }
          )
        ])
      }, 2000)
    })
  }

  const [data, isFetching, setIsFetching] = useInfiniteScroll(
    fetchMoreListItems
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onEndReachedThreshold={5}
        onEndReached={() => {
          if (!isFetching) {
           (setIsFetching as (value:boolean) =>void)(true);
          }
        }}
        data={data as []}
        // keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <Item item={item} props={undefined} />
        }}
      />
      {isFetching && (
        <ActivityIndicator color={'blue'} size={'large'}/>
      )}
    </SafeAreaView>
  )
}

export default MyComponent;
