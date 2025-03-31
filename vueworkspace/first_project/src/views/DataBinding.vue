<!-- views/DataBinding.vue -->
 <template>
  <!-- HTML -->
   <div>
    <!-- 이중괄호 -->
    <h1>{{ title }}</h1>
    <!-- directive : Vue의 명령 수행, 'v-' 접두어 사용 -->
    <h2 v-text="title" id="home"></h2>
    <p v-html="tagList"></p>
    <p v-text="tagList" v-bind:name="tagName"></p>
    <!-- v-bind 디렉티브 : 단방향 바인딩 -->
    <!-- v-model 디렉티브 : 양방향 바인딩 -->
    <input type="text" v-model="valueModel">
    <p>{{ valueModel + 1000 }}, {{ typeof valueModel }}</p>
    <input type="number" v-model.lazy="numberModel">
    <p>{{ numberModel }}, {{ numberModel + 10000 }}</p>
    <select v-model="selectModel">
      <option value="summer">여름</option>
      <option value="winter">겨울</option>
    </select>
    <p>{{ selectModel }}</p>
    <textarea v-model="textModel"></textarea>
    <hr>
    <input type="checkbox" v-model="chData"
                true-value="여" false-value="부">
    <p>{{ chData }}</p>
    <div>
      <input type="checkbox" value="Seoul" v-model="city">서울
      <input type="checkbox" value="Daegu" v-model="city">대구
      <p>{{ city }} </p>
    </div>
    <div> 
      <input type="radio" value="Reading" v-model="hobby">독서
      <input type="radio" value="Moving" v-model="hobby">영화
      <input type="radio" value="Sports" v-model="hobby">운동
      <p>{{ hobby }} </p>
    </div>
    <img v-bind:style="styleData" v-bind:src="imgUrl">
    <div class="container"
          v-bind:class="myClass">Class Binding Second</div>
    <div class="container"
          v-bind:class="{'active' : isActive, 'text-red' : hasError}">
          Class Binding First</div>
   </div>
 </template>
 <script>
  // Vue 객체의 데이터, 기능

  export default {
    data(){ // 데이터 바인딩에 사용하는 데이터들(CRUD)
      return {
        title : 'Hello, Vue.js', 
        tagList : '<strong> Today is ...</strong>',
        tagName : 'bindTest',
        valueModel : 'Korea',
        numberModel : '0',
        selectModel : 'winter',
        textModel : '백견불여일타',
        chData : '',
        city : [],
        hobby : '',
        styleData : {
        // 'background-color' : 'skyblue',
        backgroundColor : 'skyblue',
        width : '200px',
        },
        backSetting : 'background-color : skyblue; width:200px;',
        imgUrl : 'https://kr.vuejs.org/images/logo.png',
        isActive : false,
        //hasError : !this.isActive,
        myClass : 'active'
      }
    },
    computed : { // 존재하는 데이터 기반으로 계산한 결과값(Read Only)
      hasError : function(){
        return !this.isActive;
      }
    },
  }
 </script>
 <style>
  /* CSS */
  .text-red{
    color : red;
  }
  .container{
    width : 100%;
    height : 200px;
  }
  .active{
    background-color: aquamarine;
    font-weight: bold;
  }
 </style>