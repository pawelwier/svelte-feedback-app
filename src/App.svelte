<script>
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackForm from './components/FeedbackForm.svelte'

  let feedbacks = [
    {
      id: 1,
      name: 'Pawel',
      rating: 6,
      text: 'Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser',
    },
    {
      id: 2,
      name: 'Olga',
      rating: 7,
      text: 'Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks ',
    },
    {
      id: 3,
      name: 'Miszi',
      rating: 3,
      text: 'Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser,',
    },
  ]

  const handleFeedbackDelete = (e) => {
    feedbacks = feedbacks.filter(({id}) => id !== e.detail)
  }

  const handleFeedbackSubmit = (e) => {
    feedbacks = [e.detail, ...feedbacks]
  }
</script>

<main>
  <div class="new-feedback-form">
    <FeedbackForm on:feedback-submit={handleFeedbackSubmit} />
  </div>
  {#each feedbacks as item}
	  <FeedbackList {item} on:feedback-delete= {handleFeedbackDelete} />
  {/each}
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