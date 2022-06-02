const example = 
      {
          domain: {
              chainId: 1,
              name: "Collab.Land Connect",
              verifyingContract: "0xBBBbbBBBBBBBbBBBBBBBbbbb",
              version: "1"
          },
          primaryType: "Verify",
          message: {
              "message": "Collab.Land (connect.collab.land) asks you to sign this message for the purpose of verifying your account ownership. This is READ-ONLY access and will NOT trigger any blockchain transactions or incur any fees.\n\n- Community: The Collab.Land Discord\n- User: ZenGoTal#5609\n- Discord Interaction: 978988145024577567\n- Timestamp: 2022-05-25T11:49:23.135Z"
          },
          types: {
              EIP712Domain: [
                  {
                      name: "name",
                      type: "string"
                  },
                  {
                      name: "version",
                      type: "string"
                  },
                  {
                      name: "chainId",
                      type: "uint256"
                  },
                  {
                      name: "verifyingContract",
                      type: "address"
                  }
              ],
              Verify: [
                  {
                      name: "message",
                      type: "string"
                  }
              ]
          }
      };

export const eip712malformed1 = {
  example,
};
