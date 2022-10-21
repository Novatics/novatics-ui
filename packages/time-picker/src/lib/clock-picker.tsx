import { ClockPickerProps } from '@mui/x-date-pickers';
import {List, ListItem} from '@mui/material'
import {useState, useRef, useEffect} from 'react'
interface Props extends ClockPickerProps<Date> {
  oi?: string;
}

const ClockPicker = (props: Props) => {
  const [selected, setSelected] = useState(5)
  const listRef = useRef<HTMLUListElement>(null);

  // useEffect(() => {
  //   if (listRef && listRef.current) {
  //     listRef.current.addEventListener('scroll', function(e) {
  //       console.log('scroll')
  //       // console.log(e)
  //       // console.log(listRef.current)
  //   })

  //     // return () => {
  //     //   listRef.current.removeEventListener('scroll')
  //     // }
  //   }
  // }, []);
const amount = 24

const handleScroll = (e) => {

  // console.log(listRef.current)
   //console.log(e.currentTarget.scrollTop)
   //console.log(listRef.current.clientHeight)

}
  return <div >
    <List
      ref={listRef}
      onScroll={handleScroll}
      style={{
        height: 200,
        overflow: 'auto'
      }}
    >
      {Array(amount).fill(0).map((_, i) => <ListItem>{i+1} {i + 1 === selected && 'selected'}</ListItem>)}

    </List></div>;
};

export default ClockPicker;
