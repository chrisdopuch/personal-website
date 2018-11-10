// Type definitions for react-hookstore @ 1.0.8
// Definitions by: Chris Dopuch <chris.dopuch@gmail.com>

export function useStore(storeName?: string): [any, (newStore: any) => void];
export function createStore(config: StoreConfig): number;

export interface StoreConfig {
  name?: string;
  state?: any;
  reducer?: (previousState: any, action: { type: string; payload: any }) => any;
}
