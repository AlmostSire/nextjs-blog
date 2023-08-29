"use client";

import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Counter() {
  const [count, setCount] = useState(0);
  const { data, error, isLoading } = useSWR(
    "https://dog.ceo/api/breeds/image/random",
    fetcher
  );
  console.log(data, error, isLoading);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {isLoading ? "加载中" : <img src={data.message} />}
    </div>
  );
}
