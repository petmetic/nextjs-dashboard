import NextAuth from 'next-auth';
import { authConfig} from NextAuth(authConfig).auth;

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ['/((?1api|_next/static|next/image|.*\\..png$).*)'],
};