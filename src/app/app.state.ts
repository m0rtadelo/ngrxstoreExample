import { Blockchain } from './blockchain/blockchain.model';
import { Counter } from './blockchain/counter.model';

export interface AppState {
  readonly blockchain: Blockchain[];
  readonly counter: Counter;
}
