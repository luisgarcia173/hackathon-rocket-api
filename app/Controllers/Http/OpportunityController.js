'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Opportunity = use('App/Models/Opportunity')

/**
 * Resourceful controller for interacting with opportunities
 */
class OpportunityController {
  /**
   * Show a list of all opportunities.
   * GET opportunities
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Opportunity.all()
  }

  /**
   * Create/save a new opportunity.
   * POST opportunities
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const data = request.only([
      'description',
      'title',
      'salary',
      'status',
      'company_id'
    ])

    return await Opportunity.create(data)
  }

  /**
   * Display a single opportunity.
   * GET opportunities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    const opportunity = await Opportunity.findOrFail(params.id)
    return opportunity
  }

  /**
   * Update opportunity details.
   * PUT or PATCH opportunities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const opportunity = await Opportunity.findOrFail(params.id)
    const data = request.only([
      'description',
      'title',
      'salary',
      'status',
      'company_id'
    ])

    opportunity.merge(data)
    await opportunity.save()
    return opportunity
  }

  /**
   * Delete a opportunity with id.
   * DELETE opportunities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const opportunity = await Opportunity.findOrFail(params.id)
    await opportunity.delete()
  }
}

module.exports = OpportunityController
