import { useSyncExternalStore } from 'react'

type Setter<T> = (newVal: T | ((prev: T) => unknown)) => void

export function createState<InitialState>(initialState?: InitialState) {
	let callback: (() => void) | undefined

	const subscribe = (cb: () => void) => {
		callback = cb
		return () => {
			callback = undefined
		}
	}

	let state = initialState

	const setState: Setter<InitialState> = (arg) => {
		if (typeof arg === 'function') {
			//@ts-ignore it says it's not callable but we are actually checking the arg is a function
			state = arg(state)
		} else {
			state = arg
		}
		if (callback) callback()
	}

	return function () {
		const _state = useSyncExternalStore(
			subscribe,
			() => state,
			() => initialState,
		)

		return [_state, setState] as const
	}
}
