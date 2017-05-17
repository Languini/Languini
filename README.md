[![Build Status](https://travis-ci.org/Languini/Languini.svg?branch=master)](https://travis-ci.org/Languini/Languini)
[![Coverage Status](https://coveralls.io/repos/github/Languini/Languini/badge.svg?branch=master)](https://coveralls.io/github/Languini/Languini?branch=master)
# Languini

## Contributing

0. Pull changes from the dev branch into your current branch: `git pull origin dev`

1. Make sure you're credentials are present in `app/server/knex/knexfile.js` and `app/server/configconfig.json`

2. Run `yarn`

3. (optional) Create branch: `git branch *branch_name*`

4. (optional) Checkout branch: `git checkout *branch*`

5. Make changes...

6. Run `standard --fix` to lint your changes

7. Run `yarn build` if you made any changes to the `app/src` folder

8. Commit changes to your branch:
```
git add
git commit -m 'Insert ascii art here'
```
9. Push changes to your branch: `git push origin *branch_name*`

10. Submit a pull request:

_You should see a new button with the label “Compare & Pull Request”). Click on it. This will take the information from the Branch and will request a “Pull Request”_

11. Mark the issue your request resolves (https://help.github.com/articles/closing-issues-via-commit-messages/)

12. Give it a label, assign your teammates to your pull request and wait for teammates to review.

13. Once your branch is merged, delete it: `git branch -d *branch_name*`

## Local Development

0. In `app/server/knex`, run `knex seed:run` to seed your database

1. Run `DEBUG=express:* <insert_npm_script_key_here>` to run app in debug mode

## Testing

0. Run `yarn test` to run tests

1. Run `yarn cover` to view coverage
