import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from "./ColorList";
import {axiosWithAuth} from './api/axiosWithAuth';

jest.mock( () => {
  const [mockedData, setMockedData] = useState([])
  axiosWithAuth().get('http://localhost:5000/api/colors')
      .then(res => setMockedData(res.data))
      .catch(err => console.error('error fetching colors',err))
})

const testColors = [
  {id: 0, color: 'test1', code: {hex: '#333333'}},
  {id: 1, color: 'test2', code: {hex: '#222222'}},
  {id: 2, color: 'test3', code: {hex: '#111111'}},
]

test("Fetches data and renders the bubbles", () => {
  // Finish this test
 const {queryAllByTestId, rerender} = render(<BubblePage/>)
  render(<ColorList colors={testColors}/>)
  expect(queryAllByTestId('color-list-item')).toStrictEqual([])
  expect(queryAllByTestId('color-list-item')).toHaveLength(0)

  rerender(<BubblePage colorList={[testColors]} />)
  expect(queryAllByTestId('color-list-item')).toStrictEqual([])
  expect(queryAllByTestId('color-list-item')).toHaveLength(3) 
  
});
