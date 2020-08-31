> PyPI と略される Python パッケージインデックスは、 Python の公式のサードパーティソフトウェアリポジトリです。
[source](https://en.wikipedia.org/wiki/Python_Package_Index)

# 1 - ミラーを変更する
ターミナルを開き、次のコマンドを実行します。

```bash
pip config set global.index-url {{link}}/simple
```

# 2 - 使い始める
これで、 `pip` を通常どおり使用できます。

```bash
pip install <package name>
```
