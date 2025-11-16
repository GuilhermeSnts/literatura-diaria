import { NextApiRequest, NextApiResponse } from "next";
import { query } from "infra/database";
async function status(request: NextApiRequest, response: NextApiResponse) {
  const result = await query("SELECT 1 + 1 as sum");
  response.status(200).json({ a: result.rows });
}

export default status;
