export function initAudioPlayers(): void {
  const players = Array.from(document.querySelectorAll<HTMLElement>('[data-gong-player]'));

  function setProgress(seek: HTMLElement, audio: HTMLAudioElement): void {
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
      seek.style.setProperty('--progress', '0%');
      return;
    }

    const percent = (audio.currentTime / audio.duration) * 100;
    seek.style.setProperty('--progress', `${percent}%`);
  }

  function resetProgress(seek: HTMLElement): void {
    seek.style.setProperty('--progress', '0%');
  }

  function seekFromPointer(seek: HTMLElement, audio: HTMLAudioElement, clientX: number): void {
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;

    const rect = seek.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
    setProgress(seek, audio);
  }

  function setPlayingState(player: HTMLElement, playing: boolean) {
    const toggle = player.querySelector<HTMLButtonElement>('.gong-player-toggle');
    if (!toggle) return;

    toggle.setAttribute('aria-pressed', playing ? 'true' : 'false');
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
    const toggle = player.querySelector<HTMLButtonElement>('.gong-player-toggle');
    const seek = player.querySelector<HTMLElement>('.gong-player-seek');
    const audio = player.querySelector<HTMLAudioElement>('audio');
    if (!toggle || !seek || !audio) return;

    toggle.addEventListener('click', async () => {
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

    seek.addEventListener('click', (event) => {
      seekFromPointer(seek, audio, event.clientX);
    });

    seek.addEventListener('pointerdown', (event) => {
      if (event.button !== 0) return;

      event.preventDefault();
      seek.setPointerCapture(event.pointerId);
      seekFromPointer(seek, audio, event.clientX);

      const onPointerMove = (moveEvent: PointerEvent) => {
        if (moveEvent.pointerId !== event.pointerId) return;
        seekFromPointer(seek, audio, moveEvent.clientX);
      };

      const onPointerUp = (upEvent: PointerEvent) => {
        if (upEvent.pointerId !== event.pointerId) return;
        seek.releasePointerCapture(event.pointerId);
        seek.removeEventListener('pointermove', onPointerMove);
        seek.removeEventListener('pointerup', onPointerUp);
        seek.removeEventListener('pointercancel', onPointerUp);
      };

      seek.addEventListener('pointermove', onPointerMove);
      seek.addEventListener('pointerup', onPointerUp);
      seek.addEventListener('pointercancel', onPointerUp);
    });

    audio.addEventListener('timeupdate', () => setProgress(seek, audio));
    audio.addEventListener('ended', () => {
      resetProgress(seek);
      setPlayingState(player, false);
    });
    audio.addEventListener('pause', () => setPlayingState(player, false));
  });
}
