> RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries, a tool designed to easily manage the installation of gems, and a server for distributing them.

# 1 - Changing mirror source

Open the terminal and execute the following commands：

```bash
gem sources --add {{link}}/ --remove https://rubygems.org/
```

# 2 - Confirming mirror source

Execute the following commands to confirm the mirror source has been changed.

```bash
gem sources -l
```

# 3 - Good to go

Now you can use `gem` normally.

```bash
gem install <package name>
```
