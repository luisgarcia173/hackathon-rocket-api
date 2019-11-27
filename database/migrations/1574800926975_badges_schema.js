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
  }

  down () {
    this.drop('badges')
  }
}

module.exports = BadgesSchema
