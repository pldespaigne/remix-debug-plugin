
// import { Remix3BoxPlugin } from './remix-3box-plugin';
import { DebugPlugin } from './debug-plugin';

import { connectIframe, listenOnThemeChanged } from '@remixproject/plugin';

const plugin = new DebugPlugin(); // instantiate the plugin
connectIframe(plugin);
listenOnThemeChanged(plugin);