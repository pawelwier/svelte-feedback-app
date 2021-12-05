<script>
  import {FeedbackStore} from '../stores/feedbackStore'

  const getAverageRating = (feedbacks) => feedbacks.length ? feedbacks.map(f => f.rating).reduce((prev, curr) => (prev + curr), 0) / feedbacks.length : 0
</script>

<h3>
  Average rating: {getAverageRating($FeedbackStore.feedbacks).toFixed(2)}
</h3>