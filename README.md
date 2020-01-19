# limit req test


## How to Use

### 1. run server

```bash
cd server
npm install
npm run start
```

&nbsp;

### http://localhost:4000

<img src="https://user-images.githubusercontent.com/25674959/72679151-55fe5400-3aa4-11ea-900a-97504d4b5db1.png" width="50%"></img>

&nbsp;

&nbsp;

### 2. run Nginx

### download Nginx

http://nginx.org/en/download.html

&nbsp;

### replace nginx.conf (with this repo)

**nginx-1.16.1/conf/nginx.conf (windows10)**  
<img src="https://user-images.githubusercontent.com/25674959/72679312-5113c180-3af1-11ea-9822-d48d62974a4b.png" width="50%"></img>

&nbsp;

**nginx detail**

```nginx
# ...

http {
    # ...

    limit_req_zone $binary_remote_addr zone=testZone:10m rate=10r/s;

    server {
        listen       80;
        server_name  localhost;

        location / {
            proxy_pass http://localhost:4000;
            # ...
        }

        location /recommend {
            proxy_pass http://localhost:4000/recommend;
            # ...
            
            limit_req zone=testZone burst=5;
            limit_req_status        429;
            limit_req_log_level     error;
        }

        # ...

    }

}
```

&nbsp;
&nbsp;

### run Nginx

<img src="https://user-images.githubusercontent.com/25674959/72679282-16118e00-3af1-11ea-8369-a03ed29e5478.png" width="50%"></img>

&nbsp;

&nbsp;

## 3. Test

### http://localhost

<img src="https://user-images.githubusercontent.com/25674959/72679240-b4e9ba80-3af0-11ea-86a8-a15a9c52f5c7.png" width="50%"></img>

&nbsp;

### click Button

<img src="https://user-images.githubusercontent.com/25674959/72679251-cdf26b80-3af0-11ea-824e-fbe94d8a6aa5.png" width="50%"></img> - Browser log

<img src="https://user-images.githubusercontent.com/25674959/72679264-eb273a00-3af0-11ea-98f1-9d3d8ab9ab43.png" width="50%"></img> - Server log
