export function* range(start: number, end?: number, step?: number) {
  const x = !end ? 0 : start;
  const y = end ?? start;
  const s = step ?? 1;

  for (let i = x; i < y; i += s) {
    yield i;
  }
}
