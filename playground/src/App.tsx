import './App.css'
import { createState } from 'create-react-state'
import Track from './components/Track'

export const useCount = createState(0)

export default function App() {
	const [count, setCount] = useCount()

	return (
		<>
			<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			<Track />
		</>
	)
}
