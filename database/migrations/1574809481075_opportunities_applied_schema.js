'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OpportunitiesAppliedSchema extends Schema {
  up () {
    this.create('opportunities_applieds', (table) => {
      table.integer('id_user').unsigned().references('id').inTable('users')
      table.integer('id_opportunity').unsigned().references('id').inTable('badges')
      table.timestamps()
    })
  }

  down () {
    this.drop('opportunities_applieds')
  }
}

module.exports = OpportunitiesAppliedSchema
