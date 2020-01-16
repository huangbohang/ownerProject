<template>
  <div class="blog-group">
    <div class="blog-item">
      <div class="item-tro-content">
        <h4 class="title">这是内容标题</h4>
        <div class="content">内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写
          内容简写

        </div>
        <div class="handle">
          <span>{{ new Date() }}</span>
          <el-divider direction="vertical" />
          <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
          <el-divider direction="vertical" />
          <el-button type="danger" icon="el-icon-delet" size="mini">删除</el-button>
        </div>
      </div>
      <div class="item-tro-img">
        <img src="@/assets/image/bk.jpg" alt="">
      </div>
    </div>
    <div class="dotted" />
  </div>

</template>

<script>
export default {
  name: 'Item',
  props: {},
  data() {
    return {}
  },
  mounted() {
  },
  methods: {}
}
</script>
<style scoped lang="scss">
  .blog-group{
    width: 80%;
    margin: auto;
    .blog-item {
      cursor: pointer;
      display: flex;
      padding-top: 20px;

      .item-tro-content {
        flex: 1;
        padding-right: 20px;

        .title {
          color: white;
          padding-bottom: 20px;
        }

        .content {
          transition: color .3s;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-size: 14px;
        }

        .handle {
          display: flex;
          align-items: center;
          padding: 20px 0;
        }
      }

      .item-tro-img {
        width: 200px;
        height: 100px;
        img {
          border-radius: 10px;
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .dotted{
    border-color: #e8e8e8;
    border-style: dashed;
    border-width: 1px 0 0;
    display: block;
    clear: both;
    width: 100%;
    min-width: 100%;
    height: 1px;
    margin: 24px 0;
  }
  .blog-item:hover .content{
    color:#bbbbbb;
  }
</style>
