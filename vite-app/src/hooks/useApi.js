import { useState, useEffect, useRef, useCallback } from 'react';

function useApi({ url, method = 'GET', body = null, headers = {}, immediate = true }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const abortControllerRef = useRef(null);
    const requestIdRef = useRef(0); // prevent race condition

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(false);

        requestIdRef.current += 1;
        const currentRequestId = requestIdRef.current;

        // cancel previous request

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        const controller = new AbortController();
        abortControllerRef.current = controller;

        try {
            const response = await fetch(url, {
                method,
                body: body ? JSON.stringify(body) : null,
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                signal: controller.signal
            })

            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }

            const result = await response.json();

            if (currentRequestId === requestIdRef.current) {
                setData(result);
            }

        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message);
            }
        } finally {
            if (currentRequestId === requestIdRef.current) {
                setError(false);
            }
        }

    }, [url, method, body, headers]);

    useEffect(() => {
        if (immediate) {
            fetchData();
        }

        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        }

    }, [fetchData, immediate])

    return { data, loading, error, reFetch: fetchData }
}

export default useApi;

// 🔥 useInfiniteScroll

// 🔥 useIntersectionObserver

// 🔥 useDebouncedCallback

// 🔥 usePrevious

// 🔥 Or a mini React Query implementation in JS