# kadai-step1(就活技術課題)

## 仕様(実装方法)
```
ここにはそれぞれの機能をどのように実装したかを示す。
なお、envファイルで秘匿してるAPIキーは漏れ出た場合の事を考え、専用にGmailアドレスを取得して登録。

### ページ表示時
mounted()の部分で都道府県一覧を取得(JSONはprefecturesに入る)し、その結果に基づいてv-forでチェックボックスを生成。value等に県コードが入る。


### チェックボックス選択時
methods:の中にchecked関数を書き、その中で引数に応じてAPIから人口構成を取得(JSONはjinkoudataに入る)し、グラフ表示に使う配列を取り出して代入。
第2引数に県名(n.prefName)を指定することでラベルにそのまま代入して県名の表示を実装。

### CSS
スマートフォン、PCの両方において画面からチェックボックスなど表示しているものがはみ出ないように画面幅を基準にした割合でdivを表示。

## 開発に使用した環境
Microsoft Visual Studio Community 2022 (64 ビット) Version 17.1.3
-Node.js Tools   1.5.40105.1 
Node.js v18.13.0.
git version 2.44.0.windows.1
Windows11 version 23H2
Google Chrome バージョン(PC): 123.0.6312.107（Official Build） （64 ビット）

## 残った課題点
・チェックボックスの押せる数を制限していない(現状の実装状態だと１つ押したら他が押せなくなるまたは最後に押したチェックボックス以外を押してない状態にするのが望ましいように思う。)
・複数のグラフ表示を実装できていない。(datacollectionを配列にしてcheckedprefの数字の出入りに合わせて配列操作などで実装できるかを考えていたが、実装できなかった。)
・チェックボックスが押されたときに現れる「Uncaught (in promise) TypeError: Cannot convert object to primitive value」を解消できなかった。
・本来であればグラフ描画部分を別のソースコードファイルにする方が複数人での開発においては最適解であると思われる(実際Chart.jsの使い方を書いてるサイトではファイルを分けているものが多かった)が、ファイルを読み込めない問題を解決できなかったため全てを1ファイルで完結するようにした。
・TypeError: Cannot read properties of undefined (reading 'prefectures')がビルドしてgithubに置いたデータでのみ発生し、解決前に時間切れとなった。
・これらの課題点が発生した原因はVue.jsの特徴をつかみきれないまま制作作業に移らざるを得なかった状態と、本来別のファイルにして読み込むべきものまで(ファイルがうまく読み込めない問題もあり)1ファイルで解決しようとしたのが問題の可能性が高い。
・visualStudio内でESLint等の設定は追加してはいるが、正しく動いてるかが不明。
## npm run serve(LocalhostにURLにアクセスして表示)のスクリーンショット
![SS-VUE](https://github.com/Yamada-Shukatsu/teishutu-kadai/assets/165787876/6808f118-2a88-4b65-94df-196608137d57)