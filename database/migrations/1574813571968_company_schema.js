'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.increments()
      table.string('username', 40).notNullable().unique()
      table.string('password', 20).notNullable()
      table.string('email', 30).notNullable().unique()
      table.spe('photo', 60).notNullable()
      table.string('name', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
