import { application } from "./application"

import IntroController from "./intro_controller.js"
application.register("intro", IntroController)

import ClientsController from "./clients_controller.js"
application.register("clients", ClientsController)

import AboutController from "./about_controller.js"
application.register("about", AboutController)

import VideoController from "./video_controller.js"
application.register("video", VideoController)

import TestimonialsController from "./testimonials_controller.js"
application.register("testimonials", TestimonialsController)

import ContactController from "./contact_controller.js"
application.register("contact", ContactController)