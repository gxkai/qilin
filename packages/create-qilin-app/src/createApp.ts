import { copyFileSync, readFileSync, statSync, writeFileSync } from 'fs'
import Mustache from 'mustache'
import mkdirp from 'mkdirp'
import glob from 'glob'
import { chalk } from '@qilin/utils'
import { dirname, relative, join } from 'path'

export default class createQilinApp {
  args: any[]
  cwd: string
  pkg: any
  constructor({ args, cwd, pkg }) {
    this.args = args
    this.cwd = cwd
    this.pkg = pkg
  }
  // copy 模板
  copyTpl(opts: { templatePath: string; target: string }) {
    const tpl = readFileSync(opts.templatePath, 'utf-8')
    const context = {
      version: this.pkg.version
    }
    const content = Mustache.render(tpl, context)
    mkdirp.sync(dirname(opts.target))
    console.log(`${chalk.green('Write:')} ${relative(this.cwd, opts.target)}`)
    writeFileSync(opts.target, content, 'utf-8')
  }

  copyDirectory() {
    const tplPath = join(__dirname, '../templates')
    const target = this.cwd
    const files = glob.sync('**/*', {
      cwd: tplPath,
      dot: true,
      ignore: ['**/node_modules/**']
    })
    files.forEach(file => {
      const absFile = join(tplPath, file)
      if (statSync(absFile).isDirectory()) return
      if (file.endsWith('.tpl')) {
        this.copyTpl({
          templatePath: absFile,
          target: join(target, file.replace(/\.tpl$/, ''))
        })
      } else {
        console.log(`${chalk.green('Copy: ')} ${file}`)
        const absTarget = join(target, file)
        mkdirp.sync(dirname(absTarget))
        copyFileSync(absFile, absTarget)
      }
    })
  }
  async run() {
    // 写入模板
    this.copyDirectory()
    // 安装
  }
}
