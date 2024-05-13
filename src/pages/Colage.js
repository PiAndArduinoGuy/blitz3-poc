import Blits from '@lightningjs/blits'
import ImageTile from '../components/ImageTile'

export default Blits.Component('Colage', {
  components: {
    ImageTile,
  },
  template: `
    <Element w="1920" h="1080">
    	<ImageTile w= "400" h="300" :src="$imageTen" delay="1000" direction="up" />
      <ImageTile w= "400" h="300" x="400" y="0" :src="$imageOne" delay="1000" />
      <ImageTile w= "400" h="300" x="800" y="0" :src="$imageTwo" delay="2000" direction="up" />
      <ImageTile w= "400" h="300" x="1200" y="0" :src="$imageThree" delay="3000" />
      <ImageTile w= "400" h="300" x="0" y="300" :src="$imageFour" delay="4000" direction="up" />
      <ImageTile w= "400" h="300" x="400" y="300" :src="$imageFive" delay="5000"  />
      <ImageTile w= "400" h="300" x="800" y="300" :src="$imageSix" delay="6000" direction="up" />
      <ImageTile w= "400" h="300" x="1200" y="300" :src="$imageSeven" delay="7000" />
      <ImageTile w= "400" h="300" x="0" y="600" :src="$imageEight" delay="8000" direction="up" />
      <ImageTile w= "400" h="300" x="400" y="600" :src="$imageNine" delay="9000" />
    </Element>
  `,
  state() {
    return {
      imageOne: 'images/IMG_4349.JPEG',
      imageTwo: 'images/IMG_4251.JPEG',
      imageThree: 'images/IMG_4234.JPEG',
      imageFour: 'images/IMG_4212.JPG',
      imageFive: 'images/IMG_4089.JPEG',
      imageSix: 'images/IMG_4019.JPEG',
      imageSeven: 'images/IMG_3552.JPG',
      imageEight: 'images/IMG_1049.JPG',
      imageNine: 'images/IMG_1021.JPG',
      imageTen: 'images/IMG_0158.JPG',
    }
  },
  hooks: {
    ready() {
      this.$setTimeout(() => {
        console.log('Performing image tile updates')
        this.updateImages()
      }, 15000)
    },
  },

  methods: {
    updateImages() {
      this.imageOne = 'images/IMG-7435.jpg'
      this.imageTwo = 'images/scenic-1.jpg'
      this.imageThree = 'images/scenic-2.jpg'
      this.imageFour = 'images/scenic-3.jpg'
      this.imageFive = 'images/scenic-4.jpg'
      this.imageSix = 'images/scenic-5.jpg'
      this.imageSeven = 'images/scenic-6.jpg'
      this.imageEight = 'images/scenic-7.jpg'
      this.imageNine = 'images/scenic-8.jpg'
      this.imageTen = 'images/scenic-9.jpg'
    },
  },
})
