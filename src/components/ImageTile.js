import Blits from '@lightningjs/blits'

export default Blits.Component('ImageTile', {
  template: `
    <Element :w="$w" :h="$h">
    	<Element y="$padding" x="$padding"  :w="$w -  2* $padding" :h="$h - 2*$padding" :src="$src" @error="$toggleShowError" />
      <Element y="$padding" x="$padding"  :w="$w -  2* $padding" :h="$h - 2*$padding" src="images/icons/no-image.png" :show="$showError" />
    </Element>
  `,
  props: [
    'src',
    'w',
    'h',
    {
      key: 'padding',
      default: 50,
    },
  ],
  hooks: {
    init() {
      console.log(this.src)
    },
  },
  state() {
    return {
      showError: false,
    }
  },
  methods: {
    toggleShowError(error) {
      this.showError = !this.showError
    },
  },
})
