FROM python:3.7.6

LABEL maintainer allen0818
ENV PYTHONUNBUFFERED 1

RUN mkdir /blog_api
WORKDIR /blog_api
COPY . /blog_api/


RUN pip install -r requirements.txt