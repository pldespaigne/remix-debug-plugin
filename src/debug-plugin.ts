import { PluginClient } from '@remixproject/plugin';

export class DebugPlugin extends PluginClient {

  constructor() {
    super();

    super.onload().then(()=>{
      console.log('*** plugin loaded');
      this.on('solidity', 'compilationFinished', (...args) => this.eventReceived('solidity', 'compilationFinished', ...args));
    });

    console.log(this);
  }

  public eventReceived(pluginName: string, eventName: string, ...args: any[]) {
    console.log(` >>> received ${eventName} from ${pluginName} with args :`, args);
  }

}