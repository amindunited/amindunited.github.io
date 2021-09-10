# Spy on a default export with Jest

```
import uniqueIdGenerator from './UniqueIdGenerator'; // this import is a mock already

jest.mock('./UniqueIdGenerator.js', () => {
  const original = jest. requireActual('./UniqueIdGenerator')
  return {
     __esModule: true,
     default: jest.fn(original.default)
  }
})

test(() => {
  expect(uniqueIdGenerator).toHaveBeenCalled()
})
```
