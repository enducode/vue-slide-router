
class Swiper {
    constructor(container, tabList, $route) {
        this.distanceX = 0;
        this.startX = 0;
        this.container = container;
        this.$route = $route;
        console.log(this.$route);
        console.log(container);
        this.init();
    }
    touchedstartHandler(e) {
        this.startX = e.changedTouches[0].pageX;
        console.log(e.changedTouches[0]);
    }
    touchmoveHandler(e) {
        //console.log(e.changedTouches[0]);
    }
    touchendHandler(e) {
        this.distanceX = e.changedTouches[0].pageX;
        let direction = this.startX - this.distanceX;
        if (direction >= 0) {
            this.$route.go(1);
        } else {
            this.$route.go(-1);
        }
        console.log(e.changedTouches[0]);
    }
    init() {
        this.container.addEventListener('touchstart', this.touchedstartHandler.bind(this));
        this.container.addEventListener('touchmove', this.touchmoveHandler.bind(this));
        this.container.addEventListener('touchend', this.touchendHandler.bind(this));
    }
}

export default Swiper;
