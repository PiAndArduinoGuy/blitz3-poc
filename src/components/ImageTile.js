import Blits from '@lightningjs/blits'

export default Blits.Component('ImageTile', {
  template: `
    <Element :w="$w" :h="$h">
    	<Element :w="$w - $padding" :h="$h - $padding" src="$src"/>
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
})
