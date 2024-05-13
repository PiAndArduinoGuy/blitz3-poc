import Blits from '@lightningjs/blits'

export default Blits.Component('ImageTile', {
  template: `
    <Element :w="$w" :h="$h">
    	<Element :y.transition="{value: $padding + $offset, duration: $duration, delay: $wait}" x="$padding"  :w="$w -  2* $padding" :h="$h - 2*$padding" :src="$src" @error="$toggleShowError"/>
      <Element y="$padding" x="$padding"  :w="$w -  2* $padding" :h="$h - 2*$padding" src="images/icons/no-image.png" :show="$showError" />
    </Element>
  `,
  props: [
    'src',
    'w',
    'h',
    {
      key: 'padding',
      default: 10,
    },
    'delay',
    'direction',
  ],
  hooks: {
    ready() {
      this.animate()
    },
  },
  state() {
    return {
      showError: false,
      offset: this.direction === 'up' ? -1080 : 1080, // initially place off screen (either offscreen above or below)
      wait: 0,
    }
  },
  methods: {
    toggleShowError(error) {
      this.showError = !this.showError
    },
    animate() {
      this.$setTimeout(() => {
        this.wait = this.delay
        this.duration = 5000
        this.offset = 0 // remove the offset that placed items off screen
      }, 1000) // after 1 second
    },
    animateAway() {
      this.$setTimeout(() => {
        this.wait = this.delay
        this.duration = 5000
        this.offset = this.direction === 'up' ? 1080 : -1080 // offset tile to move it off screen
      }, 1000) // after 1 second
    },
  },

  watch: {
    src(newSrc) {
      console.log('New source', newSrc)
      this.animateAway()
    },
  },
})
