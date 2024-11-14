import { defineMiddleware } from 'astro/middleware';
import { FOO } from 'astro:env/server';

export const onRequest = defineMiddleware((ctx, next) => {
  console.log(ctx.url.pathname);
  console.log({ FOO });
  return next();
});
