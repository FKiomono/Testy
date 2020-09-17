const {connection} = require('../config/config');


class Schema {
  constructor() {
    this.connection = connection;
    this.table = 'users';
    this.connection.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async select(columns, clause) {
    let query = `SELECT ${columns} FROM ${this.table}`;
    if (clause) query += clause;
    return this.pool.query(query);
  }
}

module.exports = Schema;
//Export model
//module.exports = schema.model('Profile', ProfilSchema);