import axios from "axios";

describe("GET /api/v1/status", () => {
  it("should return 200 and the correct returns", async () => {
    const response = await axios.get("http://localhost:3000/api/v1/status");
    const responseBody = response.data;

    const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
    expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

    expect(responseBody.max_connections).toBe(100);
    expect(responseBody.opened_connections).toBe(1);
  });
});
