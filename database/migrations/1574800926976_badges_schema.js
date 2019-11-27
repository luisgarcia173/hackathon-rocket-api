'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BadgesSchema extends Schema {
  up () {
    this.create('badges', (table) => {
      table.increments()
      table.string('description').notNullable()
      table.specificType('photo', 'blob')
      table.timestamps()
    })
    this.create('opportunities_badges', function(table) {
      table.integer('badge_id').unsigned().references('id').inTable('badges')
      table.integer('opportunity_id').unsigned().references('id').inTable('opportunities')
      table.timestamps()
    })
    this.create('user_badges', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('badge_id').unsigned().references('id').inTable('badges')
      table.timestamps()
    })
  }

  down () {
    // this.drop('badges')
    // this.drop('companies_badges')
    // this.drop('user_badges')
  }
}

module.exports = BadgesSchema
