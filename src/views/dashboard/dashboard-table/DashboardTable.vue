<template>
  <el-table :data="tableData" class="dashboard-table">
    <el-table-column prop="order_No" label="order_No" />
    <el-table-column prop="price" label="Price" width="120" align="center" />
    <el-table-column prop="status" label="Status" width="120" align="center">
      <template #default="scope">
        <div :class="`table_${scope.row.status}`" class="table-tag">
          <span>{{ scope.row.status }}</span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
const tableData = [
  {
    order_No: '7a4ED485-1181-360e-fB22-0eEe44',
    price: '¥8,186.7',
    status: 'success'
  },
  {
    order_No: 'aAf9A627-858F-2e97-9D0D-68d510',
    price: '¥11,944.9',
    status: 'pending'
  },
  {
    order_No: 'BB5bd6b3-dBe4-f7A6-59ee-B3eAf6',
    price: '¥2,053.27',
    status: 'success'
  },
  {
    order_No: '6c6cc9Dc-ef8D-bb2C-7Afc-3B2e8b',
    price: '¥9,937.3',
    status: 'success'
  },
  {
    order_No: 'F23963FF-1cb3-e658-7Fd9-78c9DA',
    price: '¥1,111',
    status: 'pending'
  },
  {
    order_No: 'BBfBEAf2-1644-44C3-61eF-9D7d8D',
    price: '¥14,036.6',
    status: 'pending'
  },
  {
    order_No: '165c815e-4FCe-B3Ba-de63-ded7FC',
    price: '¥2,655.3',
    status: 'success'
  }
]
</script>
<style scoped>
.dashboard-table {
  height: 100%;
  width: 50%;
  margin-top: 30px;
}

.table-tag {
  width: 75px;
  display: inline-block;
  padding: 5px 10px;
  text-align: center;
}
.table_success {
  background-color: #ffeded;
}
.table_pending {
  background-color: rgb(142, 223, 223);
}
</style>
