<script>
  import {get} from 'svelte/store'
  import {FeedbackStore} from '../stores/feedbackStore'
  import RatingSelect from './util/RatingSelect.svelte'
  
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

  const ratingChange = (e) => {
    editedFeedback = {
      ...editedFeedback,
      rating: e.detail,
    }
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
  <div class="input-wrapper">
    <div>
      <label for="name">Name: </label>
      <input id="name" bind:value={editedFeedback.name} />
    </div>
    <div>
      <label for="rating">Rating: </label>
      <RatingSelect {rating} maxRating={10} hasEmptyOption={false} on:rating-select={ratingChange} />
    </div>
  </div>
  <div>
    <button type="submit">Edit</button>
    <button on:click={closePopup}>Cancel</button>
  </div>
</form>

<style>
  .input-wrapper {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  textarea {
    width: 90%;
    height: 130px;
    resize: none;
  }
  label {
    font-weight: 700;
  }
</style>