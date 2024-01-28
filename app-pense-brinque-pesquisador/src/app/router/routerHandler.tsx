import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

export class RouterHandler {
  private url: string = 'http://localhost:3001';
  private apiUrl: string = 'http://localhost:3000';
  
  /**
   * 
   * @param urlComplement 
   * @param data 
   * @returns 
   */
  POST = async(urlComplement: string, data: any): Promise<AxiosResponse<any, any>> => {
    return await axios.post(`${this.apiUrl}${urlComplement}`, data);
  }

  /**
   * 
   * @param urlComplement
   * @returns 
   */
  GET = async(urlComplement: string, data: any): Promise<AxiosResponse<any, any>> => {
    console.log(data);
    return await axios.get(`${this.apiUrl}${urlComplement}`);
  }

  /**
   * Redirects the user to a new url.
   * 
   * @param urlComplement - Path to be redirected to.
   * @param baseUrl - If no value is defined, use the frontend base url.
   * @returns NextResponse redirect.
   */
  redirect = (urlComplement: string, baseUrl?: string): NextResponse<unknown> => {
    const url: URL = new URL( urlComplement, baseUrl ?? this.url);
    console.log('redirecting to ', url);
    return NextResponse.redirect(url);
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RouterHandler();

// // import authenticationServer from '../authentication/authenticationServer';

// export async function POST(request: NextRequest) {
//   console.log('[RouterHandler - POST]', request);
//   // const userToken = await request.json();
//   // console.log("user token = ", userToken);
//   // if (!userToken) {
//   //   return Response.json({
//   //     success: false,
//   //     message: "No token found",
//   //   });
//   // }

//   // try {
//   //   const authenticatedUser = authenticationServer.verifyUserToken(request);
//   //   if (authenticatedUser) {
//   //     const user = authenticationServer.getUserData();
//   //     return Response.json({
//   //       success: true,
//   //       user: user,
//   //     });
//   //   }
//   // } catch (error) {
//   //   return Response.json({
//   //     success: false,
//   //     message: error,
//   //   });
//   // }
// }
