'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const UserBadge = use("App/Models/UserBadge");
const Database = use("Database");

/**
 * Resourceful controller for interacting with userbadges
 */
class UserBadgeController {
  /**
   * Show a list of all userbadges.
   * GET userbadges
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new userbadge.
   * GET userbadges/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new userbadge.
   * POST userbadges
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const  user_badge  = request.body;
    return await UserBadge.create(user_badge);
  }

  /**
   * Display a single userbadge.
   * GET userbadges/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const userBadges = await Database.from('user_badges').where('user_id', params.id);
    const badgesList = [];
    userBadges.forEach(badge => {
      badgesList.push(badge.badge_id);
    });
    const badges = Database.from('badges').whereIn('id', badgesList);
    return badges;
  }

  /**
   * Render a form to update an existing userbadge.
   * GET userbadges/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update userbadge details.
   * PUT or PATCH userbadges/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a userbadge with id.
   * DELETE userbadges/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserBadgeController
