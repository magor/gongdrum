const players = Array.from(document.querySelectorAll<HTMLElement>('[data-gong-player]'));

function setPlayingState(player: HTMLElement, playing: boolean) {
  const button = player.querySelector<HTMLButtonElement>('.gong-player-button');
  if (!button) return;

  button.setAttribute('aria-pressed', playing ? 'true' : 'false');
  player.classList.toggle('is-playing', playing);
}

function pauseOthers(active: HTMLElement) {
  players.forEach((player) => {
    if (player === active) return;
    const audio = player.querySelector<HTMLAudioElement>('audio');
    if (!audio || audio.paused) return;
    audio.pause();
    setPlayingState(player, false);
  });
}

players.forEach((player) => {
  const button = player.querySelector<HTMLButtonElement>('.gong-player-button');
  const audio = player.querySelector<HTMLAudioElement>('audio');
  if (!button || !audio) return;

  button.addEventListener('click', async () => {
    if (audio.paused) {
      pauseOthers(player);
      try {
        await audio.play();
        setPlayingState(player, true);
      } catch {
        setPlayingState(player, false);
      }
      return;
    }

    audio.pause();
    setPlayingState(player, false);
  });

  audio.addEventListener('ended', () => setPlayingState(player, false));
  audio.addEventListener('pause', () => setPlayingState(player, false));
});
