export default class MyTodoListWrite {
      constructor(content){
            this.content = content;
      }
      getWriteDate(){
            return new Date().getTime();
      }
      writeMydoList(){
            return JSON.stringify({
                  content: this.content, //할일 내용
                  writeDate : this.getWriteDate(), //쓴 날짜
                  isComplete : false //완료 여부 true면 완료,false면 미완료
            })
      }
      setLocalStorage(){
            const key = this.getWriteDate()+"-w"
            localStorage.setItem(key, this.writeMydoList())
      }
}