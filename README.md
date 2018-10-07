### Goal

Given the following image, use React to build the view components and redux to store the data to render. 

![challenge](https://user-images.githubusercontent.com/1656770/46516865-f6355880-c820-11e8-83fd-0b562c6f0515.png)

We do not expect you to build the entire thing - build as much of the application as you can in the time you can devote. We are interested in evaluating you on the following:

- Clean coding style and quality of testing.
- Your understanding of the React/Redux ecosystem.
- Testing - make sure you have unit tests for your code.

## Challenge

1. Create a navigation bar with a logo, links, and a login image.
1. Create a sidebar which contains links that change the view of the center component.
1. When the sidebar link "Keys" is selected, the center component should show a table and a description box above it.
1. The table should allow you to create a new row and input a "name" and "key"

**Bonus Points**
- Using Styled-Components for styling the app
- Animation during the table interactions (entering or deleting a new row)
- Unit testing using Jest

### How to get going

1.  Clone this repository `git clone git@github.com:electricaio/web-react-test.git`
1.  Run: `nvm install | nvm use`
1.  Run: `npm i` to install the dependencies
1.  Run: `npm run start` to run start the application
1.  The browser should automatically open at `http://localhost:3000`