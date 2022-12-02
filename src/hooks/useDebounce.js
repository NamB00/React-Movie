import { useEffect, useState } from "react";

export default function useDebounce(initializerValue = '', delay = 1000) {
  const [debouceValue, setDebouneValue] = useState(initializerValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouneValue(initializerValue);
    },delay);
    return () => {
      clearTimeout(timer);
    }
  },[delay, initializerValue])
  return debouceValue;
}