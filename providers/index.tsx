import { Suspense } from "react";
import QueryProvider from "./QueryProvider";





export const Providers = ({children}: {children:  React.ReactNode})=> {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <QueryProvider>

        {children}
   
    </QueryProvider>
    </Suspense>
  );
}


