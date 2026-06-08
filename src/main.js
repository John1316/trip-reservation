import './style.css'

const viewRoot = document.getElementById('view-root')

viewRoot.innerHTML = `
  <section class="hero-shell">
    <h1>Plan your next adventure</h1>
    <p>Enter trip details, generate AI-powered itineraries, and save your favorite plans.</p>
    <a href="/search" class="btn btn-primary" data-link>Start Planning</a>
  </section>
`
