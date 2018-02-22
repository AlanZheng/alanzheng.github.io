# Editor.md

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

**鐩綍 (Table of Contents)**

[TOCM]

[TOC]

# Heading 1
## Heading 2               
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
# Heading 1 link [Heading link](https://github.com/pandao/editor.md "Heading link")
## Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")
### Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")
#### Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")
##### Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")
###### Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")

#### 鏍囬锛堢敤搴曠嚎鐨勫舰寮忥級Heading (underline)

This is an H1
=============

This is an H2
-------------

### 瀛楃鏁堟灉鍜屾í绾跨瓑
                
----

~~鍒犻櫎绾縹~ <s>鍒犻櫎绾匡紙寮€鍚瘑鍒獺TML鏍囩鏃讹級</s>
*鏂滀綋瀛�*      _鏂滀綋瀛梍
**绮椾綋**  __绮椾綋__
***绮楁枩浣�*** ___绮楁枩浣揰__

涓婃爣锛歑<sub>2</sub>锛屼笅鏍囷細O<sup>2</sup>

**缂╁啓(鍚孒TML鐨刟bbr鏍囩)**

> 鍗虫洿闀跨殑鍗曡瘝鎴栫煭璇殑缂╁啓褰㈠紡锛屽墠鎻愭槸寮€鍚瘑鍒獺TML鏍囩鏃讹紝宸查粯璁ゅ紑鍚�

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

### 寮曠敤 Blockquotes

> 寮曠敤鏂囨湰 Blockquotes

寮曠敤鐨勮鍐呮贩鍚� Blockquotes
                    
> 寮曠敤锛氬鏋滄兂瑕佹彃鍏ョ┖鐧芥崲琛宍鍗�<br />鏍囩`锛屽湪鎻掑叆澶勫厛閿叆涓や釜浠ヤ笂鐨勭┖鏍肩劧鍚庡洖杞﹀嵆鍙紝[鏅€氶摼鎺(http://localhost/)銆�

### 閿氱偣涓庨摼鎺� Links

[鏅€氶摼鎺(http://localhost/)

[鏅€氶摼鎺ュ甫鏍囬](http://localhost/ "鏅€氶摼鎺ュ甫鏍囬")

鐩存帴閾炬帴锛�<https://github.com>

[閿氱偣閾炬帴][anchor-id] 

[anchor-id]: http://www.this-anchor-link.com/

[mailto:test.test@gmail.com](mailto:test.test@gmail.com)

GFM a-tail link @pandao  閭鍦板潃鑷姩閾炬帴 test.test@gmail.com  www@vip.qq.com

> @pandao

### 澶氳瑷€浠ｇ爜楂樹寒 Codes

#### 琛屽唴浠ｇ爜 Inline code

鎵ц鍛戒护锛歚npm install marked`

#### 缂╄繘椋庢牸

鍗崇缉杩涘洓涓┖鏍硷紝涔熷仛涓哄疄鐜扮被浼� `<pre>` 棰勬牸寮忓寲鏂囨湰 ( Preformatted Text ) 鐨勫姛鑳姐€�

    <?php
        echo "Hello world!";
    ?>
    
棰勬牸寮忓寲鏂囨湰锛�

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

#### JS浠ｇ爜銆€

```javascript
function test() {
	console.log("Hello world!");
}
 
(function(){
    var box = function() {
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str) {
			alert("add", str);

			return this;
		},

		remove : function(str) {
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

#### HTML 浠ｇ爜 HTML codes

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <meta name="keywords" content="Editor.md, Markdown, Editor" />
        <title>Hello world!</title>
        <style type="text/css">
            body{font-size:14px;color:#444;font-family: "Microsoft Yahei", Tahoma, "Hiragino Sans GB", Arial;background:#fff;}
            ul{list-style: none;}
            img{border:none;vertical-align: middle;}
        </style>
    </head>
    <body>
        <h1 class="text-xxl">Hello world!</h1>
        <p class="text-green">Plain text</p>
    </body>
</html>
```

### 鍥剧墖 Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 鍥句负锛氬帵闂ㄧ櫧鍩庢矙婊�

鍥剧墖鍔犻摼鎺� (Image + Link)锛�

[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/images/7.jpg "鏉庡仴棣栧紶涓撹緫銆婁技姘存祦骞淬€嬪皝闈�")

> 鍥句负锛氭潕鍋ラ寮犱笓杈戙€婁技姘存祦骞淬€嬪皝闈�
                
----

### 鍒楄〃 Lists

#### 鏃犲簭鍒楄〃锛堝噺鍙凤級Unordered Lists (-)
                
- 鍒楄〃涓€
- 鍒楄〃浜�
- 鍒楄〃涓�
     
#### 鏃犲簭鍒楄〃锛堟槦鍙凤級Unordered Lists (*)

* 鍒楄〃涓€
* 鍒楄〃浜�
* 鍒楄〃涓�

#### 鏃犲簭鍒楄〃锛堝姞鍙峰拰宓屽锛塙nordered Lists (+)
                
+ 鍒楄〃涓€
+ 鍒楄〃浜�
    + 鍒楄〃浜�-1
    + 鍒楄〃浜�-2
    + 鍒楄〃浜�-3
+ 鍒楄〃涓�
    * 鍒楄〃涓€
    * 鍒楄〃浜�
    * 鍒楄〃涓�

#### 鏈夊簭鍒楄〃 Ordered Lists (-)
                
1. 绗竴琛�
2. 绗簩琛�
3. 绗笁琛�

#### GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2
                
----
                    
### 缁樺埗琛ㄦ牸 Tables

| 椤圭洰        | 浠锋牸   |  鏁伴噺  |
| --------   | -----:  | :----:  |
| 璁＄畻鏈�      | $1600   |   5     |
| 鎵嬫満        |   $12   |   12   |
| 绠＄嚎        |    $1    |  234  |
                    
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell 

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Function name | Description                    |
| ------------- | ------------------------------ |
| `help()`      | Display the help window.       |
| `destroy()`   | **Destroy your computer!**     |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

| Item      | Value |
| --------- | -----:|
| Computer  | $1600 |
| Phone     |   $12 |
| Pipe      |    $1 |
                
----

#### 鐗规畩绗﹀彿 HTML Entities Codes

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

[========]

### Emoji琛ㄦ儏 :smiley:

> Blockquotes :star:

#### GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:

- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;
- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;
- [x] [ ] :smiley: this is a complete item :smiley:;
- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao; 
- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;
    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;
    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);
 
#### 鍙嶆枩鏉� Escape

\*literal asterisks\*

[========]
            
### 绉戝鍏紡 TeX(KaTeX)

$$E=mc^2$$

琛屽唴鐨勫叕寮�$$E=mc^2$$琛屽唴鐨勫叕寮忥紝琛屽唴鐨�$$E=mc^2$$鍏紡銆�

$$x > y$$

$$\(\sqrt{3x-1}+(1+x)^2\)$$
                    
$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

澶氳鍏紡锛�

```math
\displaystyle
\left( \sum\_{k=1}^n a\_k b\_k \right)^2
\leq
\left( \sum\_{k=1}^n a\_k^2 \right)
\left( \sum\_{k=1}^n b\_k^2 \right)
```

```katex
\displaystyle 
    \frac{1}{
        \Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{
        \frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {
        1+\frac{e^{-6\pi}}
        {1+\frac{e^{-8\pi}}
         {1+\cdots} }
        } 
    }
```

```latex
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
```

### 鍒嗛〉绗� Page break

> Print Test: Ctrl + P

[========]

### 缁樺埗娴佺▼鍥� Flowchart

```flow
st=>start: 鐢ㄦ埛鐧婚檰
op=>operation: 鐧婚檰鎿嶄綔
cond=>condition: 鐧婚檰鎴愬姛 Yes or No?
e=>end: 杩涘叆鍚庡彴

st->op->cond
cond(yes)->e
cond(no)->op
```

[========]
                    
### 缁樺埗搴忓垪鍥� Sequence Diagram
                    
```seq
Andrew->China: Says Hello 
Note right of China: China thinks\nabout it 
China-->Andrew: How are you? 
Andrew->>China: I am good thanks!
```

### End