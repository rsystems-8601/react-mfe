// // const routes: Routes = [
// //   { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
// //   // ... other routes
// // ];
// ***********************
// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AuthService } from'./auth.service'; // Assuming an existing auth service
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate
// {
//   constructor(private authService: AuthService, private router: Router) {}
//   canActivate():boolean {
//     if (this.authService.isAuthenticated()) {
//       return true; // Allow access if authenticated
//     } else {
//       this.router.navigate(['/login']); // Redirect to login if not authenticated
//       return false;
//     }
//   }
// }
