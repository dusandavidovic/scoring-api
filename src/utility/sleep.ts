function sleep(ms: number) {
  let start = new Date().getTime(),
    expire = start + ms;
  while (new Date().getTime() < expire) {}
  return;
}

export default {
  sleep,
};
