import { getConnection } from '../database';

export default defineEventHandler(async (event) => {
  let connection;

  try {
    // Get the database connection from the external file
    connection = await getConnection();

    // Get the project_id from the query params
    const { project_id } = getQuery(event);

    // Query to fetch images for the specific project_id
    const [rows] = await connection.execute(
      'SELECT id, src FROM images WHERE projects_id = ?',
      [project_id]
    );

    // Return the result as JSON
    return rows;
  } catch (error) {
    // Return error response in case of failure
    return { error: 'Database query error: ' + error.message };
  } finally {
    // Close the connection if it's defined
    if (connection) {
      await connection.end();
    }
  }
});
