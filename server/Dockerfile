FROM python:3.11.1-slim-bullseye

WORKDIR /app

COPY requirements.txt /app
RUN pip install -r requirements.txt

COPY . /app

ENTRYPOINT ["python"]
CMD ["goserver.py"]