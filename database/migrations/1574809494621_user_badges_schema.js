'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserBadgesSchema extends Schema {
  up () {
    this.create('user_badges', (table) => {
      table.integer('id_user').unsigned().references('id').inTable('users')
      table.integer('id_badge').unsigned().references('id').inTable('badges')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_badges')
  }
}

module.exports = UserBadgesSchema
