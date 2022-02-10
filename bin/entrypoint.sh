#!/bin/sh

BIND_PT="0.0.0.0:5000"
APP="web.wsgi:application"
TIMEOUT="60"

if python3 manage.py migrate; then
  if [ -n "$DJANGO_DEBUG" -a "$DJANGO_DEBUG" = '1' ]; then
    PYTHONUNBUFFERED=1 gunicorn -b $BIND_PT $APP --max-requests 2000 --max-requests-jitter 100 --graceful-timeout 10 --reload --timeout $TIMEOUT -k gevent --workers=1 --keep-alive 900 --log-level info --error-logfile - --capture-output
  else
    CPU_COUNT=4
    PYTHONUNBUFFERED=1 gunicorn  -b $BIND_PT $APP --max-requests 20000 --max-requests-jitter 1000 --timeout $TIMEOUT --graceful-timeout 30 --workers=$CPU_COUNT --worker-class gevent --keep-alive 900 --log-level info
  fi
fi
