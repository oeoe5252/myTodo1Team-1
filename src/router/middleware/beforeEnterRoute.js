import store from '@/store'

export function beforeEnterRoute(to, from, next){
    try {
        /* [NOTE] 
         - 기기정보 받고, state에 기기정보 전달
         - 지금은 state.deviceId에 임시 기번설정되어있음
        */
        store.dispatch('getAllWriteList')
    } catch(e) {
        console.log(e.message)
    } finally {
        next()
    }
}