import { useState, useEffect } from "react";

const useDebounce = (val, delay) => {
    const [debouncedVal, setDebouncedVal] = useState("");

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedVal(val)
        }, delay);
        return () => clearTimeout(timerId);
    }, [val, delay]);

    return debouncedVal;
}

export default useDebounce;