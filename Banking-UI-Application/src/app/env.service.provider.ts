import { EnvService } from "./env.service";
import { environment } from "src/enviornments/environment";
export const EnvServiceFactory = () => {
   const env = new EnvService();
   const browserWindow = window || {};
   const browserWindowEnv = browserWindow['__env'] || {};
   for(const key in browserWindowEnv){
     if(browserWindowEnv.hasOwnProperty(key)){
        if(window['__env'][key] === '' && key === 'apiUrl'){
            env[key] = environment.apiUrl;
        }else{
            env[key] = window['__env'][key];
        }
     }
   }
    return env;
};

export const EnvSeriveProvider = {
    provide: EnvService,
    userFactory: EnvServiceFactory,
    deps: [],
};
