import { useEffect, useState } from "react";
import fetchBooks from "../services/API/network";
export const fetchMore = async (currentPage:number,setCurrentPage:Function,setBooks:Function) => {
    const nextPage = currentPage + 1;
    const newData = await fetchBooks(nextPage);
   console.log('New Data',newData.length);
    setCurrentPage(nextPage);
    setBooks((prev:any)=>[...prev,newData]);
  };

//   export const useInfiniteScroll = (load:any) => {
//     const [isFetching, setIsFetching] = useState(true)
//     const [data, setData] = useState([])
  
//     useEffect(() => {
//       let didCancel = false
//       if (!isFetching) return
  
//       const loadAsync = async () => {
//         const lastIndex = data.length
//         const lastItem = data.length ? data[lastIndex] : null
  
//         const newData = await load({ lastIndex, lastItem })
//         if (!didCancel) {
//           setData(prevState => [...prevState, ...newData])
//           setIsFetching(false)
//         }
//       }
  
//       loadAsync()
  
//       return () => {
//         didCancel = true
//       }
//     }, [isFetching])
  
//     return [data, isFetching, setIsFetching]
//   }


 