> Chakra is a Linux distribution originally based on Arch Linux and focused on KDE software, intending to provide a KDE/Qt minimizing use of other widget toolkits where possible. It has been well-received by critics.
[source](https://en.wikipedia.org/wiki/Chakra_(operating_system))

# 1 - Change the mirror
Open the terminal and execute the following commands:

```bash
mv /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak && echo "Server = {{link}}/$repo/$arch" > /etc/pacman.d/mirrorlist
```

# 2 - Update local cache
Open the terminal and execute the following commands:

```bash
pacman -Syy
```

# 3 - Good to go
Now you can use `pacman` normally.

```bash
pacman -S <package name>
```
