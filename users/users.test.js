import { test, expect } from "vitest"
import request from "supertest"
import app from "../app.js"

// test("GET /api/health works")

request(app)
    .get('/api/health')
    .expect(200)
    .end(function(err, res) {
    if (err) throw err;
    });