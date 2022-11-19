import { application } from "./application"

import IntroController from "./intro_controller.js"
application.register("intro", IntroController)

import ClientsController from "./clients_controller.js"
application.register("clients", ClientsController)

import AboutController from "./about_controller.js"
application.register("about", AboutController)