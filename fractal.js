'use strict';

/* Fractalのインスタンスの作成とエクスポート */
const fractal = module.exports = require('@frctl/fractal').create();

/* プロジェクト・タイトルの設定 */
fractal.set('project.title', 'デザインガイド');

/* componentsディレクトリの指定 */
fractal.components.set('path', __dirname + '/src/components');

/* documentationディレクトリの指定 */
fractal.docs.set('path', __dirname + '/src/docs');

// browsersync設定
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', { open: true});

/* 静的ファイルの書き出し場所 */
fractal.web.set('builder.dest', __dirname + '/dist');
