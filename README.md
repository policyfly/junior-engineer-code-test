# PolicyFly: Junior Code Test

## Explanation

This repo is a simple code test for a Junior Software Engineer. In it you will
find a working Django repository for a simple blog site.

## Objective

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


TODO:

1. Wire up a view to show the display of a single blog, with a simple template.
2. Wire in tests to show the bug for the post.
3. Figure out a JS test.
4. Modernize the README and make sure it's fully accurate, add the objectives of the test to implement the counter.