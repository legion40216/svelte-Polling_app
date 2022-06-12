<script>
import Header from './Componets/header.svelte'
import Footer from './Componets/footer.svelte'
import PollList from './Componets/pollList.svelte'
import Tabs from './shared/tabs.svelte'
import Createform from './Componets/createform.svelte';

let items= ['Current Polls','Add New Polls']
let activeItem ='' 
let oldValue =''


let tabChange = (e)=>{

//toggle code
oldValue=e.detail
if(oldValue===activeItem)
{
	activeItem='';

}
else{
	activeItem = e.detail;
}
}

const submitHandler = () =>{

	activeItem = 'Current Polls'
}


</script>

<Header/>
<main>
	
    <Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem ==='Current Polls'}

	<PollList />
	
	{:else if activeItem ==='Add New Polls'}
	<Createform on:submitHandler={submitHandler}/>
	
	{:else}
	<h1>Hello, Ninja!</h1>
	{/if}
      
</main>
<Footer />
<style>
	h1{
		text-align: center;
	}
	
main{
	max-width: 800px;
	margin: 0 auto;
	padding: 10px 20px;
}


</style>