> The Python Package Index, abbreviated as PyPI, is the official third-party software repository for Python.
[source](https://en.wikipedia.org/wiki/Python_Package_Index)

# 1 - Change the Mirrors
Open the terminal and execute the following commands:

```bash
pip config set global.index-url {{link}}/simple
```

# 2 - Good to go
Now you can use `pip` normally.

```bash
pip install <package name>
```
