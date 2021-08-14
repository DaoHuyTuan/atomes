import { render } from '@testing-library/react'
import { Comments } from '@daohuytuan/react-comments'

describe('Comments', () => {
  test('throws if has no content', () => {
    const spy = jest.spyOn(console, 'error')
    spy.mockImplementation(() => void 0)
    expect(() => {
      const data = [{ contents: 'fdsfds' }, { contents: 'fdsfdsfwedsfds' }]
      render(<Comments data={data} />)
    }).toThrowError('must have either "icon" or "children"')
    spy.mockRestore()
  })
})
