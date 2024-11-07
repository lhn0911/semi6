<template>
  <div class="personal-info-container">
    <div class="certificate-container">
      <h2 class="title">Danh sách Chứng chỉ</h2>
      <p class="subtitle">Hãy xem và cập nhật chứng chỉ của bạn.</p>

      <button class="add-button">+ Thêm chứng chỉ</button>

      <table class="certificate-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Loại chứng chỉ/bằng cấp</th>
            <th>Xếp loại</th>
            <th>Thời hạn/ Ngày cấp</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cert, index) in userCertificates" :key="cert.id">
            <td>{{ index + 1 }}</td>
            <td>{{ cert.certificateValue }}</td>
            <td>{{ cert.rating || "N/A" }}</td>
            <td>{{ formatDate(cert.expirationDate) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
    <script setup>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

const store = useStore();

const userCertificates = computed(() => store.state.certify.userCertificate);

onMounted(() => {
  store.dispatch("fetchAllUserCertificates");
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN");
};
</script>
  
    <style scoped>
.personal-info-container {
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: system-ui, -apple-system, sans-serif;
  padding-top: 5rem;
}

.certificate-container {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin: 0 auto;
  gap: 80px;
  align-items: flex-start;
  width: 100%;
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: #222;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
}

.add-button {
  background-color: #f87171;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;
  display: inline-flex;
  align-items: center;
}

.add-button:hover {
  background-color: #ef4444;
}

.certificate-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
}

.certificate-table th,
.certificate-table td {
  padding: 12px;
  text-align: left;
  font-size: 14px;
}

.certificate-table th {
  background-color: #fee2e2;
  color: #dc2626;
  font-weight: 500;
}

.certificate-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.certificate-table tr:hover {
  background-color: #fef2f2;
}
</style>