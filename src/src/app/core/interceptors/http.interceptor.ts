import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { Router } from "@angular/router";

export const HttpAuthInterceptorFn: HttpInterceptorFn = (req,next)=>{


    const httpHeaders: Record<string, string> = { 'Accept': 'application/json', 'Authorization': '' };
    if (!(req.body instanceof FormData)) {
        httpHeaders['Content-Type'] = 'application/json';
    }


    const customRequest = req.clone({setHeaders:httpHeaders});

    const router = inject(Router);

    return next(customRequest).pipe(
        catchError((httpError:HttpErrorResponse)=>
        {
            if(httpError.status==401 || httpError.status==403)
            {
                //redireccionar login
                router.navigateByUrl('/login');
            }

            return throwError(()=>{
                return httpError;
            });
        })
    );
}