import { NextRequest } from 'next/server';
import authenticationServer from '../authentication/authenticationServer';

export async function POST(request: NextRequest) {
  console.log('[RouterHandler - POST]', request);
  // const userToken = await request.json();
  // console.log("user token = ", userToken);
  // if (!userToken) {
  //   return Response.json({
  //     success: false,
  //     message: "No token found",
  //   });
  // }

  // try {
  //   const authenticatedUser = authenticationServer.verifyUserToken(request);
  //   if (authenticatedUser) {
  //     const user = authenticationServer.getUserData();
  //     return Response.json({
  //       success: true,
  //       user: user,
  //     });
  //   }
  // } catch (error) {
  //   return Response.json({
  //     success: false,
  //     message: error,
  //   });
  // }
}
