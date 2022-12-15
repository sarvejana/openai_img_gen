1) Install npm
--sudo apt install npm
2) Install node.js
--sudo apt-get install node.js
3) create package.json
--npm init -y
4) create dotenv,express,openai
--npm i express openai dotenv
5) install nodemon --dev dependency
--npm i -D nodemon
6) change package.json to start node and nodemon to run index.js
7) run index.js by
--npm run dev
8) add code to index.js launch express server and take requests
9) test the code changes in index.js
--npm run dev
10) add api_key to .env and run 
--npm run dev
11) use desktop postman : blue-star-635388 is the team name postman
--https://blue-star-635388.postman.co/home
sudo netstat -tnlp
sudo iptables -L
sudo iptables -A INPUT -p tcp --dport 5000 -j ACCEPT
sudo netstat -an |grep 5000

--POST THE REQUEST to make routes and index are linked--
curl -X POST http://localhost:5000/openai/generateimage

--test the image URLs generated in the browser