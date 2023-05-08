export const connectToMetamask = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts;
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("Please install Metamask");
  }
};
