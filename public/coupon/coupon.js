import '/coupon/js/request.js'
import '/coupon/js/bus.js'
import { createApp } from '/coupon/js/vue.js'
// import('/coupon/coupon.css')
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/coupon/coupon.css';
document.head.appendChild(link);


const url = new URL(window.location.href)
window.coupon = {
	data: {},
	winAmount: 0,
  activeMode:0,
	isCoupon: url.searchParams.get('couponId') != undefined ? 1 : 0 ?? 0,
	couponId: url.searchParams.get('couponId')||0,
}
const app = document.createElement('div')
app.id = 'couponApp'
document.body.appendChild(app)
// Vue 应用
createApp({
	// 模板可以直接写在这里

	template: /*template*/ `
    <div class="coupon_app" >
    <div class="coupon_content_base_box" v-if="activeMode==1">
      <div class="coupon_content_box" >
        <div class="text">
          <div >Free bets</div>
          <div >available</div>
        </div>
        <div  class="num_box">
          <div class="num">{{couponData.num}}</div>
          <div class="amount">({{couponData.amount}} INR)</div>
        </div>
        <div class="winBox">
          <div class="win_text">Win INR</div>
          <div class="win_num">{{Number(winAmount).toFixed(2)}}</div>
        </div>
      </div>
      <div class="coupon_setting">
        <div class="text" @click="showModePopup=showModePopup==1?0:1">Manage</div>
        <img class="img" src="/coupon/img/icon_setting.png" @click="showModePopup=showModePopup==1?0:1" />
      </div>
    </div>
    <div class="coupon_popup_box_bg" v-if="showModePopup==1">
    <div class="coupon_popup_box" >
      <div class="title_box">
        <div class="title">FREE BETS MANAGEMENT</div>
        <img class="close_img" src="/coupon/img/icon_X.png" @click="showModePopup=0" />
      </div>
      <div class="content_box">
        <div class="play_cash" :class="{active:activeMode==0}" @click="handleMode(0)">
          <img v-if="activeMode==0" src="/coupon/img/image_yq2.png" />
          <img v-else src="/coupon/img/image_yq1.png" />
    
          <span>Play With cash</span>
        </div>
        <div class="active_text_box">
          <span>ACTIVE FREE BETS</span>
          <div class="img">
          Archive
          </div>
        </div>
        <div class="table_text">
          <span>Quantity</span>
          <span>Bet INR</span>
          <span>Win INR</span>
        </div>
        <div v-if="couponData.id" class="coupon_box " :class="{active:activeMode==1}" @click="handleMode(1)">
          <img v-if="activeMode==1" class="btn_img" src="/coupon/img/image_yq2.png" />
          <img v-else class="btn_img" src="/coupon/img/image_yq1.png" />

          <div class="table_num">
            <span>{{couponData.num}}</span>
            <span>{{ Number(couponData.amount).toFixed(2)}}</span>
            <span>{{Number(winAmount).toFixed(2)}}</span>
          </div>
          <div class="text_box">
            <div>Granted</div>
            <div>Min.cash out multiplier: <span>1.01</span></div>
            <div>Expires:</div>
          </div>
        </div>
        <div v-else style="height:50px">
        
        </div>
      </div>

    </div>
    </div>
    </div>

  `,
	// <p>优惠券价值：{{ couponData.amount }}</p>
	// <p>优惠券数量：{{ couponData.num }}</p>
	// <p>优惠券数量：{{ winAmount }}</p>
	data: () => ({
		couponData: {
			amount: 0,
			num: 0,
		},
		winAmount: 0,
		activeMode: 0, // 0 正常下注 1 游戏券
		showModePopup: 0,
		isCoupon: 0,
	}),
	async mounted() {
		await this.init()

		window.$bus.on('getCouponInfo', this.getCouponInfo)
		window.$bus.on('openModePopup', () => {
			this.showModePopup = 1
			this.getCouponInfo()
		})
    window.$bus.on('handleMode', (e) => {
			this.handleMode(e)
		})

		const that = this
		Object.defineProperty(window.coupon, 'winAmount', {
			get() {
				return this._value || 0
			},
			set(newValue) {
				console.log(`value 改变为 ${newValue}`)
				that.winAmount = newValue
				this._value = newValue
			},
		})

    // 如果需要重新加载
    // window.$bus.on('modeChange',(e)=>{
    //   const u = new URL(window.location.href); // 保证相对路径也能解析
    //   u.searchParams.delete('couponId'); // 删除参数
    //   window.location.href = u.toString();
    // })
	},
	methods: {
		async init() {
			if(!window.coupon.couponId) return 
      await this.getCouponInfo()
			if (window.coupon.isCoupon == 1) this.isCoupon = 1
			if (this.couponData.num >= 1) {
				this.handleMode(1)
			} else {
				this.handleMode(0)
			}
		},
		handleMode(mode) {
			this.activeMode = mode
			if (mode == 0) {
				window.coupon.activeMode = 0
        window.coupon.couponId = 0
        this.showModePopup = 0
        this.couponData =  {num:0}
			} else {
				window.coupon.activeMode = 1
			}
		  window.$bus.emit('modeChange',window.coupon.activeMode)
		},
		getCouponInfo() {
			return new Promise((resolve, reject) => {
				request.get('/api/game/coupon/get', {
          params: {
            cid: window.coupon.couponId,
          }}).then((res) => {
					this.couponData = res.data || {num:0}
					window.coupon.data = this.couponData || {num:0}
					console.warn(res.data)
					resolve()

					console.warn(this.$data)
				})
			})
		},
	},
}).mount('#couponApp')
