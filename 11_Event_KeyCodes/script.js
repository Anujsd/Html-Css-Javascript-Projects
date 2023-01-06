const container = document.querySelector('.container');

window.addEventListener('keydown', (e) => {
  container.innerHTML = ` 
      <div class="key">
        ${e.key === ' ' ? 'Space' : e.key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${e.code}
        <small>event.code</small>
      </div>
      <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
      </div>`;
});
