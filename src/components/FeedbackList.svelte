<script>
  import FeedbackItem from './FeedbackItem.svelte'
  import {FeedbackStore} from '../stores/feedbackStore'

</script>

<div>
  {#if $FeedbackStore.feedbacks.length}
  {#each $FeedbackStore.feedbacks as item}
    <FeedbackItem {item} />
  {/each}
  {:else}
    <h3>
      No feedback items available
    </h3>
  {/if}
</div>