README

Express E-Commerce Team Project / Front-End

Links:

Front-End Deployed Site:  https://tbdwdi.github.io/Nozama-Front-End/
Front-End Repo:  https://github.com/Tbdwdi/Nozama-Front-End
Back-End Deployed Site:  https://still-thicket-16022.herokuapp.com/
Back-End Repo:  https://github.com/Tbdwdi/Nozama-Back-End

Technologies used: Javascript, Handlebars, Bootstrap, Sass, HTML5, AJAX, jQuery, webpack, Stripe

What is Nozama and how does it work?

Nozama is an E-Commerce site created by Derek McIntire, Peter Samson and Brian Cameron.  Together, using express/mongo as a back end api (and stripe as a third party api for checkout), we have created a simple shopping site.  The user may browse the site to view the products but must sign in to access the sites functionality.  From there a user may add products to their cart and proceed to a checkout where they may submit their order.  From their the user must fill out the appropriate fields for their order to be processed through stripe.  Once the order has been confirmed their cart is stored and is ready to be processed into our database.

Wireframes  : View 1 https://imgur.com/gallery/Q9k3o, View 2 https://imgur.com/gallery/626Bq, View 3 https://imgur.com/gallery/S2h8R
User Stories :  https://imgur.com/gallery/Gr7E7


developer:

As a developer, I want to protect my database by only allowing an admin to have full CRUD actions.
As a developer, I want to simplify my code to make it readable and modular.
As a developer, I want to focus on a user friendly layout with clear and simply functionality.
As a developer, I want to create a SPA.

Development Process :

  -  Draw up ERD, wireframes and user stories for planning.
  -  Carefully plan and scrum a unified team idea and approach our goals methodically.
  -  Create both repos with the right templates and deploy to proper sites.
  -  Deploy backend on heroku.
  -  Install dependencies and consider how to implement our third party api.
  -  We should complete a simple schema on the back end to open up avenues for our team to branch out when needed.
  -  Test routes using curl scripts and update our controller accordingly.
  -  When crud actions checkout and the relationships are confirmed as working correctly begin implementing the front end requests.
  -  Test CRUD actions again to make sure all nessesary changes have been made to the routes and controller and run curl scripts.
  -  Run nodemon localhost and make a simple note in html to ensure things are working.
  -  Begin with sign-in/up/out/change-password ajax requests. Begin with your forms and create a link to your index.js through event handlers within     your  events.
  -  Curl along the way to ensure each action works before moving on to the next feature.
  -  Once all auth specs check out move onto client requests, again, curl requesting each action to ensure the api is returning a response and adjust  accordingly. (console logs are your friend)
  -  Use handlebars to process json data into html.
  -  Once the proper features are working, begin integrating stripe into our front end to create a checkout for the user.
  -  With Stripe up and running, the team is now ready to complete our "orders" actions.
  -  Once features are all running adjust the ui's to clear form fields and clean up the page by utilizing css.
  -  Debug issues and clean up your code (make sure all consolelogs have been removed).


This team project was an integral part in our growth as developers.  Everyone communicated, came prepared and conducted themselves in a professional manner.  The planning process in a team versus a solo project varied greatly.  Having everyone on the same page and working towards a unified goal helped immensely.  Furthermore, having several different minds with their own skill sets made it much easier to make breakthroughs on complex problems.

Unsolved Problems :

There are several different ways we could integrate a delete/update action to our site however due to time constraints we chose to settle for admin privilages to allow for easy access to add/remove/update products.  Additionally, if we'd like to expand our site and really beef up our site with resources we believe their will be issues with our cart.  For the time being it made sense to store a users 'cart' data on the front end instead of creating another relationship on the back end however, upon site expansion, we may want to add that relationship to the back end and refactor our code.
