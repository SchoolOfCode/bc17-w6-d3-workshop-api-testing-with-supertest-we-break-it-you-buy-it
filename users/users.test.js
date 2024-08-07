import { test, expect } from "vitest";
import request from "supertest";
import app from "../app.js";
import { resetUsersTable } from "../db/helpers.js";
import { seedData } from "../db/seed-data.js";

// Test API health
test("GET /api/health works", async () => {
  const response = await request(app).get("/api/health");
  const resBody = {
    success: true,
    payload: "API is running correctly",
  };
  const statusCode = 200;
  // check response body
  expect(response.body).toEqual(resBody);
  // check status code
  expect(response.status).toEqual(statusCode);
  // check response headers
  expect(response.headers["content-type"]).toMatch("application/json");
});

// Ticket 6
// write a test skeleton with a descriptive test name ("GET /api/users" could be a starting point)
test("GET /api/users works", async () => {
  // ARRANGE
  await resetUsersTable(seedData);
  
  // ACT
  const response = await request(app).get("/api/users/");

  const resBody = response.body
  const resBodySuccess = response.body.success
  const statusCode = 200;
  // check response body
  // expect(response.body).toEqual(resBody);
  // check status code
  expect(resBody).toBeTypeOf("object");
  expect(response.status).toEqual(statusCode);
  expect(resBody.payload).toBeTypeOf("object");
  expect(resBodySuccess).toBe(true);
  // check response headers
  expect(response.headers["content-type"]).toMatch("application/json");
});
// run tests to make sure the skeleton passes on its own
// then within the test:
//    ARRANGE:
//      use the `resetUsersTable` function to reset the database table to a known state
//    ACT:
//      use Supertest to send a GET request to the `/api/users` endpoint
//      wait for the response
//    ASSERT:
//      assert that the response body is an object
//      assert that response body.success is true
//      assert that response body.payload is an array
//      loop over the payload array. for each user object in the payload array:
//          assert that user object.id is a number
//          assert that user object.username is a string
//      assert that the response status code is 200
//      assert that there's a Content-Type response header which contains `application/json`
//      any other assertions that you think would be useful
// run tests to ensure they passes
// temporarily break the implementation in `users/users.controller.js` to ensure test fails and then change back so that tests pass
