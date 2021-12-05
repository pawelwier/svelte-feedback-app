<script>
import FeedbackList from './components/FeedbackList.svelte'
import FeedbackForm from './components/FeedbackForm.svelte'

  const handleFeedbackSubmit = (e) => {
    feedbacks = [e.detail, ...feedbacks]
  }
</script>

<main>
  <div class="new-feedback-form">
    <FeedbackForm on:feedback-submit={handleFeedbackSubmit} />
  </div>
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