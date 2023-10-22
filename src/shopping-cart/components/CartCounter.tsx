'use client'

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initConuterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react"

interface Props {
    value?: number;
}

export interface CounterResponse {
  count: number;
}

const getApiCounter = async() => {
  const data = await fetch('/api/counter')
  .then( res => res.json() );

  return data as CounterResponse;
}

export const CartCounter = ({value = 0}: Props) => {
   
  const count = useAppSelector( state => state.counter.count )
  const dispath = useAppDispatch();
  
  //useEffect(() => {
  //  dispath( initConuterState(value) );
  //}, [dispath, value])

  useEffect(() => {
    getApiCounter()
    .then( ({ count }) => dispath( initConuterState(count) ));
  }, [dispath])
  return (
    <>  
        <span className="text-9xl">{count}</span>

        <div className="flex">
            <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={ () => dispath( addOne()) }>
            +1
            </button>
            <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={ () => dispath( substractOne()) }>
            -1
            </button>
        </div>
    </>
  )
}
