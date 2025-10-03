import { useEffect, useState } from "react";

const useFetch = (fetchFunc: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetchFunc();

            setData(res);

        } catch (error) {
            setError(error instanceof Error ? error : new Error('An error occured'));
        } finally {
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, [])

    return { data, loading, error, refetch: fetchData, reset };
}

export default useFetch;