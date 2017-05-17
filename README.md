[![Build Status](https://travis-ci.org/Languini/Languini.svg?branch=master)](https://travis-ci.org/Languini/Languini)
[![Coverage Status](https://coveralls.io/repos/github/Languini/Languini/badge.svg?branch=master)](https://coveralls.io/github/Languini/Languini?branch=master)
# Languini

## Contributing

0. Pull changes from Master: `git pull origin master`

1. Create branch: `git branch *branch_name*`

2. Checkout branch: `git checkout *branch*`

3. Make changes...

4. Run `standard --fix` to lint your changes

5. Run `yarn build` if you made any changes to the `app/src` folder

6. Commit changes to your branch:
```
git add
git commit -m 'Insert ascii art here'
```
7. Push changes to your branch: `git push origin *branch_name*`

8. Submit a pull request:

_You should see a new button with the label “Compare & Pull Request”). Click on it. This will take the information from the Branch and will request a “Pull Request”_

7. Mark the issue your request resolves (https://help.github.com/articles/closing-issues-via-commit-messages/)

8. Give it a label, assign your teammates to your pull request and wait for teammates to review.

9. Once your branch is merged, delete it: `git branch -d *branch_name*`

## Local Development

1. In `app/server/knex`, run `knex seed:run` to seed your database

2. Run `DEBUG=express:* <insert_npm_script_key_here>` to run app in debug mode
