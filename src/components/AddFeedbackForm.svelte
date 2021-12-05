<script>
  import {v4} from 'uuid';
  import {FeedbackStore} from '../stores/feedbackStore'
  import RatingSelect from './util/RatingSelect.svelte'

  let rating
  let text = ''
  let name = ''
  
  const feedbackSubmit = () => {
    if (!submittable) return
    FeedbackStore.update(current => {
      return {
        ...current,
        feedbacks: [
          ...current.feedbacks,
          {
            id: v4(),
            rating,
            text,
            name,
          }, 
        ]
      }
    })
    rating = null
    text = ''
    name = ''
  }

  $: submittable = rating && text && name
</script>

<div class="form-wrapper">
  <h2>Add new feedback</h2>
  <form on:submit|preventDefault={feedbackSubmit}>
    <RatingSelect maxRating={10} {rating} on:rating-select={(e) => rating = e.detail} />
    <input bind:value={text} placeholder="Enter new feedback" />
    <input bind:value={name} placeholder="Enter your name" />
    <button disabled={!submittable} type="submit">Send</button>
  </form>
</div>

<style>
  .form-wrapper {
    background-color: lightgray;
    border-radius: 10px;
    padding: 10px 40px;
    border: 3px darkgray solid;
  }
</style>