export const showCorrectImage = (
  watch: File | string,
  defaultImage: string
) =>
  (typeof watch === 'string' ? defaultImage : URL.createObjectURL(watch))
