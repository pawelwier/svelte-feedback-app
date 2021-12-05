import {writable} from 'svelte/store'

export const FeedbackStore = writable({
  feedbacks: [
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
      text: 'Whereas traditional frameworks like React and Vue do the bulk of their work in the browser,',
    },
  ],
  selectedFeedback: null,
  displayEditFeedbackPopup: false,
})