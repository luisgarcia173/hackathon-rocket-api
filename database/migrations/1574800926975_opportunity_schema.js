'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OpportunitySchema extends Schema {
  up () {
    this.create('opportunities', (table) => {
      table.increments()
      table.string('description', 200).notNullable()
      table.string('title', 60).notNullable()
      table.decimal('salary', 10, 2).notNullable()
      table.string('status', 20).notNullable()
      table
        .integer('company_id')
        .unsigned()
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
    this.create('opportunities_users', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('opportunity_id').unsigned().references('id').inTable('opportunities')
      table.timestamps()
    })
  }

  down () {
    // this.drop('opportunities')
    // this.drop('opportunities_users')
  }
}

module.exports = OpportunitySchema
