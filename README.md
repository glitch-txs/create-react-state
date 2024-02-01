# Create React State

## Install

```bash
pnpm add create-react-state
```

### Create a useState

You can create a "useState" outside React components

```ts
import { createState } from 'create-react-state'

export const useCount = createState(0)
```

### Use in any React Component

import `useCount` in any component
```tsx
import './App.css'
import { createState } from 'create-react-state'

export const useCount = createState(0)

export default function App() {
  const [count, setCount] = useCount()

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}
```