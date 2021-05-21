/*
axios로 인하여 삭제예정
*/
export default class MyTodoListWrite {
      constructor(content){
            this.content = content;
      }
      getWriteDate(){
            return new Date().getTime();
      }
      writeMydoList(){
            return JSON.stringify({
                  text: this.content, //할일 내용
                  created_at : this.getWriteDate(), //쓴 날짜
                  state : 1 //완료 여부 true면 완료,false면 미완료
            })
      }
      setLocalStorage(){
            const key = this.getWriteDate()+"-w"
            localStorage.setItem(key, this.writeMydoList())
      }
}