import type { Context, Next } from 'koa';
import { getPageHTML } from '../util/file';
import { getPageSSRData } from '@glow/work-front/dist/ssr/index.js';
import { createSSRApp } from 'vue';
import type { Component } from 'vue';
import { renderToString } from 'vue/server-renderer';

export const renderPage = async (ctx: Context, next: Next) => {
  ctx.body = getPageHTML(ctx.params.pageName);
  await next();
};

export const ssrRenderPage = async (ctx: Context, next: Next) => {
  const ssrPageData = await getPageSSRData(ctx.params.pageName);
  let ssrHtml = '';
  let ssrCss = '';
  if (ssrPageData?.Page) {
    const app = createSSRApp(ssrPageData?.Page as Component);
    ssrHtml = await renderToString(app);
    ssrCss = ssrPageData?.css || '';
  }
  const html = getPageHTML(ctx.params.pageName, { ssrHtml, ssrCss });
  ctx.body = html;
  await next();
};
