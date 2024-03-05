
import { useState } from 'react'
import Comment from './Comment'
//خوشکلمزه
export default function Food(props: { foodinfo: { name: string, price: number, isFoodParty: boolean, comments: any[] } }) { //JSX

  //let isSelected: boolean = false
  const [isSelected, setIsSelected] = useState(false)

  console.log(props.foodinfo.name, ' rendered')

  return isSelected ? <div>
    <input type='checkbox' title='title' checked={isSelected}
      onChange={e => setIsSelected(e.target.checked)} ></input>
    <h5>{props.foodinfo.name}</h5>
  </div>
    : <div style={isSelected ? { backgroundColor: 'green' } : {}}>
      <input type='checkbox' title='title' checked={isSelected}
        onChange={e => setIsSelected(e.target.checked)} ></input>
      <h1>{props.foodinfo.name}</h1>
      <h3>{props.foodinfo.price} تومان</h3>
      <h3>{props.foodinfo.price}0 ریال</h3>

      <h2>Comments:</h2>
      {
        props.foodinfo.comments.map((x: any, i: number) =>
          <Comment key={i} comment={x}></Comment>
        )
      }

      <button>سفارش دهید</button>
    </div>
}
