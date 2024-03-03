import { NeynarAPIClient } from "@neynar/nodejs-sdk";

export const useNaynar = () => {
  const API_KEY = process.env.NAYNAR_API_KEY || "";
  const MESSAGE_HASH =
    "0a49080d1085940118f6a6a32e20018201390a1a86db69b3ffdf6ab8acb6872b69ccbe7eb6a67af7ab71e95aa69f10021a1908ef011214237025b322fd03a9ddc7ec6c078fb9c56d1a72111214e3d88aeb2d0af356024e0c693f31c11b42c76b721801224043cb2f3fcbfb5dafce110e934b9369267cf3d1aef06f51ce653dc01700fc7b778522eb7873fd60dda4611376200076caf26d40a736d3919ce14e78a684e4d30b280132203a66717c82d728beb3511b05975c6603275c7f6a0600370bf637b9ecd2bd231e";

  const fetchUserPFP = async () => {
    const naynarClient = new NeynarAPIClient(API_KEY);

    const response = await naynarClient.validateFrameAction(MESSAGE_HASH);

    return response.interactor?.pfp_url;
  };

  return { fetchUserPFP };
};
