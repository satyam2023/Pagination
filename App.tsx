

import React from 'react';
import Pagination from './src/views/ListItem';
import PaginatedList from './src/views/PaginatedList';
import { Text } from 'react-native';


function App(): React.JSX.Element {
  return (
    <>
    <Text style={{color:'blue',textAlign:'center',fontSize:18,fontWeight:'600',marginTop:10}}>
      Implementing Infinite Pagination
    </Text>
<PaginatedList/>
    </>
  );
}



export default App;
