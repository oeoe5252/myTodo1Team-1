import lsw from '../api/localStorageWriteList'
import { axiosDefault } from '@/store/api/BaseAxios'

const state = () => ({
    //[D] deviceid값 우선 이걸(vue1)로 고정, 변경해도 됨
    // [NOTE] deviceID 식별값 문자x, 숫자로만 
    // [NOTE] deviceID에 따른 정렬상태 저장 localStorage 사용해야할 것 같다. 
    deviceId: '5252',
    writeList: [],
    sort: 'asc'
})

//getters
const getters = {
    getWriteLists: state => {
        return state.writeList
    },

    totalListCount: state => {
        return state.writeList.length
    },

    countOfComplete: state => {
        return state.writeList.filter(item => item.state == 2).length
    },

    // [NOTE] 미사용 주석
    // showCompleteText: (state, getters) => {
    //     return `${getters.countOfComplete}/${getters.totalListCount}`
    // },

    getSort: state => {
        return state.sort
    }
}

//actions
const actions = {
    // [NOTE] 수행위치: route/beforeEnterRoute.js
    getAllWriteList({ commit, state }) {
        axiosDefault().get(`/api/v1/todos/${state.deviceId}`)
            .then(data => {
                commit('setWriteList', data.data)
                console.log(`GET 성공 /api/v1/todos/${state.deviceId}`, data.data)
        })
    },

    addList: async ({ commit, state }, itemPayload) => {
        //localstorage에 추가하기
        // [NOTE] API post
        // - 궁금한점1: state에 정렬 상태에 따라, push or shift 했었는 
        // - 궁금한점1: 수정 있을때마다 데이터를 전체 받아와서 뿌려야 하는건지. (우선 이걸로)
         
        await axiosDefault().post(`/api/v1/todos/${state.deviceId}`, itemPayload)
            .then(data => {
                // [NOTE] post 응답 data는 성공 여부만 있음 - 그래서 get도 호출했음..ㅠ
                console.log(`post 성공 /api/v1/todos/${state.deviceId}`, data)
        })

        await axiosDefault().get(`/api/v1/todos/${state.deviceId}`)
            .then(data => {
                commit('setWriteList', data.data)
                console.log(`GET 성공 /api/v1/todos/${state.deviceId}`, data.data)
        })
    },

    updateList: ({ commit, state }, itemPayload) => {
        axiosDefault().patch(`/api/v1/todos/${itemPayload.item.id}`, { text: `${itemPayload.item.text}`, state : itemPayload.state })
            .then(data => {
                commit('updateState', itemPayload)
                console.log(`patch 성공 /api/v1/todos/${state.deviceId}`, data)
        })
    },

    removeList: ({ commit }, itemPayload) => {
        axiosDefault().delete(`/api/v1/todos/${itemPayload.id}`)
            .then(data => {
                commit('removeList', itemPayload.idx)
                console.log(`delete 성공 /api/v1/todos/${itemPayload.id}`, data)
        })
    },

    async removeAllList({ commit, state }) {
        for (const item of state.writeList) {
            await axiosDefault().delete(`/api/v1/todos/${item.id}`)
                .then(data => {
                    console.log(data)
                    console.log(`delete 성공 /api/v1/todos/${item.id}`, data)
            })
        }
        await commit('removeAllList', [])
    },

    updateSort: ({ commit, state }, _sort) => {
        commit('updateSort', _sort)
        commit('setWriteList', lsw.getList(state.sort))
    }
}
//mutaions
const mutations = {
    setWriteList(state, writeLists) {
        // [Note] api 데이터 state.writeList 저장
        state.writeList = writeLists
    },

    // [NOTE] 미사용 주석
    // addList: (state, itemPayload) => {
    //     state.writeList = itemPayload
    // },

    removeList(state, idxPayload) {
        state.writeList.splice(idxPayload, 1)
    },

    removeAllList(state, emptyPayload) {
        state.writeList = emptyPayload
    },

    // [NOTE] state 변경 추가 
    updateState(state, itemPayload) {
        state.writeList[itemPayload.idx].state = itemPayload.state
    },

    updateSort(state, sort) {
        state.sort = sort
    },
}


export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations,
}