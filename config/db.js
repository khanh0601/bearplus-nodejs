const { Pool } = require('pg');

// PostgreSQL connection string from Neon
const connectionString = 'postgresql://neondb_owner:5Tpj0FIDQULx@ep-snowy-dream-a5vq38u5.us-east-2.aws.neon.tech/neondb?sslmode=require';

// Create a new Pool instance with the connection string
const pool = new Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false, // Disable SSL certificate verification
    }
});

// Connect to the PostgreSQL database
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to PostgreSQL');
    release(); // Release the client back to the pool
});

module.exports = pool;
