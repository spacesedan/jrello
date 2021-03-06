import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../types/MyContext';

export const isAuth: MiddlewareFn<MyContext> = async (
  { context: ctx },
  next
) => {
  if (!ctx.req.session.userId) {
    throw new Error('Not authenticated');
  }
  return next();
};
