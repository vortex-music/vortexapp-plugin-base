const SpotifyPlugin: any = {
  id: 'vortexmusic-plugins-base',
  name: 'Base Template Plugin',
  async initialize() {
    console.log('Base Template Plugin initialized.');
  },
  
  async play(trackId: string) {
    console.log(`Playing track ${trackId} on Spotify.`);
    return true;
  },
};

export default SpotifyPlugin;