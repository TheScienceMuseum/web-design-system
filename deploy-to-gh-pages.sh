#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run dist

# add readme
cp gh-pages.md build/readme.md

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:TheScienceMuseum/design-system.git master:gh-pages

cd -