<template>
  <div
    class="container-fluid"
    style="overflow: hidden !important; overflow-x: hidden !important"
  >
    <Navbar2 />

    <div class="row text-center">
      <Sidebar />
      <div class="pl-0 pr-0 col-12 col-md-11">
        <div class="row">
          <div class="col pl-0 pr-0 col-lg-12 mt-n1 content pb-lg-5">
            <div class="container-fluid mt-3">
              <div
                class="row d-flex justify-content-center mx-1 mx-lg-3 justify-content-md-between"
              >
                <div class="col-12 col-md-4 col-lg-4">
                  <div class="shadowCard1 row m-1 mx-n1 rounded-lg d-flex">
                    <span class="dot dot1"></span>
                    <span class="dot dot2"></span>
                    <span class="dot dot3"></span>
                    <div class="col text-left my-5 ml-1">
                      <div class="today">Today's Income</div>
                      <div class="rP mt-3 mb-1 font-weight-bold d-block">
                        Rp.1.000.000
                      </div>
                      <div class="tax">+2% Yesterday</div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 col-lg-4 mt-2 mt-md-0">
                  <div class="shadowCard2 row m-1 mx-n1 rounded-lg">
                    <span class="dot dot1"></span>
                    <span class="dot dot2"></span>
                    <span class="dot dot3"></span>
                    <div class="col text-left my-5 ml-1">
                      <div class="today">Orders</div>
                      <div class="rP mt-3 mb-1 font-weight-bold d-block">
                        3.270
                      </div>
                      <div class="tax">+5% Last Week</div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 col-lg-4 mt-2 mt-md-0">
                  <div class="shadowCard3 row m-1 mx-n1 rounded-lg">
                    <span class="dot dot1"></span>
                    <span class="dot dot2"></span>
                    <span class="dot dot3"></span>
                    <div class="col text-left my-5 ml-1">
                      <div class="today">This Year’s Income</div>
                      <div class="rP mt-3 mb-1 font-weight-bold d-block">
                        Rp.100.000.000.000
                      </div>
                      <div class="tax">+10% Last Year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChartJs />
        <div class="row justify-content-center mx-3 mx-lg-4 mb-lg-5 recentOder">
          <div class="col col-lg-12 canvus mt-4 mt-lg-0 ">
            <div class="container mb-3">
              <div class="row pl-0 pr-0 justify-content-between mt-4">
                <div class="pl-0 pr-0 col-lg-3 col-5 my-auto text-left ">
                  <h5 class="my-auto">Recent Order</h5>
                </div>
                <div class="pl-0 pr-0 col-3 my-auto text-right">
                  <button
                    class="month ml-auto text-white btn btn-sm dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                  >
                    Today
                  </button>
                </div>
              </div>
              <div class="row mt-4 mr-lg-n5 ml-lg-n5">
                <div class="col-12 table-responsive-md">
                  <table class="table table-hover pr-lg-4">
                    <thead class="table-borderless">
                      <tr>
                        <th scope="col">INVOICES</th>
                        <th scope="col">CASHIER</th>
                        <th scope="col">DATE</th>
                        <th scope="col">ORDERS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Cashier 1</td>
                        <td>06 OCTOBER 2019</td>
                        <td>Ice Tea Salad,With Popput</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>12 SEPTEMBER 2019</td>
                        <td>Espresso</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>11 Agustus 2019</td>
                        <td>Ice Cream</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SidebarHp />
  </div>
</template>

<script>
import Navbar2 from '../components/NavHistory'
import SidebarHp from '../components/Appuse/SidebarHp'
import Sidebar from '../components/Sidebar'
import ChartJs from '../components/Chart'
export default {
  data () {
    return {
      History: []
    }
  },
  components: {
    Navbar2,
    SidebarHp,
    ChartJs,
    Sidebar
  }
}
</script>

<style>
/* rounded */
.dot {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: absolute;
  background: rgba(207, 246, 253, 0.2);
}
.dot1 {
  right: 25px;
  top: 10px;
}
.dot2 {
  right: 55px;
  top: 35px;
}
.dot3 {
  right: 95px;
  bottom: 50px;
}
/* card1 */
.shadowCard1 {
  background: linear-gradient(
    278.29deg,
    #fbb2b4 30.05%,
    rgba(255, 143, 178, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.4));
}
.shadowCard2 {
  background: linear-gradient(
    278.29deg,
    #29dfff 30.05%,
    rgba(41, 223, 255, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.4));
}
.shadowCard3 {
  background: linear-gradient(
    278.29deg,
    #aa83c7 30.05%,
    rgba(241, 201, 236, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 5));
}
/* today */
@media screen and (max-width: 766px) {
  div.today {
    font-size: 22px;
    font-weight: 600;
  }
  div.rP {
    font-size: 30px;
  }
  div.tax {
    font-size: 15px;
  }
  .recentOder{
    margin-bottom:100px;
  }
}
@media screen and (min-width: 767px) {
  div.today {
    font-size: 18px;
    font-weight: 500;
  }
  div.rP {
    font-size: 21px;
  }
  div.tax {
    font-size: 15px;
  }
}
@media screen and (min-width: 1140px) {
  div.today {
    font-size: 19px;
  }
  div.rP {
    font-size: 32px;
  }
  div.tax {
    font-size: 17px;
  }
}
</style>
