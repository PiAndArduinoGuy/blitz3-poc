import Blits from '@lightningjs/blits'

export default Blits.Component('ImageTile', {
  template: `
    <Element w="384" h="216">
    	<Element w="300" h="200" src="$src"/>
    </Element>
  `,
  props: ['src'],
  hooks: {
    init() {
      console.log(this.src)
    },
  },
})
