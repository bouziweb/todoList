<template>

  <div class="container">
    
    <div class="imgSvg">
      <img src="./assets/img.svg" alt="">
    </div>
    <div class="row">

      <appHeader v-bind:todos="todos"></appHeader>
      
      <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-center main">
        
        <h1>Todo List</h1>
         <br>
        <div class="searchTodo">
          <input type="text" v-model="filterText" placeholder="search todos">
          <span 
          v-if="filterText.length>0"
          @click="deleteText"
          ><i class="fas fa-backspace"></i></span>
        </div>
        
        <div class="list-group" v-if="filterText.length<=0">
            <transition-group name="slide" tag="div"   mode="out-in">
              <div class="list"
                v-for="(todo,index) in todos"
                :key="todo">
                 {{todo}}
                <a  @click.prevent="deleteTodo(index)">
                  <span><i class="fas fa-trash-alt"></i></span>
                </a>
              </div>
          </transition-group>
        </div>

        <div class="list-group" v-if="filterText.length>0">
          <transition-group name="slide" mode="out-in" >
              <div class="list" 
                
                v-for="(Filter,index) in filterTodos"
                :key="index">
                {{Filter}}
                <a  @click.prevent="deleteTodo(index)"
                  >
                  <span><i class="fas fa-trash-alt"></i></span>
                </a>
              </div>
           </transition-group>   
          
        </div>

        <div class="newList">
          <h5>Add a new Todo...</h5>
          <input v-on:keyup.enter="addTodo(newTodo)" v-model="newTodo" type="text" name="newTodo" >
          <a    @click.prevent="addTodo(newTodo)">
          
             <span ><i class="fas fa-plus"></i></span> </a>
        </div>

      
      </div>
      <appFotter></appFotter>
    </div>
  </div>
  
  
</template>


<script>

import footer from './component/footer.vue'
import header from './component/header.vue'
export default {
  name: "my-component",
  components:{
    appFotter:footer,
    appHeader:header
  },

  data(){
    return {
        todos:[
          'Go to the GYM',
          'Learn javascript',
          'Call my family'
        ],
        newTodo:'',
        filterText:''

    }
  },

  methods:{
    deleteTodo(index){
     this.todos.splice(index,1)
    },
    addTodo(newTodo){
     if (this.newTodo.length===0) {
         
           this.$swal("You sould to write something")
         
     } else {
        this.todos.push(newTodo);
        this.newTodo=''
     }
      
    },
    deleteText(){
      this.filterText='';
    }
    
  },

   computed:{
    filterTodos(){
      return this.todos.filter((element)=>{
        return element.match(this.filterText)
      })

    }

  }

  
}
</script>


<style scoped>


/*-- Design scroll for TodoList-- */

.list-group::-webkit-scrollbar {
  width: 10px;
}
 
.list-group::-webkit-scrollbar-track {
  
  height:auto
}
 
.list-group::-webkit-scrollbar-thumb {
  background-color: #483969;
 
}
/* ----------End scroll---------- */

h1{
  font-family: 'Hanalei Fill', cursive;
  font-size: 60px;
  color: blanchedalmond;
}
h5{
  font-family: 'Poiret One', cursive;
}


.container{
background: rgb(43,18,55);
background: linear-gradient(188deg, rgba(43,18,55,1) 0%, rgba(77,46,108,1) 91%);

  height: 100vh;
  width:100%;
  margin: 0;
  padding:0;
  min-width: 100%;

}
.container::before{
    content: '';
    display: inline-block;
    width: 400px;
    height: 400px;
    -moz-border-radius: 50%;
    border-radius: 50%;
    right:0;
    top: 0;
    border:10px solid #472963;
    margin-top: -200px;
    margin-left: -200px;
    background-color: #2F2156;
    opacity: 0.7;

}
.container::after{
    content: '';
    display: inline-block;
    width: 200px;
    height: 200px;
    -moz-border-radius: 50%;
    border-radius: 50%;
    left:10%;
    bottom: 5%;
    position: absolute;
    border:10px solid #321b47;
    opacity: 0.3;
    background-color: #2F2156;

}

  .main{
   padding:30px;
   position: absolute;
   top: 50%;
   left: 50%;
   width: 550px;
   transform: translate(-50%,-50%);
   color: #fff;
   /* background-color: rgb(81, 55, 129); */
   display: block;
   border-radius: 10px;
   z-index:999

  }

  input[type=text]{
    background-color: #362365;
    color: blanchedalmond;
    width: 100%;
    height: 50px;
    padding: 15px;
    border:none;
    border-radius: 4px;
    font-size: 20px;
    font-family: 'Press Start 2P', cursive;

  }

    input[type=text]:focus{
    background-color: rgb(52, 36, 66);
    color: blanchedalmond;
    padding: 15px;
    outline: none;
    border-radius: 4px;
    
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: rgb(99, 92, 93);
}

.list-group{
  margin: 30px 0px;
  border-radius: 8px;
  overflow: scroll;
  height: 300px;
  overflow-x: hidden;
  
}

.list{
   width: 100%;
   height: 60px;
   background-color: #2c2156cc;
   margin: 2px;
   text-align: left;
   padding: 15px 20px;
   color: blanchedalmond;
   font-family: 'Press Start 2P', cursive;
   font-size: 15px;
   z-index:1
  

  }
  .list span { 
   
    
    cursor: pointer;
    font-size: 20px;
    float:right;
    padding-right:10px;
    color: blanchedalmond;
    
  }
  .newList span {
    padding: 10px;
    position:absolute;
    float: right;
    right:7%;
    cursor:pointer;
    font-size: 20px;
    color: blanchedalmond;
  }
  .searchTodo span{
    padding: 10px;
    position:absolute;
    float: right;
    right:7%;
    cursor:pointer;
    font-size: 20px;
    color: blanchedalmond;
  }
  .imgSvg img{
    position: absolute;
    width: 600px;
    bottom: 0;
    right: 0;
    opacity: 0.4;
  }  


  /*---- animation create for the div ---*/

  .slide-enter{
    opacity:0;
  }
  .slide-enter-active{
    animation:slide-in 1s ease-out forwards;
    transition:opacity .5s;

  }
  .slide-leave{
    

  }
  .slide-leave-active{
    animation:slide-out 1s ease-out forwards;
    transition: opacity .5s;
    opacity:0;
    position:absolute
  }
  .slide-move{
    transition:transform 1s;
  }

@keyframes slide-in {
  from{
    transform:translateY(20px);
  }
  to{
    transform:translateX(0);
  }
}

@keyframes slide-out {
  from{
    transform:translateX(0);
  }
  to{
    transform:translateY(20px);
  }
}






</style>









