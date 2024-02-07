import { useState,useEffect } from "react";

const useInfiniteScroll = (load) => {
    const [isFetching, setIsFetching] = useState(true)
    const [data, setData] = useState([])
  
    useEffect(() => {
      let didCancel = false;
      if (!isFetching) return;
  
      const loadAsync = async () => {
        const lastIndex = data.length
        const lastItem = data.length ? data[lastIndex] : null
  
        const newData = await load({ lastIndex, lastItem })
        if (!didCancel) {
          setData(prevState => [...prevState, ...newData])
          setIsFetching(false)
        }
      }
  
      loadAsync()
  
      return () => {
        didCancel = true
      }
    }, [isFetching])
  
    return [data, isFetching, setIsFetching]
  };

  export default useInfiniteScroll;