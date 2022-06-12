<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
export let items
export let activeItem
</script>

<div class="tabs">
    <ul>
    {#each items as item}
    <li on:click={()=>{dispatch('tabChange',item)}} >
        <div class:active={activeItem===item}>{item}</div>
    </li>
    {/each}
    </ul>
</div>

<style>
    .tabs{
        margin-bottom: 40px;
    }

     li{
         font-size: 18px;
         color:#555;
         cursor: pointer;
     }

    ul{
        display: flex;
        list-style-type: none;
       padding: 0;
       justify-content: center;
       gap:15px
    }
    .active{
        color: #d91b42;
        border-bottom: 1px solid #d91b42;
        padding-bottom: 8px;
    }
</style>