import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

test("header renders with correct text", () => {
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
})

test("counter initially start with text of 0", () => {
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
})

test("input contains initial value of 1", () => {
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
})

test('add button renders with +', () => {
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
})

test('subtract button renders with -', () => {
  const subtractBtn = getByTestId("add-subtract");

  expect(subtractBtn.textContent).toBe("-");
})

test('changing value of input works correctly', () => {
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  });

  expect(inputEl.value).toBe("5");
})

test('click on + button adds 1 to counter', () => {
  const btnPlus = getByTestId("add-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(btnPlus);

  expect(counterEl.textContent).toBe("1");

})

test('click on - button subtracts 1 from counter', () => {
  const btnSubtract = getByTestId("add-subtract");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(btnSubtract);

  expect(counterEl.textContent).toBe("-1");
})

test('changing input value then clicking on add button works correctly', () => {
  const btnPlus = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  });

  fireEvent.click(btnPlus);

  expect(counterEl.textContent).toBe("5");

})

test('changing input value then clicking on add button works correctly', () => {
  const subtractBtn = getByTestId("add-subtract");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  });

  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe("-5");

})

test('changes value acordingly to + and - from 4 clicks on add and then 2 clicks on -, expects 20 value', () => {
  const subtractBtn = getByTestId("add-subtract");
  const addBtn = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "10"
    }
  });

  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe("20");

})

test('counter equals or higher than 100 becomes green and equals or above -100 becomes red', () => {
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  const subtractBtn = getByTestId("add-subtract");
  const addBtn = getByTestId("add-btn");

  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, {
    target: {
      value: "50"
    }
  });

  fireEvent.click(addBtn);

  expect(counterEl.className).toBe("");

  fireEvent.click(addBtn);

  expect(counterEl.className).toBe("green");

  fireEvent.click(addBtn);

  expect(counterEl.className).toBe("green");

  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.className).toBe("");

  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.className).toBe("red");
})
