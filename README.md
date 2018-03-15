这个 Repo 是为了重现 [echarts 的一个 bug](https://github.com/ecomfe/echarts/issues/7944)。

重现方式：运行 `docker build -t echarts-bug . && docker run --rm -p 8080:8080 echarts-bug` 然后打开 http://localhost:8080
