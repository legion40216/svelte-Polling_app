import {writable} from 'svelte/store'

const pollStore = writable([
	{question:"Do you like cake", answerA:"yes", 
    answerB:"no", votesA:20, votesB:30 , id:1},
])

export default pollStore