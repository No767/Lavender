FROM nginx:1.21.3
WORKDIR /Lessons
COPY Lessons/Lesson-2/index.html /data/www;
COPY nginx.conf /etc/nginx/nginx.conf
ENV PORT=8080
EXPOSE 8080