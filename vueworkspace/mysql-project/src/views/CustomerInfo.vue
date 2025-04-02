<!-- views/CustomerInfo.vue -->
 <template>
   <div class="container text-center">
    <!-- content 영역 -->
     <div class="row">
      <div class="row">
        <div class="col-4">아이디</div>
        <div class="col-8">{{ customer.id }}</div>
      </div>
      <div class="row">
        <div class="col-4">이름</div>
        <div class="col-8">{{ customer.name }}</div>
      </div> 
      <div class="row">
        <div class="col-4">이메일</div>
        <div class="col-8">{{ customer.email }}</div>
      </div> 
      <div class="row">
        <div class="col-4">연락처</div>
        <div class="col-8">{{ customer.phone }}</div>
      </div> 
      <div class="row">
        <div class="col-4">주소</div>
        <div class="col-8">{{ customer.address }}</div>
      </div>
     </div>
     <!-- button 영역 -->
     <div class="row">
      <button class="col btn btn-info"
              v-on:click="goToUpdateForm()">
        수정
      </button>
      <button class="col btn btn-light"
              v-on:click="goTOCustomerList()">
        목록
      </button>
      <button class="col btn btn-danger"
              v-on:click="delInfo()">
        삭제
      </button>
     </div>
   </div>
 </template>
 <script>
import axios from 'axios';

export default{
  data(){
    return {
      customer : {}
    }
  },
  created(){
    const selectId = this.$route.query.id;
    this.getCustomerInfo(selectId);
  },
  methods : {
    async getCustomerInfo(id){ // http://localhost:3000/customers/1
      let ajaxRes = await axios.get(`/api/customers/${id}`) // /api/customers/1
                              .catch(err => console.log(err));
      this.customer = ajaxRes.data;
    },
    async delInfo(){
      let ajaxRes = await axios.delete(`/api/customers/${this.customer.id}`) // /api/customers/1
                              .catch(err => console.log(err));
      let sqlRes = ajaxRes.data;
      let result = sqlRes.affectedRows;
      if(result > 0){
        alert('정상적으로 삭제되었습니다.');
        this.$router.push({name : 'custList'});
      }else{
        alert('정상적으로 삭제되지않았습니다.');
      }
    },
    goToUpdateForm(){
      this.$router.push({name : 'customerUpdate', params : { custId : this.customer.id}});
    },
    goTOCustomerList(){
      this.$router.push('/customerList');
    }
  }
}
 </script>