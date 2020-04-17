class panicbutton {
    constructor(url) {
        this.init(url)
    }
    init(url = "https://cn.bing.com/search?q=COVID-19") {
        var style = document.createElement("style");
        style.textContent = '.panicbutton{' +
            'background: #fd2525;' +
            'color: rgb(255, 234, 234);' +
            'width: 100px;' +
            'height: 100px;' +
            'border-radius: 50%;' +
            'border-width: thick;' +
            'font-size: 30px;' +
            'position: fixed;' +
            'z-index: 99999;' +
            'bottom: 0;' +
            'left: 0;' +
            'cursor:pointer;}' +
            '.panicbutton:focus{outline:none}';
        var btn = document.createElement("button");
        btn.classList.add("panicbutton");
        btn.textContent = "Panic";
        btn.id = "btn_panic";
        btn.onclick = function () {
            var a = document.createElement("a");
            a.target = "_blank";
            a.href = url;
            a.onclick = function () {
                window.close();
            }
            document.body.append(a);
            a.click();
        }
        document.body.append(style);
        document.body.append(btn);
    }
}
