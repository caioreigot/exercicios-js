/* Middleware Pattern (chain of responsability) */

const passo1 = (ctx, next) => {
  ctx.valor1 = 'Passou pelo passo 1!';
  next();
}

const passo2 = (ctx, next) => {
  ctx.value2 = 'Passou pelo passo 2!';
  next();
}

const passo3 = ctx => ctx.valor3 = 'Passou pelo passo 3!';

const exec = (ctx, ...middlewares) => {
  const execPasso = indice => {
    middlewares && indice < middlewares.length
      && middlewares[indice](ctx, () => execPasso(indice + 1));
  }

  execPasso(0);
}

const ctx = {};
exec(ctx, passo1, passo2, passo3);

console.log(ctx);