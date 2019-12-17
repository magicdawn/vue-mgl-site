import {createRequire} from 'module'
import {fileURLToPath as fromURL} from 'url'
const require = createRequire(fromURL(import.meta.url))

const webpack = require('webpack')
const through2 = require('through2')
const path = require('path')
const gulp = require('gulp')
const readline = require('readline')
const fse = require('fs-extra')

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

import obj from '../site/demo.mjs'
const {paramCase} = require('change-case')
const componentNames = Object.keys(obj).map(paramCase)

const docsArr = ['introduce', 'getting-started', 'changelog', 'faq']

function copyHtml() {
  // 404
  fse.writeFileSync(
    path.join(cwd, '_site/404.html'),
    fse.readFileSync(path.join(cwd, 'site/404.html'))
  )

  fse.writeFileSync(
    path.join(cwd, '_site/index-cn.html'),
    fse.readFileSync(path.join(cwd, '_site/index.html'))
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

  const contentIndexHtml = fse.readFileSync(path.join(cwd, '_site/index.html'))
  for (let dir of routeDirs) {
    fse.outputFileSync(path.join(cwd, '_site', dir, 'index.html'), contentIndexHtml)
  }
}

const argv = require('yargs').options({
  gitee: {
    type: 'boolean',
    default: false,
  },
}).argv
const uuidv4 = require('uuid/v4')

const {cd, set, exec, tempdir, ls} = require('shelljs')

async function toGitee() {
  set('-x')
  set('-e')

  // temp
  const dir = tempdir() + '/' + uuidv4()
  console.log('using tempdir = %s', dir)

  // copy _site to tmp dir
  fse.copySync(process.cwd() + '/_site', dir)
  console.log('_site copy done')

  // git
  cd(dir)
  exec('git init', {fatal: true})
  exec('git add --all', {fatal: true})
  exec(`git commit -am 'update at ${new Date().toLocaleString()}'`, {fatal: true})
  exec('git remote add gitee git@gitee.com:magicdawn/vue-mgl-site.git', {fatal: true})
  exec('git push gitee master:gitee-pages -f', {fatal: true})

  // clean up
  fse.removeSync(dir)
}

async function main() {
  await new Promise(r => {
    dist(r)
  })

  copyHtml()

  // to gitee
  if (argv.gitee) {
    toGitee()
  }
}

main()
