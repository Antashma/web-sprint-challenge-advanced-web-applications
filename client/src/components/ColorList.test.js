import React from "react";
import { queryByTestId, render, screen, wait } from "@testing-library/react";
import ColorList from "./ColorList";
import {getColorData} from '../api/getColorData';

jest.mock('../api/getColorData')

const testColors = [
  {id: 0, color: 'test1', code: {hex: '#333333'}},
  {id: 1, color: 'test2', code: {hex: '#222222'}},
  {id: 2, color: 'test3', code: {hex: '#111111'}},
]

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  getColorData.mockResolvedValueOnce({data: testColors})

  const { queryAllByTestId } = render(<ColorList colors={testColors} updateColors={() => {}} />)
  const colorItems = queryAllByTestId('color-list-item')
  expect(colorItems).toHaveLength(3)
});
