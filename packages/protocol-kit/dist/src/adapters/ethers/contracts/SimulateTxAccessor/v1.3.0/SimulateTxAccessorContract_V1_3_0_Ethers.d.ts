import { Simulate_tx_accessor as SimulateTxAccessor } from '@safe-global/protocol-kit/typechain/src/ethers-v5/v1.3.0/Simulate_tx_accessor';
import SimulateTxAccessorEthersContract from '../SimulateTxAccessorEthersContract';
declare class SimulateTxAccessorContract_V1_3_0_Ethers extends SimulateTxAccessorEthersContract {
    contract: SimulateTxAccessor;
    constructor(contract: SimulateTxAccessor);
}
export default SimulateTxAccessorContract_V1_3_0_Ethers;
