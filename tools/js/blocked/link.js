document.getElementById('scroll-to-bottom').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: document.body.scrollHeight, // Body ZZII <body>
    behavior: 'smooth'
  });
});
