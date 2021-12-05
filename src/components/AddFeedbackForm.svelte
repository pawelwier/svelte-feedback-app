<script>
  import {v4} from 'uuid';
  import {FeedbackStore} from '../stores/feedbackStore'

  let ratingOption = 1
  let rating
  let text = ''
  let name = ''

  const maxRating = 10
  const ratingOptions = []

  while (ratingOption <= maxRating) {
    ratingOptions.push(ratingOption)
    ratingOption++
  }
  
  const feedbackSubmit = () => {
    FeedbackStore.update(current => {
      return {
        ...current,
        feedbacks: [
          {
            id: v4(),
            rating,
            text,
            name,
          }, 
          ...current.feedbacks
        ]
      }
    })
    FeedbackStore.subscribe(current => {
      console.log(current)
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
    <select bind:value={rating}>
      <option value={null}> -- </option>
      {#each ratingOptions as r (r)}
        <option value={r}>{r}</option>
      {/each}
    </select>
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