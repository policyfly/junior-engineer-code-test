FROM python:3.9-alpine
RUN apk --no-cache --update upgrade

RUN apk --no-cache --update add \
  postgresql-client \
  curl \
  gcc \
  libffi \
  libffi-dev \
  libwebp \
  libpq-dev \
  musl-dev \
  python3-dev \
  openssl \
  make \
  git \
  zeromq

RUN adduser -D web
USER web
ENV PATH=${PATH}:/home/web/.local/bin


ADD requirements.txt /tmp/requirements.txt
RUN pip3 install --upgrade pip
RUN pip3 install --user -r /tmp/requirements.txt

USER root

ADD . /opt/web
WORKDIR /opt
RUN /usr/bin/find . -type d -exec chown web {} \;
WORKDIR /opt/web

USER web
RUN python3 -m compileall -f -q .