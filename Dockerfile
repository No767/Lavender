FROM nginx:1.21.3
WORKDIR /src
COPY src ./src /usr/share/nginx/html/
COPY ./src/recipe/recipe.html ./src/recipe/ /usr/share/nginx/html/projects/recipe/
ENV PORT=8080
EXPOSE 8080