import { PluginClient } from '@remixproject/plugin';

export class DebugPlugin extends PluginClient {

  constructor() {
    super();
    this.onload().then(()=>{
      console.log('*** plugin loaded');
      this.on('solidity', 'compilationFinished', (...args: any) => this.eventReceived('solidity', 'compilationFinished', ...args));
      console.log(this);
    });

    document.querySelector('#emit-btn')!.addEventListener('click', () => this.handleEmit());
    document.querySelector('#register-btn')!.addEventListener('click', () => this.handleRegister());
    document.querySelector('#call-btn')!.addEventListener('click', () => this.handleCall());
    this.methods = [
      'sayHello',
      'sayMyName',
      'sayOurNames',
    ];
  }

  private eventReceived(pluginName: string, eventName: string, ...args: any[]) {
    console.log(` >>> received ${eventName} from ${pluginName} with args :`, args);
  }

  private handleEmit() {
    const eventName = document.querySelector<HTMLInputElement>('#emit-name')!.value;
    const eventValue = document.querySelector<HTMLInputElement>('#emit-value')!.value;
    console.log(`<<<  emiting ${eventName} with value ${eventValue}`);
    this.emit(eventName, eventValue);
  }

  private handleRegister() {
    const pluginName = document.querySelector<HTMLInputElement>('#register-plugin')!.value;
    const eventName = document.querySelector<HTMLInputElement>('#register-event')!.value;
    console.log(`*** registering event ${eventName} from plugin ${pluginName}`);
    this.on(pluginName as any, eventName, (...args: any) => this.eventReceived(pluginName, eventName, ...args));
  }

  private handleCall() {
    const pluginName = document.querySelector<HTMLInputElement>('#call-plugin')!.value;
    const functionName = document.querySelector<HTMLInputElement>('#call-function')!.value;
    const args = document.querySelector<HTMLInputElement>('#call-args')!.value.split(',');
    console.log(`<<<  calling function ${functionName} of plugin ${pluginName} with args :`, args);
    this.call(pluginName as any, functionName, ...args).then(result => {
      console.log(` >>> call has returned ${result}`);
    });
    
  }

  public sayHello() {
    console.log( `*** ${this.currentRequest.from} has called sayHello`);
    return 'Hellooooo \ud83c\udf89';
  }

  public sayMyName(name: string) {
    console.log( `*** ${this.currentRequest.from} has called sayMyName`);
    return `Hello ${name} !`;
  }

  public sayOurNames(name1: string, name2: string) {
    console.log( `*** ${this.currentRequest.from} has called sayOurNames`);
    return `Hello ${name1} and ${name2} !`;
  }
}