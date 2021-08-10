import { stringifyUrl, parse } from 'query-string'

// 얘 분리해
// q가 도대체 뭐야. 변수명 다시 지어
export async function getBooks(search, startIndex) {
  const { q, ...rest } = parse(search)
  const input = stringifyUrl({
    url: 'https://www.googleapis.com/books/v1/volumes',
    query: {
      q: `${q}`,
      startIndex,
      projection: 'full',
      ...rest
    }
  })

  return fetch(input)
}
