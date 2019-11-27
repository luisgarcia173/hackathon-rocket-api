'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 60).notNullable()
      table.string('email', 254).notNullable()
      table.string('password', 60).notNullable()
      table.string('name', 60).notNullable()
      table.date('birthdate').notNullable()
      table.specificType('photo', 'blob')
      table.timestamps()
    })
  }

  down () {
    // this.drop('users')
  }
}

module.exports = UsersSchema
