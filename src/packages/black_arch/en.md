> BlackArch is a penetration testing distribution based on Arch Linux that provides a large amount of cyber security tools. It is an open-source distro created specially for penetration testers and security researchers.
[source](https://en.wikipedia.org/wiki/BlackArch)

# 1 - Change the mirror
Open the terminal and execute the following commands:

```bash
cat << EOF >> /etc/pacman.conf
[blackarch]
Server = {{link}}/$repo/os/$arch
EOF
```

# 2 - Update local cache and install keyring
Open the terminal and execute the following commands:

```bash
pacman -Syyu archlinuxcn-keyring
```

# 3 - Good to go
Now you can use `pacman` normally.

```bash
pacman -S <package name>
```
