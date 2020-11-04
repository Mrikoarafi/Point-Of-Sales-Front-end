<template>
  <div class="row justify-content-center mx-3 mx-lg-4 mb-lg-5">
    <div class="col col-lg-12 canvus mt-3 mt-lg-n3  ">
      <div class="container">
        <div class="row pl-0 pr-0 justify-content-between mt-4 ">
          <div class="pl-0 pr-0 col-3 my-auto text-left">
            <h4>Revenue</h4>
          </div>
          <div class="pl-0 pr-0 col-3 my-auto text-right">
            <button
              class="month  ml-auto text-white btn btn-sm dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              Month
            </button>
          </div>
        </div>
        <div class="row mt-4 pl-0 pr-0 ">
          <div class="col-12 pl-0 pr-0 ">
            <canvas id="my-chart"> </canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  data () {
    return {
      bar: null
    }
  },
  methods: {
    renderChart () {
      this.bar = new Chart(document.getElementById('my-chart'), {
        type: 'line',
        data: {
          labels: ['', '', '', '', '', '', '  '],
          datasets: [
            {
              label: 'This Month',
              fill: false,
              borderColor: '#00F1FF',
              data: [0, 20, 10, 29, 21, 40, 15, 42]
            },
            {
              label: 'Last Month',
              fill: false,
              borderColor: 'red',
              data: [10, 30, 5, 35, 38, 12, 21, 12]
            }
          ]
        },
        options: {
          legend: {
            display: true,
            position: 'bottom'
          },
          scales: {
            xAxes: [
              {
                display: false
              }
            ]
          },
          elements: {
            line: {
              tension: 0
            }
          }
        }
      })
    }
  },
  mounted () {
    this.renderChart()
  }
}
</script>

<style>
canvas {
  height: 400px;
  width: auto;
}
.canvus {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.month {
  border-radius: 40px !important;
  height: 35px;
  background-color: #c0c0c0 !important;
}
</style>
