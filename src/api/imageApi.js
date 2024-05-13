const mockImages = [
  'images/IMG-7435.jpg',
  'images/scenic-1.jpg',
  'images/scenic-2.jpg',
  'images/scenic-3.jpg',
  'images/scenic-4.jpg',
  'images/scenic-5.jpg',
  'images/scenic-6.jpg',
  'images/scenic-7.jpg',
  'images/scenic-8.jpg',
  'images/scenic-9.jpg',
  'images/IMG_4349.JPEG',
  'images/IMG_4251.JPEG',
  'images/IMG_4234.JPEG',
  'images/IMG_4212.JPG',
  'images/IMG_4089.JPEG',
  'images/IMG_4019.JPEG',
  'images/IMG_3552.JPG',
  'images/IMG_1049.JPG',
  'images/IMG_1021.JPG',
  'images/IMG_0158.JPG',
]

export const getNextImages = function (amount) {
  const nextImages = []
  for (let index = 0; index < amount; index++) {
    const random = Math.random()
    const randomIndex = Math.floor(random * (mockImages.length - 1))
    nextImages.push(mockImages[randomIndex])
  }
  return nextImages
}
