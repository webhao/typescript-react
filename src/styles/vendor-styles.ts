/**
 * 在 css 中引入 vendor style 会被 css-modules hash 类名。
 * 而在 ts 中引入可以匹配特定的 lib loader。
 * 而且由于 sass 不推荐在 sass 文件中引入 css
 * 具体可以查看这个 issue https://github.com/sass/node-sass/issues/2362
 */
