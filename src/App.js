import Blits from '@lightningjs/blits'

import Home from './pages/Home.js'
import Colage from './pages/Colage.js'

export default Blits.Application({
  template: `
    <Element>
    	<RouterView />
    </Element>
  `,
  routes: [
    { path: '/', component: Colage },
    // { path: 'colage', component: Colage }, this route cannot be triggered I dont know why
  ],
})
