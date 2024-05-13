import Blits from '@lightningjs/blits'
import ImageTile from '../components/ImageTile'
import { getNextImages } from '../api/imageApi'

export default Blits.Component('Colage', {
  components: {
    ImageTile,
  },
  template: `
    <Element w="1920" h="1080">
    	<ImageTile w= "400" h="300" :src="$imageTen" :y.transition="{value: $offset, duration: $duration, delay: 1000}" />
      <ImageTile w= "400" h="300" x="400" :y.transition="{value: $offset, duration: $duration, delay: 2000}" :src="$imageOne" />
      <ImageTile w= "400" h="300" x="800" :y.transition="{value: $offset, duration: $duration, delay: 3000}" :src="$imageTwo" direction="up" />
      <ImageTile w= "400" h="300" x="1200" :y.transition="{value: $offset, duration: $duration, delay: 4000}" :src="$imageThree"  />
      <ImageTile w= "400" h="300" x="0" :y.transition="{value: 300 + $offset, duration: $duration, delay: 5000}" :src="$imageFour"  direction="up" />
      <ImageTile w= "400" h="300" x="400" :y.transition="{value: 300 + $offset, duration: $duration, delay: 6000}" :src="$imageFive" delay="5000"  />
      <ImageTile w= "400" h="300" x="800" :y.transition="{value: 300 + $offset, duration: $duration, delay: 7000}" :src="$imageSix" delay="6000" direction="up" />
      <ImageTile w= "400" h="300" x="1200" :y.transition="{value: 300 + $offset, duration: $duration, delay: 8000}" :src="$imageSeven" delay="7000" />
      <ImageTile w= "400" h="300" x="0" :y.transition="{value: 600 + $offset, duration: $duration, delay: 9000}" :src="$imageEight" delay="8000" direction="up" />
      <ImageTile w= "400" h="300" x="400" :y.transition="{value: 600 + $offset, duration: $duration, delay: 10000}" :src="$imageNine" delay="9000" />
      <ImageTile w= "400" h="300" x="800" :y.transition="{value: 600 + $offset, duration: $duration, delay: 11000}" :src="$imageNine" delay="9000" />
      <ImageTile w= "400" h="300" x="1200" :y.transition="{value: 600 + $offset, duration: $duration, delay: 12000, end: $lastItemTransitioned}" :src="$imageNine" delay="9000" />

    </Element>
  `,
  state() {
    return {
      imageOne: '',
      imageTwo: '',
      imageThree: '',
      imageFour: '',
      imageFive: '',
      imageSix: '',
      imageSeven: '',
      imageEight: '',
      imageNine: '',
      imageTen: '',
      imageEleven: '',
      imageTwelve: '',
      offset: -1080,
      animationType: 'animateIn',
    }
  },
  hooks: {
    ready() {
      this.updateImages()
      this.animateIn()
    },
  },

  methods: {
    animateIn() {
      this.wait = this.delay
      this.duration = 5000
      this.offset = 0 // remove the offset that placed items off screen
      this.animationType = 'animateIn'
    },
    animateAway() {
      this.wait = this.delay
      this.duration = 5000
      this.offset = 1080
      this.animationType = 'animateAway'
    },
    updateImages() {
      const nextImages = getNextImages(12)
      this.imageOne = nextImages[0]
      this.imageTwo = nextImages[1]
      this.imageThree = nextImages[2]
      this.imageFour = nextImages[3]
      this.imageFive = nextImages[4]
      this.imageSix = nextImages[5]
      this.imageSeven = nextImages[6]
      this.imageEight = nextImages[7]
      this.imageNine = nextImages[8]
      this.imageTen = nextImages[9]
      this.imageEleven = nextImages[10]
      this.imageTwelve = nextImages[11]
    },

    lastItemTransitioned() {
      console.log('Last item transitioned')
      if (this.animationType === 'animateIn') {
        this.$setTimeout(() => {
          this.animateAway()
        }, 15000)
      } else {
        this.updateImages()
        this.animateIn()
      }
    },
  },
})
