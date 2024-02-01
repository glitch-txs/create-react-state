import { useCount } from '../App'

export default function Track() {
	const [count, setCount] = useCount()

	return <button onClick={() => setCount((count) => count - 1)}>now count is {count}</button>
}
