(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=Array.from(document.querySelectorAll(`[data-gong-player]`));function t(e,t){if(!Number.isFinite(t.duration)||t.duration<=0){e.style.setProperty(`--progress`,`0%`);return}let n=t.currentTime/t.duration*100;e.style.setProperty(`--progress`,`${n}%`)}function n(e){e.style.setProperty(`--progress`,`0%`)}function r(e,n,r){if(!Number.isFinite(n.duration)||n.duration<=0)return;let i=e.getBoundingClientRect();n.currentTime=Math.min(1,Math.max(0,(r-i.left)/i.width))*n.duration,t(e,n)}function i(e,t){let n=e.querySelector(`.gong-player-toggle`);n&&(n.setAttribute(`aria-pressed`,t?`true`:`false`),e.classList.toggle(`is-playing`,t))}function a(t){e.forEach(e=>{if(e===t)return;let n=e.querySelector(`audio`);!n||n.paused||(n.pause(),i(e,!1))})}e.forEach(e=>{let o=e.querySelector(`.gong-player-toggle`),s=e.querySelector(`.gong-player-seek`),c=e.querySelector(`audio`);!o||!s||!c||(o.addEventListener(`click`,async()=>{if(c.paused){a(e);try{await c.play(),i(e,!0)}catch{i(e,!1)}return}c.pause(),i(e,!1)}),s.addEventListener(`click`,e=>{r(s,c,e.clientX)}),s.addEventListener(`pointerdown`,e=>{if(e.button!==0)return;e.preventDefault(),s.setPointerCapture(e.pointerId),r(s,c,e.clientX);let t=t=>{t.pointerId===e.pointerId&&r(s,c,t.clientX)},n=r=>{r.pointerId===e.pointerId&&(s.releasePointerCapture(e.pointerId),s.removeEventListener(`pointermove`,t),s.removeEventListener(`pointerup`,n),s.removeEventListener(`pointercancel`,n))};s.addEventListener(`pointermove`,t),s.addEventListener(`pointerup`,n),s.addEventListener(`pointercancel`,n)}),c.addEventListener(`timeupdate`,()=>t(s,c)),c.addEventListener(`ended`,()=>{n(s),i(e,!1)}),c.addEventListener(`pause`,()=>i(e,!1)))})}var t={insight:[{source:`./obrazky/insight/img_3882.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/insight/img_3882.JPG`,webp:`./obrazky/insight/img_3882.JPG`},display:{jpeg:`./obrazky/insight/img_3882.JPG`,webp:`./obrazky/insight/img_3882.JPG`}}},{source:`./obrazky/insight/img_3883.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/insight/img_3883.JPG`,webp:`./obrazky/insight/img_3883.JPG`},display:{jpeg:`./obrazky/insight/img_3883.JPG`,webp:`./obrazky/insight/img_3883.JPG`}}},{source:`./obrazky/insight/img_3884.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/insight/img_3884.JPG`,webp:`./obrazky/insight/img_3884.JPG`},display:{jpeg:`./obrazky/insight/img_3884.JPG`,webp:`./obrazky/insight/img_3884.JPG`}}},{source:`./obrazky/insight/img_3893.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/insight/img_3893.JPG`,webp:`./obrazky/insight/img_3893.JPG`},display:{jpeg:`./obrazky/insight/img_3893.JPG`,webp:`./obrazky/insight/img_3893.JPG`}}},{source:`./obrazky/insight/img_3894.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/insight/img_3894.JPG`,webp:`./obrazky/insight/img_3894.JPG`},display:{jpeg:`./obrazky/insight/img_3894.JPG`,webp:`./obrazky/insight/img_3894.JPG`}}},{source:`./obrazky/insight/img_3910.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/insight/img_3910.JPG`,webp:`./obrazky/insight/img_3910.JPG`},display:{jpeg:`./obrazky/insight/img_3910.JPG`,webp:`./obrazky/insight/img_3910.JPG`}}},{source:`./obrazky/insight/img_3921.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/insight/img_3921.JPG`,webp:`./obrazky/insight/img_3921.JPG`},display:{jpeg:`./obrazky/insight/img_3921.JPG`,webp:`./obrazky/insight/img_3921.JPG`}}}],"little-thai":[{source:`./obrazky/little-thai/IMG_3969.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/little-thai/IMG_3969.JPG`,webp:`./obrazky/little-thai/IMG_3969.JPG`},display:{jpeg:`./obrazky/little-thai/IMG_3969.JPG`,webp:`./obrazky/little-thai/IMG_3969.JPG`}}},{source:`./obrazky/little-thai/IMG_3974.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/little-thai/IMG_3974.JPG`,webp:`./obrazky/little-thai/IMG_3974.JPG`},display:{jpeg:`./obrazky/little-thai/IMG_3974.JPG`,webp:`./obrazky/little-thai/IMG_3974.JPG`}}},{source:`./obrazky/little-thai/IMG_3981.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/little-thai/IMG_3981.JPG`,webp:`./obrazky/little-thai/IMG_3981.JPG`},display:{jpeg:`./obrazky/little-thai/IMG_3981.JPG`,webp:`./obrazky/little-thai/IMG_3981.JPG`}}},{source:`./obrazky/little-thai/IMG_3982.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/little-thai/IMG_3982.JPG`,webp:`./obrazky/little-thai/IMG_3982.JPG`},display:{jpeg:`./obrazky/little-thai/IMG_3982.JPG`,webp:`./obrazky/little-thai/IMG_3982.JPG`}}},{source:`./obrazky/little-thai/IMG_3986.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/little-thai/IMG_3986.JPG`,webp:`./obrazky/little-thai/IMG_3986.JPG`},display:{jpeg:`./obrazky/little-thai/IMG_3986.JPG`,webp:`./obrazky/little-thai/IMG_3986.JPG`}}},{source:`./obrazky/little-thai/IMG_3992.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/little-thai/IMG_3992.JPG`,webp:`./obrazky/little-thai/IMG_3992.JPG`},display:{jpeg:`./obrazky/little-thai/IMG_3992.JPG`,webp:`./obrazky/little-thai/IMG_3992.JPG`}}}],"lotus-flower":[{source:`./obrazky/lotus-flower/IMG_4007.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/lotus-flower/IMG_4007.JPG`,webp:`./obrazky/lotus-flower/IMG_4007.JPG`},display:{jpeg:`./obrazky/lotus-flower/IMG_4007.JPG`,webp:`./obrazky/lotus-flower/IMG_4007.JPG`}}},{source:`./obrazky/lotus-flower/IMG_4010.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/lotus-flower/IMG_4010.JPG`,webp:`./obrazky/lotus-flower/IMG_4010.JPG`},display:{jpeg:`./obrazky/lotus-flower/IMG_4010.JPG`,webp:`./obrazky/lotus-flower/IMG_4010.JPG`}}},{source:`./obrazky/lotus-flower/IMG_4012.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/lotus-flower/IMG_4012.JPG`,webp:`./obrazky/lotus-flower/IMG_4012.JPG`},display:{jpeg:`./obrazky/lotus-flower/IMG_4012.JPG`,webp:`./obrazky/lotus-flower/IMG_4012.JPG`}}},{source:`./obrazky/lotus-flower/IMG_4014.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/lotus-flower/IMG_4014.JPG`,webp:`./obrazky/lotus-flower/IMG_4014.JPG`},display:{jpeg:`./obrazky/lotus-flower/IMG_4014.JPG`,webp:`./obrazky/lotus-flower/IMG_4014.JPG`}}},{source:`./obrazky/lotus-flower/IMG_4025.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/lotus-flower/IMG_4025.JPG`,webp:`./obrazky/lotus-flower/IMG_4025.JPG`},display:{jpeg:`./obrazky/lotus-flower/IMG_4025.JPG`,webp:`./obrazky/lotus-flower/IMG_4025.JPG`}}},{source:`./obrazky/lotus-flower/IMG_4037.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/lotus-flower/IMG_4037.JPG`,webp:`./obrazky/lotus-flower/IMG_4037.JPG`},display:{jpeg:`./obrazky/lotus-flower/IMG_4037.JPG`,webp:`./obrazky/lotus-flower/IMG_4037.JPG`}}},{source:`./obrazky/lotus-flower/IMG_4043.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/lotus-flower/IMG_4043.JPG`,webp:`./obrazky/lotus-flower/IMG_4043.JPG`},display:{jpeg:`./obrazky/lotus-flower/IMG_4043.JPG`,webp:`./obrazky/lotus-flower/IMG_4043.JPG`}}}],mandala:[{source:`./obrazky/mandala/img_3853_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/mandala/img_3853_optimized.jpg`,webp:`./obrazky/mandala/img_3853_optimized.jpg`},display:{jpeg:`./obrazky/mandala/img_3853_optimized.jpg`,webp:`./obrazky/mandala/img_3853_optimized.jpg`}}},{source:`./obrazky/mandala/img_3859_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/mandala/img_3859_optimized.jpg`,webp:`./obrazky/mandala/img_3859_optimized.jpg`},display:{jpeg:`./obrazky/mandala/img_3859_optimized.jpg`,webp:`./obrazky/mandala/img_3859_optimized.jpg`}}},{source:`./obrazky/mandala/img_3867_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/mandala/img_3867_optimized.jpg`,webp:`./obrazky/mandala/img_3867_optimized.jpg`},display:{jpeg:`./obrazky/mandala/img_3867_optimized.jpg`,webp:`./obrazky/mandala/img_3867_optimized.jpg`}}},{source:`./obrazky/mandala/img_3869_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/mandala/img_3869_optimized.jpg`,webp:`./obrazky/mandala/img_3869_optimized.jpg`},display:{jpeg:`./obrazky/mandala/img_3869_optimized.jpg`,webp:`./obrazky/mandala/img_3869_optimized.jpg`}}},{source:`./obrazky/mandala/img_3871_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/mandala/img_3871_optimized.jpg`,webp:`./obrazky/mandala/img_3871_optimized.jpg`},display:{jpeg:`./obrazky/mandala/img_3871_optimized.jpg`,webp:`./obrazky/mandala/img_3871_optimized.jpg`}}},{source:`./obrazky/mandala/img_3936_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/mandala/img_3936_optimized.jpg`,webp:`./obrazky/mandala/img_3936_optimized.jpg`},display:{jpeg:`./obrazky/mandala/img_3936_optimized.jpg`,webp:`./obrazky/mandala/img_3936_optimized.jpg`}}},{source:`./obrazky/mandala/img_3939_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/mandala/img_3939_optimized.jpg`,webp:`./obrazky/mandala/img_3939_optimized.jpg`},display:{jpeg:`./obrazky/mandala/img_3939_optimized.jpg`,webp:`./obrazky/mandala/img_3939_optimized.jpg`}}}],nobody:[{source:`./obrazky/nobody/DSC_0889.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nobody/DSC_0889.JPG`,webp:`./obrazky/nobody/DSC_0889.JPG`},display:{jpeg:`./obrazky/nobody/DSC_0889.JPG`,webp:`./obrazky/nobody/DSC_0889.JPG`}}},{source:`./obrazky/nobody/DSC_0890.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nobody/DSC_0890.JPG`,webp:`./obrazky/nobody/DSC_0890.JPG`},display:{jpeg:`./obrazky/nobody/DSC_0890.JPG`,webp:`./obrazky/nobody/DSC_0890.JPG`}}},{source:`./obrazky/nobody/DSC_0891.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nobody/DSC_0891.JPG`,webp:`./obrazky/nobody/DSC_0891.JPG`},display:{jpeg:`./obrazky/nobody/DSC_0891.JPG`,webp:`./obrazky/nobody/DSC_0891.JPG`}}},{source:`./obrazky/nobody/DSC_0894.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nobody/DSC_0894.JPG`,webp:`./obrazky/nobody/DSC_0894.JPG`},display:{jpeg:`./obrazky/nobody/DSC_0894.JPG`,webp:`./obrazky/nobody/DSC_0894.JPG`}}},{source:`./obrazky/nobody/DSC_0896.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nobody/DSC_0896.JPG`,webp:`./obrazky/nobody/DSC_0896.JPG`},display:{jpeg:`./obrazky/nobody/DSC_0896.JPG`,webp:`./obrazky/nobody/DSC_0896.JPG`}}},{source:`./obrazky/nobody/DSC_0899.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nobody/DSC_0899.JPG`,webp:`./obrazky/nobody/DSC_0899.JPG`},display:{jpeg:`./obrazky/nobody/DSC_0899.JPG`,webp:`./obrazky/nobody/DSC_0899.JPG`}}},{source:`./obrazky/nobody/DSC_0900.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nobody/DSC_0900.JPG`,webp:`./obrazky/nobody/DSC_0900.JPG`},display:{jpeg:`./obrazky/nobody/DSC_0900.JPG`,webp:`./obrazky/nobody/DSC_0900.JPG`}}}],"nova-genesis":[{source:`./obrazky/nova-genesis/DSC_0858.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nova-genesis/DSC_0858.JPG`,webp:`./obrazky/nova-genesis/DSC_0858.JPG`},display:{jpeg:`./obrazky/nova-genesis/DSC_0858.JPG`,webp:`./obrazky/nova-genesis/DSC_0858.JPG`}}},{source:`./obrazky/nova-genesis/DSC_0860.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nova-genesis/DSC_0860.JPG`,webp:`./obrazky/nova-genesis/DSC_0860.JPG`},display:{jpeg:`./obrazky/nova-genesis/DSC_0860.JPG`,webp:`./obrazky/nova-genesis/DSC_0860.JPG`}}},{source:`./obrazky/nova-genesis/DSC_0862.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nova-genesis/DSC_0862.JPG`,webp:`./obrazky/nova-genesis/DSC_0862.JPG`},display:{jpeg:`./obrazky/nova-genesis/DSC_0862.JPG`,webp:`./obrazky/nova-genesis/DSC_0862.JPG`}}},{source:`./obrazky/nova-genesis/DSC_0864.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nova-genesis/DSC_0864.JPG`,webp:`./obrazky/nova-genesis/DSC_0864.JPG`},display:{jpeg:`./obrazky/nova-genesis/DSC_0864.JPG`,webp:`./obrazky/nova-genesis/DSC_0864.JPG`}}},{source:`./obrazky/nova-genesis/DSC_0870.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nova-genesis/DSC_0870.JPG`,webp:`./obrazky/nova-genesis/DSC_0870.JPG`},display:{jpeg:`./obrazky/nova-genesis/DSC_0870.JPG`,webp:`./obrazky/nova-genesis/DSC_0870.JPG`}}},{source:`./obrazky/nova-genesis/DSC_0872.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nova-genesis/DSC_0872.JPG`,webp:`./obrazky/nova-genesis/DSC_0872.JPG`},display:{jpeg:`./obrazky/nova-genesis/DSC_0872.JPG`,webp:`./obrazky/nova-genesis/DSC_0872.JPG`}}},{source:`./obrazky/nova-genesis/DSC_0962.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/nova-genesis/DSC_0962.JPG`,webp:`./obrazky/nova-genesis/DSC_0962.JPG`},display:{jpeg:`./obrazky/nova-genesis/DSC_0962.JPG`,webp:`./obrazky/nova-genesis/DSC_0962.JPG`}}}],octopus:[{source:`./obrazky/octopus/DSC_0905.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/octopus/DSC_0905.JPG`,webp:`./obrazky/octopus/DSC_0905.JPG`},display:{jpeg:`./obrazky/octopus/DSC_0905.JPG`,webp:`./obrazky/octopus/DSC_0905.JPG`}}},{source:`./obrazky/octopus/DSC_0907.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/octopus/DSC_0907.JPG`,webp:`./obrazky/octopus/DSC_0907.JPG`},display:{jpeg:`./obrazky/octopus/DSC_0907.JPG`,webp:`./obrazky/octopus/DSC_0907.JPG`}}},{source:`./obrazky/octopus/DSC_0909.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/octopus/DSC_0909.JPG`,webp:`./obrazky/octopus/DSC_0909.JPG`},display:{jpeg:`./obrazky/octopus/DSC_0909.JPG`,webp:`./obrazky/octopus/DSC_0909.JPG`}}},{source:`./obrazky/octopus/DSC_0912.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/octopus/DSC_0912.JPG`,webp:`./obrazky/octopus/DSC_0912.JPG`},display:{jpeg:`./obrazky/octopus/DSC_0912.JPG`,webp:`./obrazky/octopus/DSC_0912.JPG`}}},{source:`./obrazky/octopus/DSC_0945.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/octopus/DSC_0945.JPG`,webp:`./obrazky/octopus/DSC_0945.JPG`},display:{jpeg:`./obrazky/octopus/DSC_0945.JPG`,webp:`./obrazky/octopus/DSC_0945.JPG`}}},{source:`./obrazky/octopus/IMG_4984.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/octopus/IMG_4984.JPG`,webp:`./obrazky/octopus/IMG_4984.JPG`},display:{jpeg:`./obrazky/octopus/IMG_4984.JPG`,webp:`./obrazky/octopus/IMG_4984.JPG`}}},{source:`./obrazky/octopus/IMG_4987.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/octopus/IMG_4987.JPG`,webp:`./obrazky/octopus/IMG_4987.JPG`},display:{jpeg:`./obrazky/octopus/IMG_4987.JPG`,webp:`./obrazky/octopus/IMG_4987.JPG`}}}],"om-spiral":[{source:`./obrazky/om-spiral/DSC_0875.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/om-spiral/DSC_0875.JPG`,webp:`./obrazky/om-spiral/DSC_0875.JPG`},display:{jpeg:`./obrazky/om-spiral/DSC_0875.JPG`,webp:`./obrazky/om-spiral/DSC_0875.JPG`}}},{source:`./obrazky/om-spiral/DSC_0877.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/om-spiral/DSC_0877.JPG`,webp:`./obrazky/om-spiral/DSC_0877.JPG`},display:{jpeg:`./obrazky/om-spiral/DSC_0877.JPG`,webp:`./obrazky/om-spiral/DSC_0877.JPG`}}},{source:`./obrazky/om-spiral/DSC_0878.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/om-spiral/DSC_0878.JPG`,webp:`./obrazky/om-spiral/DSC_0878.JPG`},display:{jpeg:`./obrazky/om-spiral/DSC_0878.JPG`,webp:`./obrazky/om-spiral/DSC_0878.JPG`}}},{source:`./obrazky/om-spiral/DSC_0880.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/om-spiral/DSC_0880.JPG`,webp:`./obrazky/om-spiral/DSC_0880.JPG`},display:{jpeg:`./obrazky/om-spiral/DSC_0880.JPG`,webp:`./obrazky/om-spiral/DSC_0880.JPG`}}},{source:`./obrazky/om-spiral/DSC_0882.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/om-spiral/DSC_0882.JPG`,webp:`./obrazky/om-spiral/DSC_0882.JPG`},display:{jpeg:`./obrazky/om-spiral/DSC_0882.JPG`,webp:`./obrazky/om-spiral/DSC_0882.JPG`}}},{source:`./obrazky/om-spiral/DSC_0885.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/om-spiral/DSC_0885.JPG`,webp:`./obrazky/om-spiral/DSC_0885.JPG`},display:{jpeg:`./obrazky/om-spiral/DSC_0885.JPG`,webp:`./obrazky/om-spiral/DSC_0885.JPG`}}},{source:`./obrazky/om-spiral/DSC_0887.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/om-spiral/DSC_0887.JPG`,webp:`./obrazky/om-spiral/DSC_0887.JPG`},display:{jpeg:`./obrazky/om-spiral/DSC_0887.JPG`,webp:`./obrazky/om-spiral/DSC_0887.JPG`}}}],radegast:[{source:`./obrazky/radegast/IMG_3049.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/radegast/IMG_3049.JPG`,webp:`./obrazky/radegast/IMG_3049.JPG`},display:{jpeg:`./obrazky/radegast/IMG_3049.JPG`,webp:`./obrazky/radegast/IMG_3049.JPG`}}},{source:`./obrazky/radegast/IMG_3050.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/radegast/IMG_3050.JPG`,webp:`./obrazky/radegast/IMG_3050.JPG`},display:{jpeg:`./obrazky/radegast/IMG_3050.JPG`,webp:`./obrazky/radegast/IMG_3050.JPG`}}},{source:`./obrazky/radegast/IMG_3052.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/radegast/IMG_3052.JPG`,webp:`./obrazky/radegast/IMG_3052.JPG`},display:{jpeg:`./obrazky/radegast/IMG_3052.JPG`,webp:`./obrazky/radegast/IMG_3052.JPG`}}},{source:`./obrazky/radegast/IMG_3054.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/radegast/IMG_3054.JPG`,webp:`./obrazky/radegast/IMG_3054.JPG`},display:{jpeg:`./obrazky/radegast/IMG_3054.JPG`,webp:`./obrazky/radegast/IMG_3054.JPG`}}},{source:`./obrazky/radegast/IMG_3059.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/radegast/IMG_3059.JPG`,webp:`./obrazky/radegast/IMG_3059.JPG`},display:{jpeg:`./obrazky/radegast/IMG_3059.JPG`,webp:`./obrazky/radegast/IMG_3059.JPG`}}},{source:`./obrazky/radegast/IMG_3060.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/radegast/IMG_3060.JPG`,webp:`./obrazky/radegast/IMG_3060.JPG`},display:{jpeg:`./obrazky/radegast/IMG_3060.JPG`,webp:`./obrazky/radegast/IMG_3060.JPG`}}}],stand:[{source:`./obrazky/stand/img_5053_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/stand/img_5053_optimized.jpg`,webp:`./obrazky/stand/img_5053_optimized.jpg`},display:{jpeg:`./obrazky/stand/img_5053_optimized.jpg`,webp:`./obrazky/stand/img_5053_optimized.jpg`}}},{source:`./obrazky/stand/img_5054_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/stand/img_5054_optimized.jpg`,webp:`./obrazky/stand/img_5054_optimized.jpg`},display:{jpeg:`./obrazky/stand/img_5054_optimized.jpg`,webp:`./obrazky/stand/img_5054_optimized.jpg`}}},{source:`./obrazky/stand/img_5055_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/stand/img_5055_optimized.jpg`,webp:`./obrazky/stand/img_5055_optimized.jpg`},display:{jpeg:`./obrazky/stand/img_5055_optimized.jpg`,webp:`./obrazky/stand/img_5055_optimized.jpg`}}},{source:`./obrazky/stand/img_5056_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/stand/img_5056_optimized.jpg`,webp:`./obrazky/stand/img_5056_optimized.jpg`},display:{jpeg:`./obrazky/stand/img_5056_optimized.jpg`,webp:`./obrazky/stand/img_5056_optimized.jpg`}}},{source:`./obrazky/stand/img_5057_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/stand/img_5057_optimized.jpg`,webp:`./obrazky/stand/img_5057_optimized.jpg`},display:{jpeg:`./obrazky/stand/img_5057_optimized.jpg`,webp:`./obrazky/stand/img_5057_optimized.jpg`}}}],sun:[{source:`./obrazky/sun/IMG_5012.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/sun/IMG_5012.JPG`,webp:`./obrazky/sun/IMG_5012.JPG`},display:{jpeg:`./obrazky/sun/IMG_5012.JPG`,webp:`./obrazky/sun/IMG_5012.JPG`}}},{source:`./obrazky/sun/IMG_5014.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/sun/IMG_5014.JPG`,webp:`./obrazky/sun/IMG_5014.JPG`},display:{jpeg:`./obrazky/sun/IMG_5014.JPG`,webp:`./obrazky/sun/IMG_5014.JPG`}}},{source:`./obrazky/sun/IMG_5015.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/sun/IMG_5015.JPG`,webp:`./obrazky/sun/IMG_5015.JPG`},display:{jpeg:`./obrazky/sun/IMG_5015.JPG`,webp:`./obrazky/sun/IMG_5015.JPG`}}},{source:`./obrazky/sun/IMG_5018.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/sun/IMG_5018.JPG`,webp:`./obrazky/sun/IMG_5018.JPG`},display:{jpeg:`./obrazky/sun/IMG_5018.JPG`,webp:`./obrazky/sun/IMG_5018.JPG`}}},{source:`./obrazky/sun/IMG_5019.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/sun/IMG_5019.JPG`,webp:`./obrazky/sun/IMG_5019.JPG`},display:{jpeg:`./obrazky/sun/IMG_5019.JPG`,webp:`./obrazky/sun/IMG_5019.JPG`}}},{source:`./obrazky/sun/IMG_5020.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/sun/IMG_5020.JPG`,webp:`./obrazky/sun/IMG_5020.JPG`},display:{jpeg:`./obrazky/sun/IMG_5020.JPG`,webp:`./obrazky/sun/IMG_5020.JPG`}}},{source:`./obrazky/sun/IMG_5022.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/sun/IMG_5022.JPG`,webp:`./obrazky/sun/IMG_5022.JPG`},display:{jpeg:`./obrazky/sun/IMG_5022.JPG`,webp:`./obrazky/sun/IMG_5022.JPG`}}},{source:`./obrazky/sun/IMG_5024.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/sun/IMG_5024.JPG`,webp:`./obrazky/sun/IMG_5024.JPG`},display:{jpeg:`./obrazky/sun/IMG_5024.JPG`,webp:`./obrazky/sun/IMG_5024.JPG`}}}],tesla:[{source:`./obrazky/tesla/IMG_5030.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/tesla/IMG_5030.JPG`,webp:`./obrazky/tesla/IMG_5030.JPG`},display:{jpeg:`./obrazky/tesla/IMG_5030.JPG`,webp:`./obrazky/tesla/IMG_5030.JPG`}}},{source:`./obrazky/tesla/IMG_5031.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/tesla/IMG_5031.JPG`,webp:`./obrazky/tesla/IMG_5031.JPG`},display:{jpeg:`./obrazky/tesla/IMG_5031.JPG`,webp:`./obrazky/tesla/IMG_5031.JPG`}}},{source:`./obrazky/tesla/IMG_5034.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/tesla/IMG_5034.JPG`,webp:`./obrazky/tesla/IMG_5034.JPG`},display:{jpeg:`./obrazky/tesla/IMG_5034.JPG`,webp:`./obrazky/tesla/IMG_5034.JPG`}}},{source:`./obrazky/tesla/IMG_5037.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/tesla/IMG_5037.JPG`,webp:`./obrazky/tesla/IMG_5037.JPG`},display:{jpeg:`./obrazky/tesla/IMG_5037.JPG`,webp:`./obrazky/tesla/IMG_5037.JPG`}}},{source:`./obrazky/tesla/IMG_5047.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/tesla/IMG_5047.JPG`,webp:`./obrazky/tesla/IMG_5047.JPG`},display:{jpeg:`./obrazky/tesla/IMG_5047.JPG`,webp:`./obrazky/tesla/IMG_5047.JPG`}}},{source:`./obrazky/tesla/IMG_5049.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/tesla/IMG_5049.JPG`,webp:`./obrazky/tesla/IMG_5049.JPG`},display:{jpeg:`./obrazky/tesla/IMG_5049.JPG`,webp:`./obrazky/tesla/IMG_5049.JPG`}}},{source:`./obrazky/tesla/IMG_5050.JPG`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/tesla/IMG_5050.JPG`,webp:`./obrazky/tesla/IMG_5050.JPG`},display:{jpeg:`./obrazky/tesla/IMG_5050.JPG`,webp:`./obrazky/tesla/IMG_5050.JPG`}}}],"window-to-the-universe":[{source:`./obrazky/window-to-the-universe/img_5347-2_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/window-to-the-universe/img_5347-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5347-2_optimized.jpg`},display:{jpeg:`./obrazky/window-to-the-universe/img_5347-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5347-2_optimized.jpg`}}},{source:`./obrazky/window-to-the-universe/img_5356-2_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/window-to-the-universe/img_5356-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5356-2_optimized.jpg`},display:{jpeg:`./obrazky/window-to-the-universe/img_5356-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5356-2_optimized.jpg`}}},{source:`./obrazky/window-to-the-universe/img_5357-2_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/window-to-the-universe/img_5357-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5357-2_optimized.jpg`},display:{jpeg:`./obrazky/window-to-the-universe/img_5357-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5357-2_optimized.jpg`}}},{source:`./obrazky/window-to-the-universe/img_5358-2_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/window-to-the-universe/img_5358-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5358-2_optimized.jpg`},display:{jpeg:`./obrazky/window-to-the-universe/img_5358-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5358-2_optimized.jpg`}}},{source:`./obrazky/window-to-the-universe/img_5359-2_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/window-to-the-universe/img_5359-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5359-2_optimized.jpg`},display:{jpeg:`./obrazky/window-to-the-universe/img_5359-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5359-2_optimized.jpg`}}},{source:`./obrazky/window-to-the-universe/img_5360-2_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/window-to-the-universe/img_5360-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5360-2_optimized.jpg`},display:{jpeg:`./obrazky/window-to-the-universe/img_5360-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5360-2_optimized.jpg`}}},{source:`./obrazky/window-to-the-universe/img_5362-2_optimized.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/window-to-the-universe/img_5362-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5362-2_optimized.jpg`},display:{jpeg:`./obrazky/window-to-the-universe/img_5362-2_optimized.jpg`,webp:`./obrazky/window-to-the-universe/img_5362-2_optimized.jpg`}}}]},n={logo_upraveno:{source:`./obrazky/logo_upraveno.png`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/logo_upraveno.png`,webp:`./obrazky/logo_upraveno.png`},display:{jpeg:`./obrazky/logo_upraveno.png`,webp:`./obrazky/logo_upraveno.png`}}},vesmirna_mlhovina:{source:`./obrazky/vesmirna_mlhovina.png`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/vesmirna_mlhovina.png`,webp:`./obrazky/vesmirna_mlhovina.png`},display:{jpeg:`./obrazky/vesmirna_mlhovina.png`,webp:`./obrazky/vesmirna_mlhovina.png`}}},workshop_vyroby_gongdrumu:{source:`./obrazky/workshop_vyroby_gongdrumu.jpg`,width:0,height:0,placeholder:``,variants:{card:{jpeg:`./obrazky/workshop_vyroby_gongdrumu.jpg`,webp:`./obrazky/workshop_vyroby_gongdrumu.jpg`},display:{jpeg:`./obrazky/workshop_vyroby_gongdrumu.jpg`,webp:`./obrazky/workshop_vyroby_gongdrumu.jpg`}}}},r={insight:`./audio/insight.mp3`,"little-thai":`./audio/little-thai.mp3`,"lotus-flower":`./audio/lotus-flower.mp3`,mandala:`./audio/mandala.mp3`,nobody:`./audio/nobody.mp3`,"nova-genesis":`./audio/nova-genesis.mp3`,octopus:`./audio/octopus.mp3`,"om-spiral":`./audio/om-spiral.mp3`,radegast:`./audio/radegast.mp3`,sun:`./audio/sun.mp3`,tesla:`./audio/tesla.mp3`,"window-to-the-universe":`./audio/window-to-the-universe.mp3`};function i(e,t,n,r={}){let i=e.variants[t],a=r.className?` class="${r.className}"`:``,o=r.loading?` loading="${r.loading}"`:``,s=r.decoding?` decoding="${r.decoding}"`:``,c=r.sizes?` sizes="${r.sizes}"`:``,l=r.width?` width="${r.width}"`:``,u=r.height?` height="${r.height}"`:``;return`
    <picture>
      <source type="image/webp" srcset="${i.webp}"${c} />
      <img
        src="${i.jpeg}"
        alt="${n}"${a}${o}${s}${l}${u}
        style="background-image:url('${e.placeholder}');background-size:cover"
      />
    </picture>
  `.trim()}var a=new Set([`window-to-the-universe`,`radegast`,`insight`,`lotus-flower`,`sun`,`mandala`,`nova-genesis`,`little-thai`]),o=[{slug:`window-to-the-universe`,name:`Window to the Universe`,meta:`průměr 1000 mm`,description:`Hluboký základ inspirovaný solfeggio frekvencí stability 174 Hz a zářivé alikvoty pro nové začátky.`},{slug:`radegast`,name:`Radegast`,meta:`průměr 1000 mm`,description:`Temný zvuk hlubokého vesmíru laděný do devíti tónů.`},{slug:`little-thai`,name:`Little Thai`,meta:`průměr 480 mm`,description:`Hravý, pozitivní nástroj s jasnou odezvou a přátelským charakterem.`},{slug:`insight`,name:`Insight`,meta:`průměr 450 mm`,description:`Podmanivě drnčivý zvuk vhodný pro soustředěnou osobní praxi.`},{slug:`lotus-flower`,name:`Lotus Flower`,meta:`průměr 500 mm`,description:`Klidný, meditativní a pročišťující zvuk pro ztišení mysli.`},{slug:`octopus`,name:`Octopus`,meta:`průměr 800 mm`,description:`Transformační, mocný a hluboký tón F v ladění 432 Hz s bohatými alikvoty.`},{slug:`sun`,name:`Sun`,meta:`průměr 700 mm`,description:`Živý a svěží zvuk laděný na G# ve 432 Hz, zaměřený na oblast solar plexu.`},{slug:`tesla`,name:`Tesla`,meta:`průměr 600 mm`,description:`Jemný, elektrizující zvuk, který otevírá a rozšiřuje prostor.`},{slug:`mandala`,name:`Mandala`,meta:`rituální gong`,description:`Menší rituální nástroj s jemným, plným a zpřítomňujícím zvukem v ladění 432 Hz.`},{slug:`nova-genesis`,name:`Nova Genesis`,meta:`Nova Genesis`,description:`TODO popis`},{slug:`nobody`,name:`Nobody`,meta:`Nobody`,description:`TODO popis`},{slug:`om-spiral`,name:`Om Spiral`,meta:`Om Spiral`,description:`TODO popis`},{slug:`stand`,name:`Stojan na GongDrum`,meta:`nastavitelná výška`,description:`Teleskopický, rozložitelný a skladný stojan pro pohodlné hraní i transport.`}];function s(e){let n=t[e.slug]??[],i=n[0]??null;return{...e,gallery:n,image:i,imageAlt:`GongDrum ${e.name}`,audio:r[e.slug],sold:a.has(e.slug)}}function c(e){return e.map(e=>encodeURIComponent(JSON.stringify(e))).join(`,`)}var l=o.map(s).sort((e,t)=>Number(e.sold)-Number(t.sold));function u(e){return e.audio?`
    <div class="gong-player" data-gong-player>
      <div class="gong-player-bar">
        <button
          type="button"
          class="gong-player-toggle"
          aria-pressed="false"
          aria-label="Přehrát ukázku: ${e.name}"
        >
          <span class="gong-player-icon" aria-hidden="true"></span>
        </button>
        <button
          type="button"
          class="gong-player-seek"
          aria-label="Posunout přehrávání ukázky: ${e.name}"
        >
          <span class="gong-player-label">Poslech ukázky</span>
        </button>
      </div>
      <audio preload="none" src="${e.audio}"></audio>
    </div>
  `:``}function d(e){let t=e.sold?` (Prodáno)`:``,n=e.sold?`Chci podobný kus`:`Mám zájem`,r=e.image?i(e.image,`card`,e.imageAlt,{className:`product-image`,loading:`lazy`,decoding:`async`,sizes:`(max-width: 640px) 100vw, (max-width: 1100px) 45vw, 300px`}):`<span class="product-image product-image-placeholder" role="img" aria-label="${e.imageAlt}"></span>`,a=e.image?encodeURIComponent(JSON.stringify(e.image)):``;return`
    <article class="product-card${e.sold?` is-sold`:``}">
      <button
        type="button"
        class="product-image-button${e.gallery.length?``:` is-disabled`}"
        data-gallery-opener
        data-gallery="${c(e.gallery)}"
        data-gallery-fallback="${a}"
        data-gallery-start="0"
        data-gallery-caption="${e.name}"
        aria-label="Otevřít galerii: ${e.name}${t}"
        ${e.gallery.length?``:`disabled`}
      >
        <span class="product-image-wrap">
          ${r}
          ${e.sold?`<span class="sold-banner" aria-hidden="true">Prodáno</span>`:``}
        </span>
      </button>
      <div class="product-meta">${e.meta}</div>
      <h3>${e.name}</h3>
      <p>${e.description}</p>
      ${u(e)}
      <a href="#contact">${n}</a>
    </article>
  `}function f(){return`
    <div
      id="gdLightbox"
      class="gd-lightbox"
      aria-hidden="true"
      role="dialog"
      aria-modal="true"
      aria-label="Prohlížeč fotek"
    >
      <div class="gd-backdrop" data-close></div>
      <div class="gd-frame" role="document">
        <button class="gd-close" type="button" aria-label="Zavřít" data-close>✕</button>
        <button class="gd-nav gd-prev" type="button" aria-label="Předchozí snímek">‹</button>
        <figure class="gd-stage">
          <div id="gdSlide" class="gd-slide" aria-live="polite"></div>
          <figcaption id="gdCaption"></figcaption>
        </figure>
        <button class="gd-nav gd-next" type="button" aria-label="Další snímek">›</button>
        <div class="gd-counter" id="gdCounter">1/1</div>
      </div>
    </div>
  `}function p(e){if(!e)return null;try{return JSON.parse(decodeURIComponent(e))}catch{let t=e.trim();return t?{source:t,width:0,height:0,placeholder:``,variants:{card:{jpeg:t,webp:t},display:{jpeg:t,webp:t}}}:null}}function m(e,t){return i(e,`display`,t,{className:`gd-slide-image`,decoding:`async`,sizes:`100vw`})}function h(e){let t=new Image;t.src=e}function g(){let e=document.getElementById(`gdLightbox`),t=document.getElementById(`gdSlide`),n=document.getElementById(`gdCaption`),r=document.getElementById(`gdCounter`),i=e?.querySelector(`.gd-prev`),a=e?.querySelector(`.gd-next`);if(!e||!t||!n||!r||!i||!a)return;let o=[],s=0,c=null,l=null,u=()=>{r.textContent=`${s+1}/${o.length||1}`},d=()=>{[s-1,s+1].forEach(e=>{let t=(e+o.length)%o.length,n=o[t];h(n.variants.display.webp),h(n.variants.display.jpeg)})},f=e=>{if(!o.length)return;s=(e+o.length)%o.length;let r=o[s];t.innerHTML=m(r,n.textContent||``),u(),d()},g=()=>{e.classList.remove(`open`),e.setAttribute(`aria-hidden`,`true`),document.body.style.overflow=``,t.innerHTML=``,o=[],c?.focus()},_=(t,r,i)=>{t.length&&(c=document.activeElement,o=t,n.textContent=i,e.classList.add(`open`),e.setAttribute(`aria-hidden`,`false`),document.body.style.overflow=`hidden`,f(r),a.focus())};i.addEventListener(`click`,()=>f(s-1)),a.addEventListener(`click`,()=>f(s+1)),e.querySelectorAll(`[data-close]`).forEach(e=>{e.addEventListener(`click`,g)}),document.addEventListener(`keydown`,t=>{e.classList.contains(`open`)&&(t.key===`Escape`&&g(),t.key===`ArrowLeft`&&f(s-1),t.key===`ArrowRight`&&f(s+1))}),t.addEventListener(`touchstart`,e=>{l=e.changedTouches[0].clientX},{passive:!0}),t.addEventListener(`touchend`,e=>{if(l===null)return;let t=e.changedTouches[0].clientX-l;Math.abs(t)>40&&f(t>0?s-1:s+1),l=null},{passive:!0}),document.querySelectorAll(`[data-gallery-opener]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=(e.getAttribute(`data-gallery`)||``).split(`,`).map(e=>p(e)).filter(e=>e!==null),n=p(e.getAttribute(`data-gallery-fallback`)||``),r=t.length?t:n?[n]:[],i=Number.parseInt(e.getAttribute(`data-gallery-start`)||`0`,10),a=e.getAttribute(`data-gallery-caption`)||``;_(r,Number.isNaN(i)?0:i,a)})})}function _(){let e=document.querySelector(`.nav`),t=document.querySelector(`.nav-toggle`),n=document.querySelector(`#nav-menu`);if(!e||!t||!n)return;let r=()=>{e.classList.remove(`nav--open`),t.setAttribute(`aria-expanded`,`false`),t.setAttribute(`aria-label`,`Otevřít menu`)},i=()=>{e.classList.add(`nav--open`),t.setAttribute(`aria-expanded`,`true`),t.setAttribute(`aria-label`,`Zavřít menu`)};t.addEventListener(`click`,()=>{e.classList.contains(`nav--open`)?r():i()}),n.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,r)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&r()})}var v=[`Každý kus vzniká ručně v dílně Gong Drum`,`Spojuje proporce gongu, handpanu a rytmiku šamanského bubnu`,`Ladění respektuje specifické frekvence, harmonii a živý dozvuk`],y=[{title:`Workshop hry na GongDrum`,copy:`Vyzkoušej různé GongDrumy, objev jejich zvukové možnosti a zažij, jak rytmus vede k meditaci i transovému naladění.`},{title:`Workshop výroby GongDrumu`,copy:`Intenzivní pobyt v kovárně, kde pod vedením Vojtěcha vzniká vlastní menší nebo orchestrální GongDrum.`,infoImage:n.workshop_vyroby_gongdrumu,infoCaption:`Workshop výroby GongDrumu`}];function b(e){let t=e.infoImage?`
        <button
          type="button"
          class="workshop-info-link"
          data-gallery-opener
          data-gallery-fallback="${encodeURIComponent(JSON.stringify(e.infoImage))}"
          data-gallery-caption="${e.infoCaption||e.title}"
          aria-label="Více informací: ${e.title}"
        >
          Více informací
        </button>
      `:``;return`
    <article class="workshop-card">
      <h3>${e.title}</h3>
      <p>${e.copy}</p>
      ${t}
    </article>
  `}var x=[`Meditace s GongDrumy: záměr uzdravení, CVČ Jabloňka v Brně-Medlánkách.`,`Nové termíny workshopů budou postupně oznámeny na sociálních sítích.`,`Ve vývoji je GongDrum laděný do devíti solfeggio frekvencí.`],S=i(n.logo_upraveno,`card`,`Gong Drum`,{className:`logo-image`,loading:`eager`,decoding:`async`,width:861,height:850,sizes:`180px`}),C=i(n.logo_upraveno,`display`,`Gong Drum logo`,{className:`logo-hero`,loading:`eager`,decoding:`async`,width:861,height:850,sizes:`(max-width: 900px) 70vw, 420px`}),w=n.vesmirna_mlhovina;document.documentElement.style.setProperty(`--bg-image-webp`,`url("${w.variants.display.webp}")`),document.documentElement.style.setProperty(`--bg-image-fallback`,`url("${w.variants.display.jpeg}")`),document.querySelector(`#app`).innerHTML=`
  <main class="site-shell">
    <nav class="nav" aria-label="Hlavní navigace">
      <a class="logo" href="#top" aria-label="Gong Drum home">
        ${S}
      </a>
      <button
        class="nav-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="nav-menu"
        aria-label="Otevřít menu"
      >
        <span class="nav-toggle-bar" aria-hidden="true"></span>
        <span class="nav-toggle-bar" aria-hidden="true"></span>
        <span class="nav-toggle-bar" aria-hidden="true"></span>
      </button>
      <div id="nav-menu" class="nav-links">
        <a href="#collection">Galerie</a>
        <a href="#about">O nástroji</a>
        <a href="#workshops">Workshopy</a>
        <a href="#news">Aktuality</a>
        <a class="nav-cta" href="#contact">Poptávka</a>
      </div>
    </nav>

    <section id="top" class="hero">
      <div class="hero-copy">
        ${C}
        <p class="slogan">Tvoř vesmír!</p>
        <p class="eyebrow">Ručně kované GongDrumy</p>
        <h1>Ručně vyráběné GongDrumy pro hluboký, živý zvuk</h1>
        <p class="hero-text">
          Originální nástroje Vojtěcha Hrubého spojují gong a šamanský buben.
          Každý kus je laděn s respektem k proporcím, harmonii a osobitému příběhu.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#collection">Prohlédnout galerii</a>
          <a class="button secondary" href="#contact">Chci podobný kus</a>
        </div>
      </div>
      <div class="hero-card" aria-label="Vybraný GongDrum">
        <div class="gong-illustration">
          <span class="gong-ring ring-one"></span>
          <span class="gong-ring ring-two"></span>
          <span class="gong-ring ring-three"></span>
        </div>
        <strong>Nástroj pro songhealing, meditaci, rituál i společné hraní</strong>
      </div>
    </section>

    <section id="collection" class="section">
      <div class="section-heading">
        <p class="eyebrow">Galerie GongDrumů</p>
        <h2>Každý nástroj má vlastní hlas.</h2>
        <p>
          Ukázkový výběr nástrojů přibližuje velikosti, ladění a nálady GongDrumů.
          U každého kusu si můžeš poslechnout krátkou audio ukázku.
        </p>
      </div>
      <div class="product-grid">
        ${l.map(e=>d(e)).join(``)}
      </div>
    </section>

    <section id="about" class="about section">
      <div class="section-heading">
        <p class="eyebrow">O GongDrumu</p>
        <h2>Hudební i spirituální nástroj pro cestu do nitra.</h2>
      </div>
      <div class="about-copy">
        <p>
          GongDrum propojuje elementy gongu a šamanského bubnu. Vzniká ručně, s důrazem
          na ladění bossů do specifických frekvencí, jejich vzájemnou harmonii a dlouhý
          organický dozvuk.
        </p>
        <p>
          Hra je především rytmická. Pravidelný puls může hráče i posluchače přivést
          do změněného, transového stavu, ve kterém se zvuk stává oporou pro meditaci,
          osobní praxi i společný rituál.
        </p>
      </div>
    </section>

    <section id="experience" class="experience">
      <div>
        <p class="eyebrow">Proč GongDrum</p>
        <h2>Živá kovová rezonance s tělem bubnu.</h2>
      </div>
      <ul>
        ${v.map(e=>`<li>${e}</li>`).join(``)}
      </ul>
    </section>

    <section id="workshops" class="section">
      <div class="section-heading">
        <p class="eyebrow">Workshopy v dílně</p>
        <h2>Vyzkoušej hru, nebo si vytvoř vlastní nástroj.</h2>
      </div>
      <div class="workshop-grid">
        ${y.map(e=>b(e)).join(``)}
      </div>
      <div class="pricing-strip">
        <span>2 dny v kovárně: GongDrum 50-60 cm / 9 900 Kč</span>
        <span>4 dny v kovárně: GongDrum 70-80 cm / 14 900 Kč</span>
      </div>
    </section>

    <section id="news" class="news section">
      <div class="section-heading">
        <p class="eyebrow">Aktuality & festivaly</p>
        <h2>Krátké zprávy z dílny.</h2>
      </div>
      <ul>
        ${x.map(e=>`<li>${e}</li>`).join(``)}
      </ul>
    </section>

    <section id="contact" class="contact">
      <p class="eyebrow">Nezávazná poptávka</p>
      <h2>Máš zájem o GongDrum nebo workshop?</h2>
      <p>
        Napiš, jaký zvuk hledáš, jestli tě zajímá hotový nástroj, podobný kus na míru,
        nebo nejbližší termín workshopu.
      </p>
      <a class="button primary" href="mailto:hello@example.com?subject=GongDrum%20poptavka">
        Odeslat poptávku
      </a>
    </section>
  </main>
  ${f()}
`,_(),e(),g();