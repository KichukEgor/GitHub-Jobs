export const validateUploadedImage = (watch: File | string) => {
  if (typeof watch === 'string') return true
  return watch.type === 'image/jpeg'
}
