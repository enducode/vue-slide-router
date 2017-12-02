
class Swiper {
    constructor(container, tabList, $router, nowPath) {
        console.log($router);
        this.distanceX = 0;
        this.startX = 0;
        this.container = container;
        this.$router = $router;
        this.nowPath = nowPath;
        this.tabList = tabList;
        this.init();
    }
    upDateNowPath(nowPath) {
        this.nowPath = nowPath;
    }
    touchedstartHandler(e) {
        this.startX = e.changedTouches[0].pageX;
    }
    touchendHandler(e) {
        this.distanceX = e.changedTouches[0].pageX;
        let direction = this.startX - this.distanceX;
        let nowRouteIndex = 0;
        this.tabList.forEach((v, index) => {
            if (v.to == this.nowPath) {
                nowRouteIndex = index;
            }
        })
        if (direction >= 0 && nowRouteIndex < this.tabList.length - 1) {
            //向前
            this.$router.push({'path': this.tabList[nowRouteIndex + 1].to});
        } 
        if (direction < 0 && nowRouteIndex > 0) {
            this.$router.push({'path': this.tabList[nowRouteIndex - 1].to});
        }
    }
    init() {
        this.container.addEventListener('touchstart', this.touchedstartHandler.bind(this));
        this.container.addEventListener('touchend', this.touchendHandler.bind(this));
    }
}

export default Swiper;
