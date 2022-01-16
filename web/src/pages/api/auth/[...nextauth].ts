import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // scope: ''
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      try {
        return {
          ...session,
        };
      } catch (err) {
        console.log(err);
        return {
          ...session,
        };
      }
    },
    // async signIn({ user, account, profile, email, credentials }) { }
  },
});
