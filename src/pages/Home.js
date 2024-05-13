import Blits from '@lightningjs/blits'

import Loader from '../components/Loader.js'
import Button from '../components/Button.js'

export default Blits.Component('Home', {
  components: {
    Loader,
    Button,
  },
  template: `
    <Element w="1920" h="1080" color="{top: '#3295a8', bottom: '#85bec9'}">
		<Text content="Welcome to the wallpaper app" font="Careny" size="40" x="960" y="540" mount="0.5"/>
		<Text content="The app that displays your beloved photos in your style of colage ! Select your style of colage to get started" font="Careny" size="30" x="960" y="580" mount="0.5:"/>
		<Element w="400" h="100" x="960" y="650" mount="0.5">
			<Button w="200" h="50" displayText="Tiles" ref="0" />
			<Button w="200" h="50" displayText="Slideshow" ref="1" x="210" />
		</Element>
		
    </Element>
  `,
  state() {
    return {
      buttonIndex: 0,
    }
  },
  hooks: {
    ready() {
      this.buttonIndex = 0
    },
  },
  input: {
    right() {
      this.buttonIndex = 1
    },
    left() {
      this.buttonIndex = 0
    },
    enter() {
      switch (this.buttonIndex) {
        case 0:
          this.$router.to('/Colage')
          break
        case 1:
          this.$router.to('/slide-show')
          break
      }
    },
  },
  watch: {
    buttonIndex(value) {
      console.log(value)
      const focused = this.select(value)
      if (focused && focused.focus) focused.focus()
    },
  },
})
