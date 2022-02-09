# PolicyFly: Junior Code Test

## Explanation

This repo is a simple code test for a Junior Software Engineer. In it you will
find a working Django repository for a simple blog site, instructions for
running the site, and instructions for the code test. Please follow all
instructions closely and use this repo as a base starting point. Your
final submission should be it's own publicly available repo hosted on
GitHub or somewhere similar.

## Objective

The purpose of this code test is to determine the applicant's skill in using
Docker, debugging Django, and solving simple JavaScript issues. Please be
sure to complete both parts of the test, the Django and the JavaScript portions.

### Django

Within the repo you will find a simple blog app under `./blog/` that has all the
code needed to make a simple post and view said post. You are to accomplish
two tasks here:

1. There is a bug in the posting logic around how dates are handled. Find and
   solve it.
2. Extend the site so that each post has a "hits" or "viewed" counter on it
   that displays how many times said post has been viewed at the bottom of the
   post.

### JavaScript

Within the repo you will find a single js file named `app.js` under `src/`.
Inside it are some code snippets and some comments prompting you to fill
them out. Follow the instructions in the file, fill out the snippets and
commit them to the repo.

## Setup

Install the latest version of Docker, which should come with Docker Compose.

Run the application with:

```
docker compose up
```

Collect static files:

```
docker compose exec web python manage.py collectstatic
```

Create a super user on the site with:

```
docker compose exec web python manage.py createsuperuser 
```

Visit the site at: `http://localhost:5088/admin` and login with your admin
to begin making posts.

You can view posts at: `http://localhost:5088/blog/` for a list or visit individual
posts at `http://localhost:5088/blog/<post_id>`.

## Run the Test Suite

The test suite is built using pytest and can be executed simply through docker
compose with:

```
docker compose exec web pytest
```