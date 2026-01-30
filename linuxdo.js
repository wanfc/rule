// ==UserScript==
//  LINUX DO 盲水印封杀 (通用版)
// @namespace    http://tampermonkey.net/
// @description  劫持浏览器底层 API，从源头阻止任何用户 ID 水印的生成与平铺
// @run-at       document-start
// [url=home.php?mod=space&uid=66553]@Grant[/url]        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    /**
     * 1. API 劫持层：让浏览器“画不出”水印
     */
    if (window.CanvasRenderingContext2D) {
        const proto = CanvasRenderingContext2D.prototype;

        // 拦截 createPattern：这是平铺水印的核心 API
        // 只要脚本尝试创建平铺图案，我们直接返回一个 1x1 的纯透明像素
        const originalCreatePattern = proto.createPattern;
        proto.createPattern = function() {
            const emptyCanvas = document.createElement('canvas');
            emptyCanvas.width = 1;
            emptyCanvas.height = 1;
            return originalCreatePattern.call(this, emptyCanvas, 'no-repeat');
        };

        // 拦截 fillText：防止脚本在任何画布上写字（如 ID 字符）
        const originalFillText = proto.fillText;
        proto.fillText = function() {
            // 直接忽略所有绘图指令
            return;
        };

        // 拦截 strokeText
        const originalStrokeText = proto.strokeText;
        proto.strokeText = function() {
            return;
        };
    }

    /**
     * 2. CSS 样式层：切断所有已存在的显示路径
     */
    const css = `
        /* 强制去除背景图和混合滤镜 */
        html, body, #main, #main-outlet, .full-width, .ember-view, .topic-post {
            background-image: none !important;
            mask-image: none !important;
            -webkit-mask-image: none !important;
            filter: none !important;
            -webkit-filter: none !important;
            mix-blend-mode: normal !important;
        }

        /* 强制背景设为实体颜色，确保底层无法透射 */
        body, #main-outlet {
            background-color: #111111 !important;
        }

        /* 禁用所有伪元素生成的内容 (这是大部分 Discourse 水印的挂载方式) */
        *::before, *::after {
            content: none !important;
            background: none !important;
            background-image: none !important;
        }

        /* 白名单：恢复论坛必要的图标显示 */
        .fa::before, .d-icon::before, .svg-icon::before {
            content: cite !important;
            display: inline-block !important;
        }

        /* 隐藏所有 Canvas 元素 */
        canvas {
            display: none !important;
            visibility: hidden !important;
        }
    `;

    if (typeof GM_addStyle !== "undefined") {
        GM_addStyle(css);
    } else {
        const style = document.createElement('style');
        style.innerHTML = css;
        (document.head || document.documentElement).appendChild(style);
    }

    /**
     * 3. 动态清理层：物理移除 fixed 遮罩
     */
    const nukeFixed = () => {
        document.querySelectorAll('body > div').forEach(div => {
            const s = window.getComputedStyle(div);
            // 典型水印层特征：固定定位、不可点击、层级极高
            if (s.position === 'fixed' && s.pointerEvents === 'none' && !div.classList.contains('d-header-wrap')) {
                div.remove();
            }
        });
    };

    setInterval(nukeFixed, 1000);
})();
