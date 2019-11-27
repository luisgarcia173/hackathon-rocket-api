'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const OpportunitiesUser = use("App/Models/OpportunitiesUser");
const Database = use("Database");

/**
 * Resourceful controller for interacting with opportunitiesusers
 */
class OpportunitiesUserController {
  /**
   * Show a list of all opportunitiesusers.
   * GET opportunitiesusers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new opportunitiesuser.
   * GET opportunitiesusers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new opportunitiesuser.
   * POST opportunitiesusers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const opportunities_user  = request.body;
    return await OpportunitiesUser.create(opportunities_user);
  }

  /**
   * Display a single opportunitiesuser.
   * GET opportunitiesusers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const opportunitiesUser = await Database.select('*')
    .from('opportunities_users')
    .rightJoin('opportunities', 'opportunities_users.opportunity_id', 'opportunities.id')
    //.where('opportunities_users.user_id', params.id);

    opportunitiesUser.forEach(op => !op.user_id ? op.status = 'N' : op.status = 'S');

    return opportunitiesUser;
  }

  /**
   * Render a form to update an existing opportunitiesuser.
   * GET opportunitiesusers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update opportunitiesuser details.
   * PUT or PATCH opportunitiesusers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a opportunitiesuser with id.
   * DELETE opportunitiesusers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = OpportunitiesUserController
