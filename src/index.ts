import { IPlugin } from "@vortex-music/types/BasePlugin";


const SpotifyPlugin: IPlugin = {
  id: 'vortexmusic-plugins-base',
  name: 'Base Template Plugin',

  player: {
    play: function (): Promise<boolean> {
      throw new Error("Function not implemented.");
    },
    pause: function (): Promise<boolean> {
      throw new Error("Function not implemented.");
    }
  },

  description: "",
  version: "",

  activate: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },

  deactivate: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  }
};

export default SpotifyPlugin;