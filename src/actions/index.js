
export const increment = (amount = 1) => ({
  type: 'INCREMENT',
  amount
})

export const decrement = (amount = 1) => ({
  type: 'DECREMENT',
  amount
})

export const multiply = (amount = 1) => ({
  type: 'MULTIPLY',
  amount
})
