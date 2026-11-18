import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import Todo from './Todo'

const notDoneTodo = { _id: '1', text: 'Write a test', done: false }

describe('<Todo />', () => {
  it('renders the text of the todo', () => {
    render(<Todo todo={notDoneTodo} deleteTodo={vi.fn()} completeTodo={vi.fn()} />)

    expect(screen.getByText('Write a test')).toBeDefined()
  })

  it('calls deleteTodo with the todo when Delete is clicked', () => {
    const deleteTodo = vi.fn()

    render(<Todo todo={notDoneTodo} deleteTodo={deleteTodo} completeTodo={vi.fn()} />)

    fireEvent.click(screen.getByText('Delete'))

    expect(deleteTodo).toHaveBeenCalledWith(notDoneTodo)
  })

  it('calls completeTodo with the todo when Set as done is clicked', () => {
    const completeTodo = vi.fn()

    render(<Todo todo={notDoneTodo} deleteTodo={vi.fn()} completeTodo={completeTodo} />)

    fireEvent.click(screen.getByText('Set as done'))

    expect(completeTodo).toHaveBeenCalledWith(notDoneTodo)
  })

  it('does not offer to set an already done todo as done again', () => {
    render(<Todo todo={{ ...notDoneTodo, done: true }} deleteTodo={vi.fn()} completeTodo={vi.fn()} />)

    expect(screen.getByText('This todo is done')).toBeDefined()
    expect(screen.queryByText('Set as done')).toBeNull()
  })
})
