// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// export function middleware(req) {
//   const { pathname } = req.nextUrl;

//   // Check if the request is for the /admin path
//   if (pathname.startsWith('/admin')) {
//     const token = req.cookies.get('admin-token'); // Retrieve the token from the cookies
//     if (!token) {
//       // Redirect to the login page if the token is missing
//       return NextResponse.redirect(new URL('/auth/login', req.url));
//     }

//     try {
//       // Verify the token using your JWT secret
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = decoded; // Assuming your token contains user data
//     } catch (error) {
//       if (error instanceof jwt.JsonWebTokenError) {
//         // Handle specific JWT errors (e.g., expired token, invalid signature)
//         return NextResponse.redirect(new URL('/auth/login', req.url), {
//           status: 401, // Unauthorized
//         });
//       } else {
//         console.error('Error verifying token:', error);
//         return NextResponse.redirect(new URL('/auth/login', req.url));
//       }
//     }
//   }

//   return NextResponse.next(); // Allow the request to continue if no issues
// }
