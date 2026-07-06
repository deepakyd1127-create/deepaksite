// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('active');
  });
});

// Facebook Pixel Lead tracking on button clicks
document.querySelectorAll('.join-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (typeof fbq === 'function') {
      fbq('track', 'Lead');
    }
  });
});
