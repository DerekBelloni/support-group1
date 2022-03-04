import { AuthController } from './Controllers/AuthController.js'
import { ProfilesController } from './Controllers/ProfilesController.js';
import { ValuesController } from './Controllers/ValuesController.js'

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  profilesController = new ProfilesController()
}

// @ts-ignore
window.app = new App()
