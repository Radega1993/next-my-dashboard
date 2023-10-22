'use client'
import { IoCardOutline } from 'react-icons/io5'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'

export const WidgetsGrid = () => {
  
  const isCard = useAppSelector(state => state.counter.count);
  
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
          title={`${isCard}`}
          subtitle="Productos Agregados"
          label="Contador"
          icon={<IoCardOutline size={70} className="text-blue-500" />}
          href="/dashboard/counter"
        />
    </div>
  )
}
