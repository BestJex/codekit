> RubyGems は Ruby プログラミング言語用のパッケージマネージャーで、Ruby プログラムとライブラリを配布するための標準形式、gem のインストールを簡単に管理するために設計されたツール、およびそれらを配布するためのサーバーを提供します。

# 1 - ミラーソースを変更する

コマンドラインを開き、次のコマンドを実行します。

```bash
gem sources --add {{link}}/ --remove https://rubygems.org/
```

# 2 - ミラーソースを確認する

次のコマンドを実行して、ミラーソースが変更されたことを確認します。

```bash
gem sources -l
```

# 3 - 使い始める

これで、 `gem` を通常どおり使用できます。

```bash
gem install <package name>
```
