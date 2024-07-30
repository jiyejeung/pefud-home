export const createRippleEffect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement('span');

  const size = Math.max(button.clientWidth, button.clientHeight);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.className = 'ripple';

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
};
