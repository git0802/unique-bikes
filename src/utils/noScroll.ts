export const noScroll = (isOpenModal: boolean) => {
  // eslint-disable-next-line
  const mainBlock = document.getElementById('main') as any;
  if (isOpenModal) {
    mainBlock?.classList.add('max-h-[100vh]');
    mainBlock?.classList.add('overflow-hidden');
    mainBlock?.classList.remove('overflow-y-auto');
  } else {
    mainBlock?.classList.remove('max-h-[100vh]');
    mainBlock?.classList.remove('overflow-hidden');
    mainBlock?.classList.add('overflow-y-auto');
  }
};
