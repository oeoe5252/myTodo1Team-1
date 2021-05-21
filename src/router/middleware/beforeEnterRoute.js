import store from '@/store/';

export function beforeEnterRoute(to,from,next){
      try{
            store.dispatch('getAllWriteList');
      }catch(e){
            console.log(e.message);
      }finally{
            next();
      }
}