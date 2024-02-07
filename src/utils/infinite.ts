import { useState, useEffect, Dispatch, SetStateAction } from "react";

type LoadFunction = (params: { lastIndex: number; lastItem: any }) => Promise<any[]>;

const useInfiniteScroll = (load: LoadFunction) => {
    const [isFetching, setIsFetching] = useState(true);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        let didCancel = false;
        if (!isFetching) return;

        const loadAsync = async () => {
            const lastIndex = data.length;
            const lastItem = data.length ? data[lastIndex - 1] : null;

            const newData = await load({ lastIndex, lastItem });
            if (!didCancel) {
                setData((prevState) => [...prevState, ...newData]);
                setIsFetching(false);
            }
        };

        loadAsync();

        return () => {
            didCancel = true;
        };
    }, [isFetching, data, load]);

    return [data, isFetching, setIsFetching];
};

export default useInfiniteScroll;
