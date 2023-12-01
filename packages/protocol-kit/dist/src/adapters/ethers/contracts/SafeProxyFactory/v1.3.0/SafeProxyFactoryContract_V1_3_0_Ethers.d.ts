import { Proxy_factory as ProxyFactory } from '@safe-global/protocol-kit/typechain/src/ethers-v5/v1.3.0/Proxy_factory';
import SafeProxyFactoryEthersContract from '../SafeProxyFactoryEthersContract';
declare class SafeProxyFactoryContract_V1_3_0_Ethers extends SafeProxyFactoryEthersContract {
    contract: ProxyFactory;
    constructor(contract: ProxyFactory);
}
export default SafeProxyFactoryContract_V1_3_0_Ethers;
