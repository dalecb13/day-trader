#!/usr/bin/env node

import 'dotenv/config'
console.log('running auto trader')

import axios from 'axios'
import { loadYml } from 'load-yml'

const BASE_URL = process.env.BASE_URL
const AUTH_TOKEN = process.env.AUTH_TOKEN

loadYml('config.yml').then(path => {
  console.log('result is: ', path) // { "name": "saqqdy" }
})

const axiosConfig = {
  headers: {
    'Authorization': 'Bearer ' + AUTH_TOKEN,
    'Accept': 'application/json',
  },
  params: {
    normalized: true,
    representative: 'Nancy Pelosi',
    page: 1,
    page_size: 10
  }
}

axios({
  method: 'get',
  url: BASE_URL + '/beta/bulk/congresstrading',
  headers: {
    'Authorization': 'Bearer ' + QUIVERQUANT_AUTH_TOKEN
  },
  params: {
    normalized: true,
    representative: 'Mitch McConnell',
    page: 1,
    page_size: 10
  }
})
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.warn('error: ', error)
  })

  // axios({
  //   method: 'get',
  //   url: 'http://www.investopedia.com/simulator/portfolio/'
  // })

  // axios({
  //   method: 'get',
  //   url: BASE_URL + '/beta/live/govcontracts',
  //   headers: {
  //     'Authorization': 'Bearer ' + AUTH_TOKEN
  //   }
  // })
  // .then(response => {
  //   console.log(response.data)
  // })
  // .catch(error => {
  //   console.warn('error: ', error)
  // })