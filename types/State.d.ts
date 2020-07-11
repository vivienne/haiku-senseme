export { State as default };
declare class State {
    observeAll: () => any;
    observe: (path: any) => any;
    listen(path: any): any;
    listenAll(): any;
    get(path: any): any;
    set(path: any, value: any): void;
    delete(path: any): void;
}
