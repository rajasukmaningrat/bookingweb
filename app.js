const BASE_URL_API = "https://api.deaidea.io"

const lapangan = document.getElementById("lapangan")
const bookingList = document.getElementById("booking-list")
const tanggal = document.getElementById("tanggal")

function formatdate() {
  const hariIni = new Date().toLocaleDateString()
}

async function loadBooking(){
    const urlAPI = `${BASE_URL_API}/bookings`
    const response = await fetch(urlAPI)
    const result = await response.json()
    renderBooking(result.data)
}

function renderBooking(dataList) {
    dataList.forEach(data => {
      const tableRow = document.createElement("tr");  
      tableRow.innerHTML = `
        <td>${data.court_id}</td>
        <td>${data.customer_name}</td>
        <td>${data.booking_date}</td>
        <td>${data.start_time}</td>
        <td>${data.duration_hours} Jam</td>
      `
      bookingList.appendChild(tableRow)
    })
}

async function loadLapangan() {
    const urlAPI = `${BASE_URL_API}/courts`
    const response = await fetch(urlAPI)
    const result = await response.json()
    renderLapangan(result.data)
}

function renderLapangan(courts) {
    lapangan.innerHTML = "" 
    courts.forEach(court => {
        const option = document.createElement("option")
        option.text = court.name
        option.value = court.id
        lapangan.appendChild(option)
    })
}

function init() {
    tanggal()
    loadLapangan()
    loadBooking()
}

init()