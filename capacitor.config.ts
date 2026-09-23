import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.emon.bookvibe',
  appName: 'Book Vibe',
  webDir: 'public',
  server: {
    url: 'https://your-book-vibe-site.vercel.app', // <--- আপনার লাইভ সাইটের লিংক দিন
    cleartext: true
  }
};

export default config;
