<script>
export let type = 'primary'
export let flat = false
export let inverse = false

</script>

<button class="{type} Button" class:flat={flat} class:inverse={inverse} on:click>
    <slot></slot>
</button>


<style>
 
.Button{
    margin-left:auto;
    margin-top: 15px !important;
      display: block;
      
  }
 
button {
    border:  none;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}

.primary{
    background-color: #d91b42;
    color: white;
}

.secondary{
    background-color: #45c496;
    color: white;
}
.flat{
    box-shadow: none;
}

.primary.inverse{
    background-color: white;
    border: 2px solid #d91b42;
    color: #d91b42;
}

.primary.inverse:hover{
    background-color: #d91b42;
    border: 2px solid #d91b42;
    color: white;
}

.secondary.inverse{
    background-color: white;
    border: 2px solid #45c496 ;
    color: #45c496 ;
}


</style>