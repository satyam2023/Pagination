import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import fetchBooks from '../services/API/network';
import Data from '../models/Data';
import { fetchMore } from '../utils/helper';

const Pagination = () => {
  const [books, setBooks] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchBooks(currentPage).then(data =>{ setBooks(data)});
  }, []);

//   const fetchMore = async () => {
//     if (isLoading) return;
//     setIsLoading(true);
//     const nextPage = currentPage + 1;
//     const newData = await fetchBooks(nextPage);
//    console.log('New Data',newData.length);
//     setCurrentPage(nextPage);
//     setIsLoading(false);
//     setBooks((prevdata: any)=>[...prevdata,...newData]);
//   };

const performPagination=async ()=>{fetchMore(currentPage,setCurrentPage,setBooks)}

  let tempindex=1;
  const renderItem = ({item,index}:any) => {
   tempindex=(currentPage-1)*15+index;
    return (
      <View style={{ padding: 16 ,}}>
                <Text style={{ fontSize: 18 }}>{tempindex}</Text>
        <Text style={{ fontSize: 18 }}>{item.language}</Text>
        <Text style={{ fontSize: 14 }}>{item.name}</Text>
      </View>
    );
  };

  return (
    <>
    <FlatList
      data={books}
      renderItem={renderItem}
    //   keyExtractor={item => item.id}
      onEndReached={performPagination}
      onEndReachedThreshold={0.1}
    />

</>
  );
}

export default Pagination;
