import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
      writeList : [
             {"content":"할일 내용","writeDate":1618757856720,"isComplete":false},
             {"content":"할일 내용2","writeDate":1618758110541,"isComplete":true},
             {"content":"할일 내용3","writeDate":1618758110543,"isComplete":false}
      ]
  },
  getters: {
      totalListCount: function(state){
            return state.writeList.length;
      },
      countOfComplete: state => {
            let count = 0;
            state.writeList.forEach(item=>{
                  if(!item.isComplete) count++
            })
            return count
      },
      showCompleteText: (state,getters) => {
            return `${getters.countOfComplete}/${getters.totalListCount}`
      }
  },
  mutations: {
      addList: (state, payload) => {
            state.writeList.push(payload)
      }

  },
  actions: {
        addList: ({ commit }, playload) => {
              //localstorage에 추가하기
              commit('addList', playload)
        }
  },
  modules: {
  }
})
