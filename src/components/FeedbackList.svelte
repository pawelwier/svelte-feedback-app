<script>
  import FeedbackItem from './FeedbackItem.svelte'
  export let item
</script>

<div>
  <FeedbackItem {item} on:feedback-delete />
</div>