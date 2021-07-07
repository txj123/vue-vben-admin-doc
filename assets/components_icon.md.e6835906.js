import{o as n,c as a,a as s}from"./app.b2699450.js";const t='{"title":"icon 图标组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"Icon","slug":"icon"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Props","slug":"props"},{"level":2,"title":"SvgIcon","slug":"svgicon"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":3,"title":"Props","slug":"props-1"},{"level":2,"title":"IconPicker","slug":"iconpicker"},{"level":3,"title":"Usage","slug":"usage-2"},{"level":3,"title":"Props","slug":"props-2"}],"relativePath":"components/icon.md","lastUpdated":1625648317891}',p={},o=s('<h1 id="icon-图标组件"><a class="header-anchor" href="#icon-图标组件" aria-hidden="true">#</a> icon 图标组件</h1><h2 id="icon"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> Icon</h2><p>用于项目内组件的展示,基本支持所有图标库</p><p>支持按需加载,只打包所用到的图标</p><p>icon 组件位于 <a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/components/Icon" target="_blank" rel="noopener noreferrer">src/components/Icon</a>内</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>icon 的值可以在<a href="https://iconify.design" target="_blank" rel="noopener noreferrer">Iconify</a> 上面查询</p></div><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gg:loadbar-doc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Icon</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Icon&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td><code>string</code></td><td>-</td><td>图标名</td></tr><tr><td>color</td><td><code>string</code></td><td>-</td><td>图标颜色</td></tr><tr><td>size</td><td><code>number</code></td><td>16</td><td>图标大小</td></tr><tr><td>prefix</td><td><code>string</code></td><td>-</td><td>图标前缀</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果<code>icon</code>值以<code>|svg</code>结尾，则会渲染成<a href="#SvgIcon">SvgIcon 组件</a></p></div><h2 id="svgicon"><a class="header-anchor" href="#svgicon" aria-hidden="true">#</a> SvgIcon</h2><p>用于使用项目 svg 雪碧图</p><h3 id="usage-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SvgIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SvgIcon</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> SvgIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Icon&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> SvgIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="props-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td><code>string</code></td><td>-</td><td>svg 图标名</td></tr><tr><td>size</td><td><code>number</code></td><td>16</td><td>图标大小</td></tr></tbody></table><h2 id="iconpicker"><a class="header-anchor" href="#iconpicker" aria-hidden="true">#</a> IconPicker</h2><p>图标选择器</p><h3 id="usage-2"><a class="header-anchor" href="#usage-2" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPicker</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> IconPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Icon&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> IconPicker <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="props-2"><a class="header-anchor" href="#props-2" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>width</td><td><code>string</code></td><td>100%</td><td>宽度</td></tr><tr><td>pageSize</td><td><code>number</code></td><td>140</td><td>每页显示的图标数</td></tr><tr><td>copy</td><td><code>boolean</code></td><td>false</td><td>是否可以复制</td></tr><tr><td>mode</td><td><code>string</code></td><td><code>iconify</code></td><td>图标来源,为 svg 时,会读取所有 svg sprite 图标</td></tr></tbody></table>',23);p.render=function(s,t,p,e,c,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};
