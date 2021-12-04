<script>
  import {createEventDispatcher} from 'svelte'
  import {v4} from 'uuid';

  const dispatch = createEventDispatcher()

  let rating = 1
  let text = ''
  let name = ''

  const maxRating = 10
  const ratingOptions = []

  while (rating <= maxRating) {
    ratingOptions.push(rating)
    rating++
  }
  
  const feedbackSubmit = () => {
    dispatch('feedback-submit', {
      id: v4(),
      rating,
      text,
      name,
    })
  }
</script>

<div class="form-wrapper">
  <h2>Add new feedback</h2>
  <form on:submit|preventDefault={feedbackSubmit}>
    <select on:change={(e) => rating = e.target.value}>
      {#each ratingOptions as ratingOption (ratingOption)}
        <option value={ratingOption}>{ratingOption}</option>
      {/each}
    </select>
    <input bind:value={text} placeholder="Enter new feedback" />
    <input bind:value={name} placeholder="Enter your name" />
    <button type="submit">Send</button>
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