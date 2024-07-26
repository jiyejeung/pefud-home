import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

type RequestPermissionsResponse = { permissionAddresses: string[]; walletAddress: string; chainId: number };

export const eonChainNetWorkInfo = { chainId: '0x1CA4', chainName: 'Eon', nativeCurrency: { name: 'Horizen', symbol: 'ZEN', decimals: 18 }, rpcUrls: ['https://eon-rpc.horizenlabs.io/ethv1'], blockExplorerUrls: ['https://explorer.horizen.io/'] };

export const checkInstalledMetaMask = (): boolean => {
  return window.ethereum && window.ethereum.isMetaMask ? true : false;
};

export const requestPermissionAddresses = async (): Promise<RequestPermissionsResponse> => {
  try {
    const permissions = await window.ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] });

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    const message = 'Welcome to our platform! Please sign this message to connect your wallet.';

    await signer.signMessage(message);

    const chainId = parseInt((await signer.provider.getNetwork()).chainId.toString());

    return { permissionAddresses: permissions[0].caveats[0].value ?? [], walletAddress: address ?? '', chainId };
  } catch (error: any) {
    if (error.code === 4001) console.log('지갑 선택을 취소 했을 경우');
    if (error.code === 'ACTION_REJECTED') console.log('권한 설정을 거부한 경우');

    return { permissionAddresses: [], walletAddress: '', chainId: -1 };
  }
};

export const requestBonePoints = async (walletAddress: string) => {
  console.log(walletAddress);

  return { bonePoints: 0 };
};
