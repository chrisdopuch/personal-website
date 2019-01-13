// Type definitions for react-hookstore @ 1.0.8
// Definitions by: Chris Dopuch <chris.dopuch@gmail.com>

export function useStore(storeName?: string): [any, (newStore: any) => void];
export function createStore(name: string, state: any, reducer?: (state: any, value: any) => any): number;
