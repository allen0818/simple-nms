FROM python:3.7.6

LABEL maintainer allen0818
ENV PYTHONUNBUFFERED 1

## Use volume instead
# RUN mkdir /nms_api
# WORKDIR /nms_api
# COPY . /nms_api/

WORKDIR /api
COPY requirements.txt .

RUN pip install -r requirements.txt