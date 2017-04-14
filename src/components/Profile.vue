<template>
  <!--
    每個檔案都是一個 component
    都一定要有 template
    也可以指定其他語法 ex: <template lang="jade">
    不過他會叫你裝一些東西 ex: jade or pug
  -->
  <div>
    <!--
      一定要單一根節點
    -->
    <ul>
      <li><b>Name: </b>{{ name }}</li>
      <li><b>Email: </b>{{ email }}</li>
      <li><b>Description: </b><p v-html="getDescriptionHtml"></p></li>
    </ul>
    <input :value="name" @input="updateName( $event.target.value )">
    <textarea rows="3" :value="description" @input="updateDescription( $event.target.value )"></textarea>
    <button @click="updateNameActions">Change Name to 'Zet' after 1000 ms</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
  // export 一個 Vue 的 option object
  export default {
    // props 可以是 array or object
    // 以下範例，可是其實沒用到 props
    // props: [],
    props: {
      price: {
        type: Number,
        default: 100
      }
    },
    data() { return {} },
    computed: {
      ...mapState('User', [
        'name',
        'email',
        'description'
      ]),
      ...mapGetters('User', [
        'getDescriptionHtml'
      ])
    },
    methods: {
      ...mapMutations('User', [
        'updateName',
        'updateDescription'
      ]),
      ...mapActions('User', [
        'updateNameActions'
      ])
    }
    // 以上常用
  }
</script>

<style scoped>
/*
  加 scoped 就只有這個 component 能用，全域的可以寫在 src 裡
  也可以指定其他語法 ex: <style lang="scss">
  不過他也會叫你裝一些東西 ex: sass-loader
*/
li {
  list-style-type: none;
}

p {
  padding: 10px;
  border: 1px solid;
  border-radius: 3px;
}

</style>