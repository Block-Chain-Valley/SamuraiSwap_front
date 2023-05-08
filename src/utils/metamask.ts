export const connectToMetamask = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      return true;
    } catch (err) {
      return false;
    }
  }
};
