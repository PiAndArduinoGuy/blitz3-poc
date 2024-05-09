import Blits from '@lightningjs/blits'
import ImageTile from '../components/ImageTile'

export default Blits.Component('Colage', {
  components: {
    ImageTile,
  },
  template: `
    <Element w="1920" h="1080">
    	<ImageTile w= "400" h="216" :for="(image, index) in $images" :src="$image.src" :x="$image.x" :y="$image.y" />
    </Element>
  `,
  state() {
    return {
      images: [
        { src: 'images/IMG_4349.JPEG', x: 0, y: 0 },
        { src: 'images/IMG_4251.JPEG', x: 400, y: 0 },
        { src: 'images/IMG_4234.JPEG', x: 800, y: 0 },
        { src: 'images/IMG_4212.JPG', x: 1200, y: 0 },
        { src: 'images/IMG_4089.JPEG', x: 1600, y: 0 },
        { src: 'images/IMG_4019.JPEG', x: 0, y: 216 },
        { src: 'images/IMG_3552.JPG', x: 400, y: 216 },
        { src: 'images/IMG_1049.JPG', x: 800, y: 216 },
        { src: 'images/IMG_1021.JPG', x: 1200, y: 216 },
        { src: 'images/IMG_0158.JPG', x: 1600, y: 216 },
      ],
    }
  },
})
