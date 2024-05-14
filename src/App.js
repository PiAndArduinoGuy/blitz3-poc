import Blits from '@lightningjs/blits'

import Home from './pages/Home.js'
import Colage from './pages/Colage.js'
import SlideShow from './pages/SlideShow.js'

export default Blits.Application({
  template: `
    <Element>
    	<RouterView />
      <!-- Add settings here -->
    </Element>
  `,
  routes: [
    { path: '/', component: Home },
    { path: '/colage', component: Colage }, // this route cannot be triggered I dont know why
    { path: '/slide-show', component: SlideShow },
  ],
})
