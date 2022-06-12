<script>
import PollStore from "../store/store";
import Button from "../shared/button.svelte";
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher()

let fields ={question:'',answerA:'',answerB:''}
let errors ={question:'',answerA:'',answerB:''}
let valid = false
const submitHandler = () =>{
valid=true

// validation of Question
if(fields.question.trim().length < 5)
{
valid=false
errors.question="Question needs to be greater the 5 characters"
}else{
     errors.question=''
   }
 
// validation of answer A
if(fields.answerA.trim().length < 1)
{
valid=false
errors.answerA="Poll ( Answer A ) must not be empty"
}else{
     errors.answerA='';
   }

// validation of answer B
if(fields.answerB.trim().length < 1)
{
valid=false
errors.answerB="Poll ( Answer B ) must not be empty"
}else{
     errors.answerB='';
   }
   
// check validity 
if(valid){
    let poll = {...fields, votesA: 0, votesB: 0, id: Math.floor(Math.random() * 50) + 1 }
    PollStore.update(currentPolls =>{
      return [poll, ...currentPolls]
    })
    dispatch('submitHandler')
  }
}

</script>

<form action="" on:submit|preventDefault={submitHandler}>
    <div class="form-field "> 
        <label for="question">Poll Question:</label>
        <span>{errors.question}</span>
        <input type="text" id="question" bind:value={fields.question}>
    </div>
    <div class="form-field ">
        <label for="answer-a">Answer A:</label>
        <span>{errors.answerA}</span>
        <input type="text" id="answer-a" bind:value={fields.answerA}>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <span>{errors.answerB}</span>
        <input type="text" id="answer-b" bind:value={fields.answerB}>
     </div>

     <Button type="secondary" flat={true} inverse={false}>Add Poll</Button>
</form>

<style>
 form{
   max-width: 400px;
   margin: 0 auto;
 }
 
input{
  width: 100%;
  border-radius: 8px;
}

label{
  
 
  font-size: 18px;
}

span{
  color:red;
 display: block;
 text-align: center;
 margin: 5px 0;
 font-weight: bold;
 font-size: 14px;
}

</style>