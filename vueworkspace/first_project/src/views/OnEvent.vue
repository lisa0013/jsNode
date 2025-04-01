<!-- views/OnEvent.vue -->
 <template>
  <div>
    <input v-model="msg"
        v-on:keyup.alt.enter="clear();">
    <p>{{ msg }}</p>
    <hr>
    <form v-on:click.self="message('form')">
      Form
      <div v-on:click.once="message('div')">
        Div
        <p @click.stop="message('p')">
          P
          <a @click.prevent="message('a')"
          href="http://www.naver.com">네이버</a>
        </p>
      </div>
    </form>
    <hr>
    <button @click="increaseCounter">Add 1</button>
    <br>
    <button @click="setCount(num,$event)">Add {{ num }}</button>
    <p>The Counter is : {{ counter }}</p>
  </div>
 </template>
 <script>

export default {
  data(){
    return { // 데이터(CRUD) => 프로퍼티
      msg : '',
      num : 7,
      counter : 0,
    }
  },
  methods : {
    clear(){
      this.msg = '';
    },
    message(tag){
      alert(`${tag}, 선택`);
    },
    increaseCounter(event){
      console.log('increase', event);
      this.counter++;
    },
    setCount(value,event){
      console.log('setCount', event);
      this.counter+=value;

    }
  }
}
</script>
<style>
form, form * {
 margin : 10px;
 border : 1px solid skyblue;
}
</style>