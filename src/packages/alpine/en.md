> Alpine Linux is a Linux distribution based on musl and BusyBox, designed for security, simplicity, and resource efficiency. Because of its small size, it is commonly used in containers providing quick boot-up times.

# 1 - Change the mirror

Open the terminal and execute the following commands:

```sh
sed -i 's|http://dl-cdn.alpinelinux.org/alpine|{{link}}|g' /etc/apk/repositories
```

# 2 - Update local cache

Open the terminal and execute the following commands:

```sh
apk update
```

# 3 - Good to go

Now you can use `apk` normally.

```sh
apk add <package name>
```
