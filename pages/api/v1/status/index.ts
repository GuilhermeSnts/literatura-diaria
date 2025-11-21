import { NextApiRequest, NextApiResponse } from "next";
import { query } from "infra/database";
import { Database } from "lucide-react";
async function status(request: NextApiRequest, response: NextApiResponse) {
  const dbName = process.env.POSTGRES_DB;
  const maxDatabaseOpenedConnectionsQuery = await query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [dbName],
  });
  const databaseOpenedConnectionsResult = maxDatabaseOpenedConnectionsQuery.rows[0].count;

  const databaseMaxConnectionsResult = await query(`SHOW max_connections;`);
  const maxConnectionsResult = parseInt(databaseMaxConnectionsResult.rows[0].max_connections);

  response.status(200).json({
    updated_at: new Date().toISOString(),
    max_connections: maxConnectionsResult,
    opened_connections: databaseOpenedConnectionsResult,
  });
}

export default status;
