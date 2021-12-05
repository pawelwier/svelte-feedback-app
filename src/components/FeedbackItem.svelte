<script>
  import {FeedbackStore} from '../stores/feedbackStore'

  const handleItemDelete = (itemId) =>  {
    FeedbackStore.update(current => {
      return current.filter(({id}) => itemId !== id)
    })
  }

  export let item
</script>

<div class="feedback-card">
  <div class="feedback-rating rounded-item">{item.rating}</div>
  <div class="feedback-close rounded-item" on:click={() => handleItemDelete(item.id)}>X</div>
  {item.text}
  <div class="feedback-name rounded-item">{item.name}</div>
</div>

<style>
.feedback-card {
  background-color: azure;
  border-radius: 10px;
  border: 2px solid cadetblue;
  margin: 50px 0;
  padding: 20px 30px;
  font-size: 18px;
  position: relative;
  min-width: 180px;
}
.rounded-item {
  position: absolute;
  border-radius: 25px;
  text-align: center;
}
.feedback-rating {
  top: -15px;
  left:-10px;
  background-color: darkgray;
  color: white;
  width: 25px;
  padding: 10px;
}
.feedback-close {
  top: -15px;
  right:-10px;
  background-color: rgb(238, 20, 20);
  color: white;
  width: 15px;
  font-size: 12px;
  padding: 5px;
  cursor: pointer;
}
.feedback-name {
  bottom: -20px;
  left:100px;
  background-color: white;
  padding: 3px 10px 5px 10px;
  border: 1px black solid;
}
</style>