<template>
  <v-container class="filter-container">
    <v-row>
      <!-- 地區篩選 -->
      <v-col cols="4" class="px-1 py-2">
        <v-select
          v-model="selectedRegion"
          :items="regions"
          label="選擇地區"
          solo
          hide-details
        ></v-select>
      </v-col>

      <!-- 通路篩選 -->
      <v-col cols="4" class="px-1 py-2">
        <v-select
          v-model="selectedChannel"
          :items="channels"
          label="選擇通路"
          solo
          hide-details
        ></v-select>
      </v-col>

      <!-- 機台狀態篩選 -->
      <v-col cols="4" class="px-1 py-2">
        <v-select
          v-model="selectedStatus"
          :items="statuses"
          label="選擇機台狀態"
          solo
          hide-details
        ></v-select>
      </v-col>
    </v-row>
    <v-row
      ><!-- 關鍵字搜尋 -->
      <v-col cols="12" class="px-1 py-0">
        <v-text-field
          v-model="keyword"
          label="搜尋機台名稱"
          clearable
          solo
          hide-details
        ></v-text-field> </v-col
    ></v-row>
  </v-container>
  <v-container>
    <!-- 篩選結果列表 -->
    <v-row>
      <v-col cols="12">
        <v-list class="pt-0">
          <v-list-item v-for="machine in filteredMachines" :key="machine.id">
            <MachineCard :machine="machine" @view-details="handleViewDetails" />
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <!-- 彈出 MachineDetail Modal -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">機台詳細資訊</span>
        </v-card-title>
        <v-card-text>
          <MachineDetail :machine="selectedMachine" />
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="dialog = false">關閉</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import MachineCard from '@/components/MachineCard.vue'
import MachineDetail from '@/components/MachineDetail.vue'
export default {
  components: {
    MachineCard,
    MachineDetail,
  },
  data() {
    return {
      dialog: false, // 用來控制 modal 是否顯示
      selectedMachine: null, // 當前選中的機台
      // 篩選條件
      selectedRegion: '全部',
      selectedChannel: '全部',
      selectedStatus: '全部',
      keyword: '',

      // 篩選選項
      regions: ['全部', '台南市', '台中市', '高雄市', '台北市'],
      channels: ['全部', '億進', '全國', '全國電子'],
      statuses: ['全部', '正常', '離線'],

      // 機台列表
      machines: [
        {
          id: 1,
          name: '機台A',
          region: '台南市',
          channel: '億進',
          status: '正常',
          capacity: '160公升',
          lastStatusUpdate: '2024-11-07 14:42:20',
          mode: '正式',
        },
        {
          id: 2,
          name: '機台B',
          region: '台中市',
          channel: '全國',
          status: '離線',
          capacity: '120公升',
          lastStatusUpdate: '2024-11-07 09:10:15',
          mode: '測試',
        },
        {
          id: 3,
          name: '機台C',
          region: '高雄市',
          channel: '全國電子',
          status: '正常',
          capacity: '180公升',
          lastStatusUpdate: '2024-11-06 18:30:45',
          mode: '正式',
        },
        {
          id: 4,
          name: '機台D',
          region: '台北市',
          channel: '億進',
          status: '離線',
          capacity: '100公升',
          lastStatusUpdate: '2024-11-05 10:15:30',
          mode: '測試',
        },
        {
          id: 5,
          name: '機台E',
          region: '台南市',
          channel: '億進',
          status: '正常',
          capacity: '140公升',
          lastStatusUpdate: '2024-11-04 15:45:10',
          mode: '正式',
        },
        {
          id: 6,
          name: '機台F',
          region: '台中市',
          channel: '全國',
          status: '正常',
          capacity: '200公升',
          lastStatusUpdate: '2024-11-07 12:00:00',
          mode: '測試',
        },
        {
          id: 7,
          name: '機台G',
          region: '高雄市',
          channel: '全國電子',
          status: '離線',
          capacity: '80公升',
          lastStatusUpdate: '2024-11-06 16:30:20',
          mode: '正式',
        },
        {
          id: 8,
          name: '機台H',
          region: '台北市',
          channel: '億進',
          status: '正常',
          capacity: '170公升',
          lastStatusUpdate: '2024-11-07 13:20:30',
          mode: '測試',
        },
        {
          id: 9,
          name: '機台I',
          region: '台南市',
          channel: '全國電子',
          status: '已停用',
          capacity: '60公升',
          lastStatusUpdate: '2024-11-05 08:40:00',
          mode: '正式',
        },
        {
          id: 10,
          name: '機台J',
          region: '台中市',
          channel: '全國',
          status: '正常',
          capacity: '130公升',
          lastStatusUpdate: '2024-11-06 17:10:50',
          mode: '正式',
        },
      ],
    }
  },
  methods: {
    handleViewDetails(machine) {
      this.selectedMachine = machine // 設置選中的機台
      this.dialog = true // 打開 modal
    },
  },
  computed: {
    // 根據條件過濾的機台清單
    filteredMachines() {
      return this.machines.filter((machine) => {
        const matchesRegion =
          this.selectedRegion === '全部' || machine.region === this.selectedRegion
        const matchesChannel =
          this.selectedChannel === '全部' || machine.channel === this.selectedChannel
        const matchesStatus =
          this.selectedStatus === '全部' || machine.status === this.selectedStatus
        const matchesKeyword = !this.keyword || machine.name.includes(this.keyword)

        return matchesRegion && matchesChannel && matchesStatus && matchesKeyword
      })
    },
  },
}
</script>
<style scoped>
.filter-container {
  position: sticky;
  top: 0;
  background-color: white; /* 設定背景色，防止透明背景影響 */
  z-index: 1; /* 確保篩選區域位於其他元素之上 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 可選：增加陰影效果 */
}
</style>
