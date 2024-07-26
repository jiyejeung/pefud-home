import { createSlice } from '@reduxjs/toolkit';

interface WalletState {
  chainId: number;
  walletAddress: string;
  permissionAddresses: string[];
  bonePoints: string;
}

const initialState: WalletState = {
  chainId: -1,
  walletAddress: '',
  permissionAddresses: [],
  bonePoints: '0'
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setChainId(state, action) {
      state.chainId = action.payload;
    },
    setWalletAddress(state, action) {
      state.walletAddress = action.payload;
    },
    setPermissionAddresses(state, action) {
      state.permissionAddresses = action.payload;
    },
    setBonePoints(state, action) {
      state.bonePoints = action.payload;
    }
  }
});

export const { setChainId, setWalletAddress, setPermissionAddresses, setBonePoints } = walletSlice.actions;
export default walletSlice.reducer;
