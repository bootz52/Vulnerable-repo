/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'
import { UserModel } from '../models/user'
import { challenges } from '../data/datacache'

import * as utils from '../lib/utils'
const challengeUtils = require('../lib/challengeUtils')

class ErrorWithParent extends Error {
  parent: Error | undefined
}

// vuln-code-snippet start unionSqlInjectionChallenge dbSchemaChallenge
module.exports = function searchProducts () {
  return (req: Request, res: Response, next: NextFunction) => {
    let criteria: any = req.query.q === 'undefined' ? '' : req.query.q ?? ''
    criteria = (criteria.length <= 200) ? criteria : criteria.substring(0, 200)
    res.json({ searchQuery: criteria })
  }
}
// vuln-code-snippet end unionSqlInjectionChallenge dbSchemaChallenge
