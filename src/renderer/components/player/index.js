import React from 'react'
import Player from './view'
import { connect } from 'unistore/react'

export default connect(state => state)(Player)
