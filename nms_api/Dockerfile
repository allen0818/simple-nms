FROM python:3.7.6

LABEL maintainer allen0818
ENV PYTHONUNBUFFERED 1

RUN mkdir /nms_api
WORKDIR /nms_api
COPY . /nms_api/


RUN pip install -r requirements.txt