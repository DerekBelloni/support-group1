import { AuthController } from './Controllers/AuthController.js'
import { PostsController } from './Controllers/PostsController.js';
import { ProfilesController } from './Controllers/ProfilesController.js';

class App {
  authController = new AuthController();
  profilesController = new ProfilesController();
  postsController = new PostsController();
}

// @ts-ignore
window.app = new App()
