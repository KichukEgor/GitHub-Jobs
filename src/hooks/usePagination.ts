type TProps={
    lobsCount: number,
    pageSize: number
}

export const usePagination = ({ lobsCount, pageSize }: TProps) => {
  // todo кастомный хук
  const pageCount: number = Math.ceil(lobsCount / pageSize)
  const arrayOfPageNum: number[] = []
  for (let i = 1; i <= pageCount; i += 1) {
    arrayOfPageNum.push(i)
  }
  return {
    arrayOfPageNum
  }
}
