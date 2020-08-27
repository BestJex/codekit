# 1 - Change the mirror
Open the terminal and execute the following commands:

```sh
sed -e 's|^mirrorlist=|#mirrorlist=|g' \
    -e 's|^#baseurl=http://mirror.centos.org/{{path}}|baseurl={{link}}|g' \
    -i.bak \
    /etc/yum.repos.d/CentOS-Base.repo {{extra}}
```

# 2 - Update local cache
Open the terminal and execute the following commands:

```sh
yum makecache
```

# 3 - Good to go
Now you can use `yum` normally.

```sh
yum install <package name>
```
