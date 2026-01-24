import NextAuth from 'next-auth'
import mongoose from 'mongoose'
import User from '../../../../models/user'
import Payment from '../../../../models/Payment'

import GitHubProvider from 'next-auth/providers/github'

export const authoptions = NextAuth({
  providers: [
   
    GitHubProvider({
         clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
   
  ],
callbacks: {
  async signIn({ user, account, profile,  credentials }) {
    try {
    if (account.provider === 'github') {
      const client = await mongoose.connect("mongodb://localhost:27017/Chai")
      const email = user.email || profile.email;
      const username = user.name || (email ? email.split('@')[0] : `user${Date.now()}`);
      const name = user.name || profile.name || username;
      const currentUser = await User.findOne({ email })
      if (!currentUser) {
        const newUser = new User({
          name: name,
          email: email,
          username: username,
          
        })
        await newUser.save()
       
      }
    }
      return true;
  } catch (error) {
      console.error('Error during sign-in:', error);
      return false;
    }
},
}

})
export { authoptions as GET, authoptions as POST}