<script>
import pollStore from "../store/store.js";
import {fade, scale ,slide} from "svelte/transition"
import {flip} from "svelte/animate"
import Polldetails from "./polldetails.svelte";
export let PollsArry = []

pollStore.subscribe(data=>{
    PollsArry=data
})
</script>

<div class="poll-list">
{#each  PollsArry  as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{duration: 500}}>
        <Polldetails  {poll} />
    </div>


{/each}
</div>

<style>

.poll-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

</style>