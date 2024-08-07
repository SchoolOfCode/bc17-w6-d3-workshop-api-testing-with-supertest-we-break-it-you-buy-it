import { test, expect } from "vitest";
import request from "supertest";
import app from "../app.js";

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
  expect(response.headers["content-type"]).toMatch('application/json');
});
