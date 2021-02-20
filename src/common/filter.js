
export default {
    /**
     * 格式化金额
     */
    fmoney(s, n) {
        if (s == 0) {
            s = s + "";
        }
        if (!s) return "--"; // 避免传参为空方法调用失败
        if (s == "--") return "--";
        s = s + "";
        n = n > 0 && n <= 20 ? n : 2;
        let startStr = "";
        if (s.substr(0, 1) == "-" || s.substr(0, 1) == "+") { //兼容负数、证书处理,截取 “-” “+”，数据处理完成再添加
            startStr = s.substr(0, 1);
            s = s.substr(1, s.length - 1);
        }
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";//更改这里n数也可确定要保留的小数位
        let l = s.split(".")[0].split("").reverse(),
                r = s.split(".")[1];
        let t = "";
        for (let i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return startStr + t.split("").reverse().join("") + "." + r.substring(0, n);//保留2位小数  如果要改动 把substring 最后一位数改动就可
    },
    /**
     * 格式化时间
     */
    ftime(date, symbol) {
        if (date == "--") return date;
        if (!date) return "--"; //日期无效，返回 --
        date = date + "";
        symbol = symbol || "-";
        if (date && date.length == 8) {
            return date.substr(0, 4) + symbol + date.substr(4, 2) + symbol + date.substr(6, 2)
        } else if (date && date.length == 6) {
            return date.substr(0, 2) + ":" + date.substr(2, 2) + ":" + date.substr(4, 2);
        } else if (date && date.length == 14) {
            return date.substr(0, 4) + symbol + date.substr(4, 2) + symbol + date.substr(6, 2) + " " + date.substr(8, 2) + ":" +
                    date.substr(10, 2) + ":" + date.substr(12, 2);
        } else if (date && date.length == 4) {
            return date.substr(0, 2) + symbol + date.substr(2, 2);
        } else if (date) {
            return date;
        } else {
            return "";
        }
    },

    /** 数字金额大写转换(可以处理整数,小数,负数) */
    numtoCN: function (n) {
        n = n.replace(",", "");
        if (n.indexOf(".") == 0 && n.length == 1) return; //如果只有小数点，不做格式化
        let fraction = ['角', '分'];
        let digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        let unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
        let head = n < 0 ? '欠' : '';
        n = Math.abs(n);

        let s = '';

        for (let i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);

        for (let i = 0; i < unit[0].length && n > 0; i++) {
            let p = '';
            for (let j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
    }
}
