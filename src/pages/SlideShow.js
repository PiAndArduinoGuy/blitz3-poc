import Blits from '@lightningjs/blits'
import ImageTile from '../components/ImageTile'
import { getNextImages } from '../api/imageApi'

export default Blits.Component('SlideSlow', {
  components: { ImageTile },
  template: `
    <Element w="1920" h="1080">
        <ImageTile w="1920" h="1080" :src="$imageSource" :x.transition="{value: $offset, duration: $duration, delay: 1000, end: $transitionEnd}" />
    </Element>
  `,
  hooks: {
    ready() {
      this.updateImage()
      this.animateIn()
    },
  },
  state() {
    return {
      imageSource: '',
      offset: -1920,
      animationType: 'animateIn',
    }
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
      this.offset = -1920
      this.animationType = 'animateAway'
    },
    transitionEnd() {
      console.log('Transition ended')
      if (this.animationType === 'animateIn') {
        this.$setTimeout(() => {
          this.animateAway()
        }, 15000)
      } else {
        this.updateImage()
        this.animateIn()
      }
    },

    updateImage() {
      this.imageSource = getNextImages(1)[0]
    },
  },
})
