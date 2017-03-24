<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="article in articles">
        <div class="m-img inl-block">
          <img v-bind:src="article.images.small" />
        </div>
        <div class="m-content inl-block">
          <div>{{article.title}}</div>
          <div>年份:{{article.year}}</div>
          <div>类型:{{article.subtype}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '电影世界',
      articles: []
    }
  },
  created: function () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {

      },
      emulateJSON: true
    }).then(function (response) {
      console.log(response)
      this.articles = response.data.subjects
    }, function (response) {
      console.log(response)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li{
border-bottom: 1px solid #999;
padding: 10px 0;
}

.inl-block{
display: inline-block;
}

.m-img{
  
}
.m-content{
margin-left: 20px;
}
</style>
