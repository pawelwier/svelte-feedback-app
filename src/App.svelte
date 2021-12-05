<script>
  import FeedbackList from './components/FeedbackList.svelte'
  import AddFeedbackForm from './components/AddFeedbackForm.svelte'
  import EditFeedbackForm from './components/EditFeedbackForm.svelte'
  import {FeedbackStore} from './stores/feedbackStore'
  import Popup from './components/Popup.svelte'
import FeedbackStats from './components/FeedbackStats.svelte'
</script>

<main>
  {#if $FeedbackStore.displayEditFeedbackPopup}
  <Popup>
    <EditFeedbackForm />
  </Popup>
  {/if}
  <div class="new-feedback-form">
    <AddFeedbackForm  />
  </div>
  <FeedbackStats />
  <FeedbackList />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
  .new-feedback-form {
    display: flex;
    justify-content: center;
  }

	@media (min-width: 640px) {
		main {
			max-width: 880px;
		}
	}
</style>