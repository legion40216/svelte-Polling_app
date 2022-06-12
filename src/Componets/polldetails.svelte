<script>
    import Card from "../shared/card.svelte";
    import Button from "../shared/button.svelte";
    import pollStore from "../store/store";
    import { tweened } from "svelte/motion"
    export let poll
    $: totalVotes= poll.votesA + poll.votesB
    $: percentageA= Math.floor(100/totalVotes * poll.votesA) || 0
    $: percentageB= Math.floor(100/totalVotes * poll.votesB) || 0
    
    const tweenedA = tweened(0)
    const tweenedB = tweened(0)
    $: tweenedA.set(percentageA)
    $: tweenedB.set(percentageB)
 

    //detelte poll
    const handleDelete = (id) =>{
        pollStore.update(currentPoll =>{
            return currentPoll.filter(poll => poll.id != id)
            
        })
    }
</script>

<Card>
<div class="poll">
<h3>{poll.question}</h3>
<p>Total Votes: {totalVotes}</p>
<div class="answer" on:click={()=>{poll.votesA++}}>
    <div class="percent percent-a" style="width:{$tweenedA}%"></div>
    <span>{poll.answerA}({poll.votesA})</span>
</div>
<div class="answer" on:click={()=>{poll.votesB++}}>
    <div class="percent percent-b" style="width:{$tweenedB}%"></div>
    <span>{poll.answerB}({poll.votesB})</span>
</div>
<Button type="primary" inverse={true} on:click={() => handleDelete(poll.id)}>Delete</Button>
</div>
</Card>
<style>
h3{
    color: #555
}
p{
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom:30px;
}

.answer{
background-color: #f3f1f1;
cursor: pointer;
margin: 10px auto;
position: relative;
}

.answer:hover{
    background-color: #f3f1f193
}

span{
display: inline-block;
padding: 10px 20px;
}
.percent{
    height: 100%;
    position:absolute;
    box-sizing: border-box;
}

.percent-a{
    border-left: 4px solid #d91b42;
    background: rgba(217,27,66,0.2);
    
  
}
.percent-b{
    border-left:4px solid  #45c496 ;
    background: rgba(69, 196, 150, 0.2);
}
</style>