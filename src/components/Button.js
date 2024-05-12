import Blits from '@lightningjs/blits'

export default Blits.Component('Button', {
  template: `
    <Element w="$w" h="$h"  color="#3269a8" :effects="[$shader('radius', {radius: 10})]" :scale.transition="$scale">
        <Text x="50%" y="50%" mount="0.5" content="$displayText" />
    </Element>
    `,
  props: ['displayText', 'w', 'h'],
  state() {
    return {
      scale: 1,
    }
  },
  hooks: {
    focus() {
      this.scale = 1.1
    },
    unfocus() {
      this.scale = 1
    },
  },
})
