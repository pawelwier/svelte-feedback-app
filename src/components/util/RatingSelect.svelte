<script>
  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()

  let ratingOption = 1
  const ratingOptions = []

  export let rating
  export let maxRating
  export let hasEmptyOption = true
  
  while (ratingOption <= maxRating) {
    ratingOptions.push(ratingOption)
    ratingOption++
  }
</script>

<select bind:value={rating} on:change={() => dispatch('rating-select', rating)}>
  {#if hasEmptyOption}
  <option value={null}> -- </option>
  {/if}
  {#each ratingOptions as r (r)}
    <option value={r}>{r}</option>
  {/each}
</select>