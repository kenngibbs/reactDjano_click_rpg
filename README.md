# reactDjango_Project

This is an proof of concept to create something other than a website in a React/Django environment. It is <strong>NOT</strong> using encrypted authentication between the applications.

### Using the admin page
- Home: Nothing yet. I'm going to allow the admin to edit the users and possibly easily add additional health to them once they're below zero.

- List Monsters: List all of the currently created monsters or create a new monster.

- List Items:  List all of the currently created items or create a new item.

- Log Out: You will log out the current user.

### Using a user generated hero
Create a user to get a "hero" with a randomly generated health and attack.

- Fight: There is a list of monsters. When you attack both the player and monster receives damage equal to their attack number. Once a monster is below zero they disappear.

- Edit User: Edit the logged in user's information.

- Shop: Select a weapon to increase the attack power of the hero. That weapon will be equipped and can be seen on the Fighter Profile page.

- Log Out: You will log out the current user.

### How to run
To run the Django server use the terminal/console to navigate to the server directory and run ```python manage.py runserver```.
Note If the server is not run on the 8000 port, you'll have to change all the proxy's in the React client's package.json file.

To run the React client use the terminal/console to navigate to the client directory. If you have npm installed, run ```npm install``` in the directories. Once complete, run the ```npm start``` command to start the client server.