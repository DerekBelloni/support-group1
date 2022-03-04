import { AuthController } from './Controllers/AuthController.js'
import { ProfilesController } from './Controllers/ProfilesController.js';

class App {
  authController = new AuthController();
  profilesController = new ProfilesController()
}

// @ts-ignore
window.app = new App()
