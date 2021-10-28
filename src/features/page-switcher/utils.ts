export const createArrayOfPageNums = (lobsCount: number, pageLimit: number) => {
  const pageCount: number = Math.ceil(lobsCount / pageLimit)
  const arrayOfPageNum: number[] = []
  for (let i = 1; i <= pageCount; i += 1) {
    arrayOfPageNum.push(i)
  }
  return {
    arrayOfPageNum
  }
}
