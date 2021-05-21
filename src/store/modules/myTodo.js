import lsw from '../api/localStorageWriteList'

const state = () => ({
    deviceId: 'vue1', //[D] deviceid값 우선 이걸로 고정, 변경해도 됨
    writeList: [],
    sort: 'asc'
})

//getters
const getters = {
    getWriteLists: function(state) {
        return state.writeList
    },

    totalListCount: function(state) {
        let totalCount = 0
        if (state.writeList.length > 0) {
            totalCount = state.writeList.length
        }
        return totalCount
    },

    countOfComplete: state => {
        let count = 0
        if (state.writeList.length > 0) {
            state.writeList.filter(item => {
                if (item.state == 1) count++
            })
        }
        return count
    },

    showCompleteText: (state, getters) => {
        return `${getters.countOfComplete}/${getters.totalListCount}`
    },

    getSort: state => {
        return state.sort
    }
}

//actions
const actions = {
    getAllWriteList({ commit, state }) {
        commit('setWriteList', lsw.getList(state.sort))
    },

    addList: ({ commit, state }) => {
        //localstorage에 추가하기
        commit('addList', lsw.getList(state.sort))
    },

    updateList : ({ commit, state }, payload) => {
        lsw.updateList(payload.key,payload.val)
        commit('setWriteList', lsw.getList(state.sort))
    },

    removeList: ({ commit, state }, key) => {
        lsw.deleteList(key)
        commit('removeList', lsw.getList(state.sort))
    },

    removeAllList({ commit, state }) {
        lsw.deleteAllList();
        commit('removeAllList', lsw.getList(state.sort))
    },

    updateSort: ({ commit, state }, _sort) => {
        commit('updateSort', _sort)
        commit('setWriteList', lsw.getList(state.sort))
    }
}
//mutaions
const mutations = {
    setWriteList(state, writeLists) {
        state.writeList = writeLists
    },

    addList: (state, writeLists) => {
        state.writeList = writeLists
    },

    removeList(state, writeLists) {
        state.writeList = writeLists
    },

    removeAllList(state, writeLists) {
        state.writeList = writeLists
    },

    updateSort(state, sort) {
        state.sort = sort
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}