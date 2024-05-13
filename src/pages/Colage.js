import Blits from '@lightningjs/blits'
import ImageTile from '../components/ImageTile'

export default Blits.Component('Colage', {
  components: {
    ImageTile,
  },
  template: `
    <Element w="1920" h="1080">
    	<ImageTile w= "400" h="300" :for="(image, index) in $images" :src="$image.src" :x="$image.x" :y="$image.y" ref="image" :delay="$image.delay" :direction="$image.direction" />
    </Element>
  `,
  state() {
    return {
      images: [
        { src: 'images/IMG_4349.JPEG', x: 0, y: 0, delay: '1000', direction: 'up' },
        { src: 'images/IMG_4251.JPEG', x: 400, y: 0, delay: '2000' },
        { src: 'images/IMG_4234.JPEG', x: 800, y: 0, delay: '3000', direction: 'up' },
        { src: 'images/IMG_4212.JPG', x: 1200, y: 0, delay: '4000' },
        { src: 'images/IMG_4089.JPEG', x: 0, y: 300, delay: '5000', direction: 'up' },
        { src: 'images/IMG_4019.JPEG', x: 400, y: 300, delay: '6000' },
        { src: 'images/IMG_3552.JPG', x: 800, y: 300, delay: '7000', direction: 'up' },
        { src: 'images/IMG_1049.JPG', x: 1200, y: 300, delay: '8000' },
        { src: 'images/IMG_1021.JPG', x: 0, y: 600, delay: '9000', direction: 'up' },
        { src: 'images/IMG_0158.JPG', x: 400, y: 600, delay: '10000' },
        { src: 'images/IMG_4550.JPEG', x: 800, y: 600, delay: '11000', direction: 'up' },
        { src: 'images/IMG-5771.jpg', x: 1200, y: 600, delay: '12000' },
      ],
    }
  },
})
