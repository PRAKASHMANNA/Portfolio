function submitContact(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  window.open(
    `https://mail.google.com/mail/?view=cm&to=Prakashmanna33@gmail.com&su=${encodeURIComponent('Portfolio Contact from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`)}`,
    '_blank'
  );
}
