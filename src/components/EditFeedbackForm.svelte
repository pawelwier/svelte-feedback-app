<script>
  import {onMount} from 'svelte'
  import {get} from 'svelte/store'
  import {FeedbackStore} from '../stores/feedbackStore'
  
  const editFeedback = () => {
    FeedbackStore.update(current => ({
      ...current,
      feedbacks: current.feedbacks.map(item => item.id === editedFeedback.id ? editedFeedback : item),
      displayEditFeedbackPopup: false,
      selectedFeedback: null,
    }))
  }

  const closePopup = () => {
    FeedbackStore.update(current => ({
      ...current,
      displayEditFeedbackPopup: false,
    }))
  }

  const {id, rating, text, name} = get(FeedbackStore).selectedFeedback

  let editedFeedback = {
    id,
    rating,
    text,
    name,
  }
</script>

<form class="edit-feedback-form" on:submit|preventDefault={editFeedback}>
  <label for="text">Feedback: </label>
  <textarea id="text" bind:value={editedFeedback.text} />
  <label for="name">Name: </label>
  <input id="name" bind:value={editedFeedback.name} />
  <div>
    <button type="submit">Edit</button>
    <button on:click={closePopup}>Cancel</button>
  </div>
</form>

<style>
  textarea {
    width: 90%;
    height: 130px;
    resize: none;
  }
</style>