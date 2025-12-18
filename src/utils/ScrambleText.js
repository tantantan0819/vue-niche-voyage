// ScrambleText 插件核心代码（GSAP 3 兼容版）
import { gsap } from "gsap";

const ScrambleText = {
    name: "scrambleText",
    register() {
        gsap.registerPlugin(ScrambleText);
    },
    init(target, vars) {
        const el = target;
        const originalText = el.textContent.trim();
        const newText = vars.text || originalText;
        const chars = vars.chars || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
        const speed = vars.speed || 0.1;
        const revealDelay = vars.revealDelay || 0;
        const newClass = vars.newClass || "";

        let charIndex = 0;
        let scrambleInterval;
        let revealTimer;

        // 清除原有样式/文本
        el.textContent = "";
        if (newClass) el.className = newClass;

        // 随机字符替换逻辑
        const scramble = () => {
            let scrambled = "";
            for (let i = 0; i < newText.length; i++) {
                if (i < charIndex) {
                    scrambled += newText[i];
                } else {
                    scrambled += chars[Math.floor(Math.random() * chars.length)];
                }
            }
            el.textContent = scrambled;
            if (charIndex >= newText.length) {
                clearInterval(scrambleInterval);
            }
        };

        // 逐步显示目标文本
        revealTimer = setTimeout(() => {
            scrambleInterval = setInterval(() => {
                charIndex++;
                scramble();
            }, speed * 1000);
        }, revealDelay * 1000);

        // 初始化立即执行一次
        scramble();

        // GSAP 插件销毁逻辑
        this.kill = () => {
            clearInterval(scrambleInterval);
            clearTimeout(revealTimer);
            el.textContent = originalText;
            if (newClass) el.classList.remove(newClass);
        };

        return this;
    },
};

// 自动注册插件
ScrambleText.register();

export default ScrambleText;