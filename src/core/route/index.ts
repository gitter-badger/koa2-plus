import Koa from 'koa';
import { sureIsArray } from '../tool';
import { symbolRoutePrefix, Route } from './route';

export function Prefix(prefix: string) {
  console.log('prefix');
  return (target: any) => {
    target.prototype[symbolRoutePrefix] = prefix;
  };
}

export function Get(path: string) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    let config = {
      method: 'get',
      path
    };
    return router(target, name, descriptor, config);
  };
}

export function Post(path: string) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    let config = {
      method: 'post',
      path
    };
    return router(target, name, descriptor, config);
  };
}

export function Put(path: string) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    let config = {
      method: 'put',
      path
    };
    return router(target, name, descriptor, config);
  };
}

export function Delete(path: string) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    let config = {
      method: 'delete',
      path
    };
    return router(target, name, descriptor, config);
  };
}

export function All(path: string) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    let config = {
      method: 'all',
      path
    };
    return router(target, name, descriptor, config);
  };
}

function router(
  target: any,
  name: string,
  descriptor: PropertyDescriptor,
  config: any
) {
  Route.__DecoratedRouters.set(
    {
      target: target,
      path: config.path,
      method: config.method
    },
    target[name]
  );
  target[name] = sureIsArray(target[name]);
  let i = target[name].length - 1 >= 1 ? 1 : 0;
  target[name].splice(i, 0, middleware);
  return descriptor;
  async function middleware(ctx: Koa.Context, next: any) {
    await next();
  }
}
