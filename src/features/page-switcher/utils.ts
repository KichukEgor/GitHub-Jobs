export const createArrayOfPageNums = (lobsCount: number, limit: number) => {
  const pageCount: number = Math.ceil(lobsCount / limit)
  const arrayOfPageNum: number[] = []
  for (let i = 1; i <= pageCount; i += 1) {
    arrayOfPageNum.push(i)
  }
  return {
    arrayOfPageNum
  }
}
