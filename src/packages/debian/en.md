> Debian, also known as Debian GNU/Linux, is a Linux distribution composed of free and open-source software, developed by the community-supported Debian Project, which was established by Ian Murdock on August 16, 1993.
[source](https://en.wikipedia.org/wiki/Debian)

# 1 - Backup Current Configuration
Open the terminal and execute the following commands:

```bash
mv /etc/apt/sources.list /etc/apt/sources.list.bak
```

# 2 - Change the Mirrors
Open the terminal and execute the following commands:

```bash
cat << EOF > /etc/apt/sources.list
# Generated by CodeKit.net
deb {{link}}/ {{version}} main contrib non-free
deb {{link}}/ {{version}}-updates main contrib non-free
deb {{link}}/ {{version}}-backports main contrib non-free
deb {{link}}-security {{version}}/updates main contrib non-free

# deb-src {{link}}/ {{version}} main contrib non-free
# deb-src {{link}}/ {{version}}-updates main contrib non-free
# deb-src {{link}}/ {{version}}-backports main contrib non-free
# deb-src {{link}}-security {{version}}/updates main contrib non-free
EOF
```

# 3 - Update the Mirrors
Open the terminal and execute the following commands:

```bash
apt update
```

# 4 - Good to go
Now you can use `apt` normally.

```bash
apt install <package name>
```