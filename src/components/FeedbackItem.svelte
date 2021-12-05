<script>
  import {FeedbackStore} from '../stores/feedbackStore'

  const handleItemDelete = (itemId) =>  {
    FeedbackStore.update(current => ({
        ...current,
        feedbacks: current.feedbacks.filter(({id}) => itemId !== id)
      }))
  }

  const handleSelectFeedbackEdit = (itemId) => {
    showEditTextPopup()
    setSelectedFeedbackItem()
  }

  const showEditTextPopup = () => {
    FeedbackStore.update(current => ({
      ...current,
      displayEditFeedbackPopup: true
    }))
  }

  const setSelectedFeedbackItem = () => {
    FeedbackStore.update(current => ({
      ...current,
      selectedFeedback: item
    }))
  }

  export let item
</script>

<div class="feedback-card">
  <div class="feedback-rating rounded-item">{item.rating}</div>
  <div class="feedback-edit rounded-item" on:click={() => handleSelectFeedbackEdit(item.id)}>Edit</div>
  <div class="feedback-close rounded-item" on:click={() => handleItemDelete(item.id)}>X</div>
  {item.text}
  <div class="feedback-name rounded-item">{item.name}</div>
</div>

<style>
  .feedback-card {
    background-color: #feffbb;
    border-radius: 10px;
    border: 2px solid rgb(114, 117, 62);
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
    background-color: rgb(56, 56, 56);
    color: white;
    width: 25px;
    padding: 10px;
  }
  .feedback-close {
    top: -15px;
    right:-10px;
    background-color: rgb(202, 51, 51);
    color: white;
    width: 15px;
    font-size: 12px;
    padding: 5px;
    cursor: pointer;
  }
  .feedback-name {
    bottom: -20px;
    left:100px;
    color: white;
    background-color: rgb(118, 112, 34);
    padding: 3px 10px 5px 10px;
  }
  .feedback-edit {
    top: -15px;
    right:25px;
    color: white;
    background-color: rgb(157, 113, 88);
    padding: 3px 10px 5px 10px;
    cursor: pointer;
  }
</style>