'use strict'
const webpack = require('webpack')
const through2 = require('through2')
const path = require('path')
const gulp = require('gulp')
const readline = require('readline')
const fs = require('fs')

const rimraf = require('rimraf')
const mkdirp = require('mkdirp')

const cwd = process.cwd()

function dist(done) {
  rimraf.sync(path.join(cwd, '_site'))
  process.env.RUN_ENV = 'PRODUCTION'
  const webpackConfig = require(path.join(cwd, 'webpack.site.config.js'))
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error(err.stack || err)
      if (err.details) {
        console.error(err.details)
      }
      return
    }

    const info = stats.toJson()

    if (stats.hasErrors()) {
      console.error(info.errors)
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings)
    }

    const buildInfo = stats.toString({
      colors: true,
      children: true,
      chunks: false,
      modules: false,
      chunkModules: false,
      hash: false,
      version: false,
    })
    console.log(buildInfo)
    done(0)
  })
}

import obj from '../site/demo.demo.mjs'
const {paramCase} = require('change-case')
const componentNames = Object.keys(obj).map(paramCase)

const docsArr = ['introduce', 'getting-started', 'changelog', 'faq']

function copyHtml() {
  // 404
  fs.writeFileSync(
    path.join(cwd, '_site/404.html'),
    fs.readFileSync(path.join(cwd, 'site/404.html'))
  )

  fs.writeFileSync(
    path.join(cwd, '_site/index-cn.html'),
    fs.readFileSync(path.join(cwd, '_site/index.html'))
  )

  const routeDirs = [
    // components
    'components',
    ...componentNames.map(name => `components/${name}`),

    // docs
    'docs',
    ...docsArr.map(name => `docs/${name}`),
    ...docsArr.map(name => `docs/${name}-cn`),
  ]

  const contentIndexHtml = fs.readFileSync(path.join(cwd, '_site/index.html'))
  for (let dir of routeDirs) {
    fs.writeFileSync(path.join(cwd, '_site', dir, 'index.html'), contentIndexHtml)
  }
}

gulp.task(
  '_site',
  gulp.series(done => {
    dist(() => {
      copyHtml()
      done()
    })
  })
)
gulp.task(
  'copy-html',
  gulp.series(() => {
    copyHtml()
  })
)
