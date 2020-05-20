const request = require("supertest");
const express = require("express");
const app = express();

app.get("https://jsonplaceholder.typicode.com/posts/1/comments", function (
  req,
  res
) {
  res.status(200).json({ name: "john" });
});

describe(" GET/ JSONPlaceholder test https://jsonplaceholder.typicode.com", () => {
  it("GET /posts/1/comments", (done) => {
    request("https://jsonplaceholder.typicode.com/")
      .get("posts/1/comments")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("GET /albums/1/photos", (done) => {
    request("https://jsonplaceholder.typicode.com/")
      .get("albums/1/photos")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("GET /users/1/albums ", (done) => {
    request("https://jsonplaceholder.typicode.com/")
      .get("users/1/albums")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("GET /users/1/todos ", (done) => {
    request("https://jsonplaceholder.typicode.com/")
      .get("users/1/todos")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("GET /users/1/posts   ", (done) => {
    request("https://jsonplaceholder.typicode.com/")
      .get("users/1/posts")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe(" POST/ JSONPlaceholder test https://jsonplaceholder.typicode.com", () => {
  it("Post /posts/1/comments", (done) => {
    request("https://jsonplaceholder.typicode.com/")
      .get("posts")
      .set("Accept", "application/json")
      .send({
        title: "cool title",
        body: "rockin bod",
        userId: 1,
      })
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
